import {request} from "@/api/request";

export function getAboutInfo() {
    return request({
        url: '/about',
        method: 'GET',
    })
}