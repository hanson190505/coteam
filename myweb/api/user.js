import {
  request
} from "../plugins/axios";

export function getPubKey() {
  return request({
    url: process.env.API_BASE_URL + 'staffs/',
    params: {
      pub_key: 'pub_key'
    }
  })
}

export function localLogin(params) {
  return request({
    url: process.env.API_BASE_URL + 'staffs/',
    params: params
  })
}
