import {
    request
} from "../network/rquest";
import qs from 'qs'
import expand from 'element-ui/packages/table/src/store/expand'

export function getProductType(params) {
    return request({
        url: 'product_type/',
        params: params
    })
}

export function postProductType(data) {
    return request({
        url: 'product_type/',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function patchProductType(id, data) {
    return request({
        url: `product_type/${id}/`,
        method: 'patch',
        data: qs.stringify(data)
    })
}

export function getProductSubType(params) {
    return request({
        url: 'product_sub_type/',
        params: params
    })
}

export function postProductSubType(data) {
    return request({
        url: 'product_sub_type/',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function patchProductSubType(id, data) {
    return request({
        url: `product_sub_type/${id}/`,
        method: 'patch',
        data: qs.stringify(data)
    })
}

export function getProducts(params) {
    return request({
        url: 'products/',
        params: params
    })
}

export function postProducts(data) {
    return request({
        url: 'products/',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function patchProducts(id, data) {
    return request({
        url: `products/${id}/`,
        method: 'patch',
        data: qs.stringify(data)
    })
}

export function getProductText(params){
    return request({
        url: 'product_text/',
        params: params
    })
}

export function postProductText(data){
    return request({
        url: 'product_text/',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function patchProductText(id, data) {
    return request({
        url: `product_text/${id}/`,
        method: 'patch',
        data: qs.stringify(data)
    })
}