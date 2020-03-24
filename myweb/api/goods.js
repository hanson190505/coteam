import {
  request
} from "../plugins/axios";

export function getProducts(params) {
  return request({
    url: 'products/',
    params: params
  })
}
