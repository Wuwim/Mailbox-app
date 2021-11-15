import request from '@/utils/request'; // 导入http中创建的axios实例

export function getList(data) {
    return request({
        url: 'api/pcMailbox/mailboxList',
        method: 'post',
        data: data
    })
}

// const admin = {
//     // 获取列表
//     getList(params) {
//         return axios.post(`${base.sq}/pcMailbox/mailboxList`, qs.stringify(params));
//     },
//     //查看详情
//     mailboxDetails(params) {
//         return axios.post(`${base.sq}/appMailbox/mailboxDetails`, qs.stringify(params));
//     },
//     //回复消息
//     updateMailbox(params) {
//         return axios.post(`${base.sq}/pcMailbox/updateMailbox`, qs.stringify(params));
//     },



// }

// export default admin;