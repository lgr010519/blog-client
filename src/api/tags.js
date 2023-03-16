import {request} from "@/api/request";

export function getTags(params) {
    return request({
        url: '/tags',
        method: 'GET',
        params,
    })
}

export function getArticlesByTags(data) {
    return request({
        url: '/articles/byTags',
        method: 'POST',
        data,
    })
}