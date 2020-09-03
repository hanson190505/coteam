import {
    request
} from "../network/rquest";
import qs from 'qs';

export function postWebapi(data) {
    return request({
        url: 'home_index/',
        method: 'post',
        params: {
            subtoken: window.sessionStorage.getItem('subtoken')
        },
        data: qs.stringify(data)
    })
}

export function getWebapi(params) {
    return request({
        url: 'home_index/',
        params: params
    })
}

export function patchWebApi(id, data) {
    return request({
        url: `home_index/${id}/`,
        method: 'patch',
        data: data
    })
}