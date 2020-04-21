import {
  request
} from "../plugins/axios";

export function getProducts(params) {
  return request({
    url: 'products/',
    params: params
  })
}

export function getProductType(params) {
  return request({
    url: 'product_type/',
    params: params
  })
}
