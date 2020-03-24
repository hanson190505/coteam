import {
  request
} from "../plugins/axios";

export function getImage(params) {
  return request({
    url: process.env.API_BASE_URL + 'upload/',
    params: params
  })
}
