import {
  request
} from "../plugins/axios";

export function getImage() {
  return request({
    url: 'upload/'
  })
}
