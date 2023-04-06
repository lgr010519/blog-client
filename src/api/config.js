import {request} from "@/api/request";

export function getHomeInfo() {
    return request({
        url: '/config/home',
        method: 'GET',
    })
}