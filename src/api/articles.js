import {request} from "@/api/request";

export function getArticles(params) {
    return request({
        url: '/articles',
        method: 'GET',
        params,
    })
}

export function getArticleDetail(id) {
    return request({
        url: `/articles/${id}`,
        method: 'GET',
    })
}

export function addViews(data) {
    return request({
        url: `/articles/addViews`,
        method: 'PUT',
        data,
    })
}