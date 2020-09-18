import {
    request
} from "../network/rquest";
import qs from 'qs';

export function postCustomer(data) {
    return request({
        url: 'customers/',
        method: 'post',
        params: {
            subtoken: window.sessionStorage.getItem('subtoken')
        },
        data: qs.stringify(data)
    })
}

export function getCustomer(params) {
    return request({
        url: 'customers/',
        params: params
    })
}

export function getCustomerAddr(params) {
    return request({
        url: 'customer_addr/',
        params: params
    })
}

export function postCustomerAddr(data) {
    return request({
        url: 'customer_addr/',
        method: 'post',
        params: {
            subtoken: window.sessionStorage.getItem('subtoken')
        },
        data: qs.stringify(data)
    })
}

export function patchCustomerAddr(pk, data) {
    return request({
        url: `customer_addr/${pk}/`,
        method: 'patch',
        data: qs.stringify(data)
    })
}