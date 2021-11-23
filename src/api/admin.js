import request from '@/utils/request'; // 导入http中创建的axios实例

export function getList(data) {
    return request({
        url: 'api/pcMailbox/mailboxList',
        method: 'post',
        data: data
    })
}
