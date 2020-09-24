import {
    request
} from "../network/rquest";
import qs from 'qs';

export function getLogs(params) {
    return request({
        url: 'get_logs/',
        params: params
    })
}