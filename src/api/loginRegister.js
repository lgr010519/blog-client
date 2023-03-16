import {request} from "@/api/request";

export function login(data) {
    return request({
        url: '/user/login',
        method: 'POST',
        data,
    })
}

export function getCaptcha() {
    return request({
        url: '/user/captcha',
        method: 'GET',
    })
}

export function register(data) {
    return request({
        url: '/user/register',
        method: 'POST',
        data,
    })
}

export function logout() {
    return request({
        url: '/admin/logout',
        method: 'POST',
    })
}