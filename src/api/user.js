import {request} from "@/api/request";

export function updateUserInfo(data){
    return request({
        url: '/user',
        method: 'PUT',
        data,
    })
}