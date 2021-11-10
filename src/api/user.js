/**
 * user模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/request'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const user = {
    // 手机验证码    
    sendCode(params) {
        return axios.post(`${base.sq}/appUser/sendVerificationCode`, qs.stringify(params));
    },


    // 用户登录    
    userLogin(params) {
        return axios.post(`${base.sq}/appUser/appUserLogin`, qs.stringify(params));
    },

    saveMailbox(params) {
        return axios.post(`${base.sq}/appMailbox/saveMailbox`, qs.stringify(params));
    },
    mailboxDetails(params) {
        return axios.post(`${base.sq}/appMailbox/mailboxDetails`, qs.stringify(params));
    },
}

export default user;