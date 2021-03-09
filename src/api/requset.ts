// import Vue from 'vue'
// import router from '@/router'
import axios from 'axios';
import store from '@/store/index.js';
// const login_token = process.env.LOGIN_TOKEN;
import { ElMessage } from 'element-plus';
const service = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

// 添加请求拦截器
service.interceptors.request.use(
    function (config: any) {
        // store.dispatch('general/STARTLOADING',true);
        // if (config.data&&typeof config.data === 'string'){
        //     config.url = config.url + config.data;
        // } else {
        //     let roleType = store.getters['permission/ROLETYPE'];
        //     const obj = {
        //         merchantId: roleType === '21' || roleType === '22'?'':sessionStorage._ServicemerchantId
        //     };
        //     config.data = Object.assign({},obj,config.data);
        // }
        return config;
    },
    function (error: any) {
        // store.dispatch('general/STARTLOADING',false);
        return Promise.reject(error);
    }
);
interface resType { status: number; data: { success: boolean; err_msg: any; message: any; err_code: string | undefined; } | undefined; }
// 响应拦截器即异常处理
service.interceptors.response.use(
    (res: resType) => {
        // store.dispatch('general/STARTLOADING',false);
        if (res.status === 200) {
            if (res.data && res.data.success === false) {
                ElMessage.closeAll();
                ElMessage.error({
                    message: res.data.err_msg ? res.data.err_msg : res.data.message
                });
                if (res.data !== undefined && res.data.err_code !== undefined && res.data.err_code === '000006') {
                    store.dispatch('permission/LOGIN_OUT');
                }
                return Promise.reject(res);
            }
            return res.data;
        }
        return Promise.reject(res);
    },
    (err: { response: { status: any; }; message: string; }) => {
        // store.dispatch('general/STARTLOADING',false);
        if (err && err.response) {
            switch (err.response.status) {
                case 400:
                    err.message = '请求出错';
                    break;
                case 401:
                    ElMessage.warning({
                        message: '授权失败，请重新登录'
                    });
                    store.dispatch('permission/LOGIN_OUT');
                    return;
                case 403:
                    err.message = '拒绝访问';
                    break;
                case 404:
                    err.message = '请求错误,未找到该资源';
                    break;
                case 500:
                    err.message = '服务器端出错';
                    break;
                default:
                    err.message = 'error';
            }
        } else {
            err.message = '连接服务器失败';
        }
        ElMessage.error({
            message: err.message
        });
        return Promise.reject(err);
    }
);
export default service;
