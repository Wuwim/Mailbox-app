/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
import { Toast } from 'vant';
import Qs from 'qs';
// 创建axios实例
const request = axios.create({
    timeout: 10000,
    baseURL: process.env.VUE_APP_API
});
// 设置post请求头
request.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

/** 
 * 请求拦截器   
 * 每次请求前，如果存在token则在请求头中携带token 
 */
request.interceptors.request.use(
    config => {

        if (config.method === 'post') {
            const contentType = config.headers['Content-Type'];
            if (contentType) {
                if (contentType.includes('json')) {//检测是否包含json
                    config.data = JSON.stringify(config.data)
                } else {
                    config.data = Qs.stringify(config.data)
                }
            }
        }
        return config;
    },
    error => Promise.error(error))

// 响应拦截器
request.interceptors.response.use(
    // 请求成功
    res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            // eg:请求超时或断网时，更新state的network状态
            // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
            // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
            if (!window.navigator.onLine) {
                tip('断网了')
            } else {
                return Promise.reject(error);
            }
        }
    });

/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {
    Toast({
        message: msg,
        duration: 1000,
        forbidClick: true
    });
}


export default request;

