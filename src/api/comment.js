import {request} from "@/api/request";

export function getCommentList(params) {
    return request({
        url: '/comment',
        method: 'GET',
        params,
    })
}

export function comment(data) {
    return request({
        url: '/comment',
        method: 'POST',
        data,
    })
}