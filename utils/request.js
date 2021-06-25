import  Request from "./luch-request/index.js"

const http = new Request();

http.setConfig((config) => { /* config 为默认全局配置*/
  config.baseURL = 'http://www.quanzhan.co' /* 根域名 */

  config.custom = {
    loading: true // 默认有loading
  }
  return config
})
http.interceptors.request.use((config) => { /* 请求之前拦截器。可以使用async await 做异步操作 */
  config.header = {
    ...config.header,
    a: 1 // 演示拦截器header加参
  }
  // 演示custom 用处
  if (config.custom.loading) {
    uni.showLoading()
  }
  return config
}, (config) => {
  return Promise.reject(config)
})

/* 请求之后拦截器。可以使用async await 做异步操作  */
http.interceptors.response.use(async (response) => { 
  // if (response.data.code !== 200) { // 服务端返回的状态码不等于200，则reject()
  //   return Promise.reject(response)
  // }
  if (response.config.custom.loading) {
    uni.hideLoading()
  }
  return response.data; // 返回请求成功data
}, (response) => { // 请求错误做点什么。可以使用async await 做异步操作
  console.log(response)
  if (response.config.custom.loading) {
    uni.hideLoading()
  }
  return Promise.reject(response)
})

export default http;