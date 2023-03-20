import {request} from "@/api/request";

export function getCategories(params) {
    return request({
        url: '/categories',
        method: 'GET',
        params,
    })
}

export function getArticlesByCategories(data) {
    return request({
        url: '/articles/byCategories',
        method: 'POST',
        data,
    })
}