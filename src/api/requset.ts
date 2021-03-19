// import Vue from 'vue'
import router from '@/router'
import axios from 'axios';
import store from '@/store';
// const login_token = process.env.LOGIN_TOKEN;
// @ts-ignore: Unreachable code error
import { ElMessage } from 'ElementPlus';
import { findMatchIndex } from './match';
const service = axios.create({
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});
let cancel;
let map = []
// 添加请求拦截器
service.interceptors.request.use(
    function (config: any) {
        config.cancelToken = new axios.CancelToken(function (c) {
            cancel = c
        })
        let match = findMatchIndex(map, config)
        if (match) {
            ElMessage.closeAll();
            ElMessage.error({
                message: '请勿连续点击'
            });
            cancel('请勿连续点击')
        } else {
            map.push({
                url: config.url,
                method: config.method,
                params: config.params
            })
            setTimeout(() => {
                map = []
            }, 2000)
        }
        return config;
    },
    function (error: any) {
        // store.dispatch('general/STARTLOADING',false);
        return Promise.reject(error);
    }
);
// 响应拦截器即异常处理
service.interceptors.response.use(
    (res) => {
        let message = res.data && res.data.message ? res.data.message : '请求失败';
        if (res.status === 200) {
            if (res.data.success === false) {
                if (res.data) {
                    ElMessage.closeAll();
                    if (message.includes('Query execution was interrupted')) {
                        ElMessage.error({
                            message: '目前使用的人太多啦，请喝口茶再来！'
                        });
                    } else {
                        ElMessage.error({
                            message: message
                        });
                    }
                }
                if (res.data.code === '19995') {
                    store.dispatch('permission/LOGIN_OUT');
                }
                return Promise.reject(message);
            }
            return res.data;
        }
        ElMessage.closeAll();
        ElMessage.error({
            message: message
        });
        return Promise.reject(message);
    },
    (err: { response: { status: any; }; message: string; }) => {
        console.log(err, 'err');
        if (axios.isCancel(err)) {
            console.log('request cancel ', JSON.stringify(err))
            return new Promise(() => { })
        }
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

