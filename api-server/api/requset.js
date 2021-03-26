const axios = require('axios');
const {
    baseURL
} = require('./config')
console.log(baseURL, "nodeBaseURL")
const service = axios.create({
    baseURL: baseURL,
    timeout: 1000 * 30,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

// 添加请求拦截器
service.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        return error;
    }
);

// 响应拦截器即异常处理
service.interceptors.response.use(
    (res) => {
        return res.data || res.datas || res;
    },
    (err) => {
        return err;
    }
);

module.exports = service;