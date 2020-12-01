import {
    request
} from "../network/rquest";
import qs from 'qs'

export function getPacks(params) {
    return request({
        url: 'packs/',
        params: params
    })
}

export function patchPack(id, data) {
    return request({
        url: `packs/${id}/`,
        method: 'patch',
        data: qs.stringify(data)
    })
}

export function postPack(data) {
    return request({
        url: 'packs/',
        method: 'post',
        data: qs.stringify(data)
    })
}

export function getProductToPack(params) {
    return request({
        url: 'product_to_pack/',
        params: params
    })
}

export function patchProductToPack(id, data) {
    return request({
        url: `product_to_pack/${id}/`,
        method: 'patch',
        data: qs.stringify(data)
    })
}

export function postProductToPack(data) {
    return request({
        url: 'product_to_pack/',
        method: 'post',
        data: qs.stringify(data)
    })
}