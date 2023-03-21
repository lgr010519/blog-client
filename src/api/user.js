import {request} from "@/api/request";

export function updateUserInfo(data){
    return request({
        url: '/user',
        method: 'PUT',
        data,
    })
}

export function getUserInfo(params){
    return request({
        url: '/user/info',
        method: 'GET',
        params,
    })
}

export function updateUserCollectNum(data){
    return request({
        url: '/user/collect',
        method: 'POST',
        data,
    })
}

export function getCollectArticles(data){
    return request({
        url: '/articles/byIds',
        method: 'POST',
        data,
    })
}