import axios from 'axios';

export function request(config) {
  // 创建一个axios实例
  const instance = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 5000
  })
  //axios拦截器(请求局部拦截)
  instance.interceptors.request.use(config => {
    // console.log('打印请求拦截');
    // console.log(config);
    return config
  }), err => {
    return Promise.reject(err)
  }
  //响应拦截
  instance.interceptors.response.use(response => {
    // console.log('打印响应拦截');
    // console.log(response);
    return response
  }), error => {
    return Promise.reject(error)
  }
  //axios.create方法返回的就是一个promise,所以可以按下面这样写
  return instance(config)
}
