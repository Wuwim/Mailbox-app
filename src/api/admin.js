/**
 * user模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/utils/request'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const admin = {
    // 获取列表  
    getList(params) {
        return axios.post(`${base.sq}/pcMailbox/mailboxList`, qs.stringify(params));
    },


    //查看详情
    mailboxDetails(params) {
        return axios.post(`${base.sq}/appMailbox/mailboxDetails`, qs.stringify(params));
    },
    //回复消息
    updateMailbox(params) {
        return axios.post(`${base.sq}/pcMailbox/updateMailbox`, qs.stringify(params));
    },



}

export default admin;