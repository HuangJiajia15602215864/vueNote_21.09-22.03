import axios from 'axios'
import {
  getToken,
  removeToken
} from '@/utils/auth'
import {
  Toast
} from 'vant'

// 创建axios实例服务
const service = axios.create({
  baseURL: config.sdkApi,
  timeout: 10000
})

// 设置请求拦截器
let conf =  config
service.interceptors.request.use(
  config => {
    if (getToken() && config.baseURL != 'server') {
      config.headers.Authorization = getToken()
    }
    if (config.baseURL == 'game') {
      config.baseURL = conf.gameApi;
    }
    if (config.baseURL == 'server') {
      config.baseURL = conf.serverApi;
    }  
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 设置响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status != 0) {
      Toast({
        message: res.message || res.msg,
        icon: 'clear',
      });
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    if (error.response.status === 401) { //未登录认证
      removeToken()
    }
    Toast({
      message: error.response.data.message || error.response.msg,
      icon: 'clear',
    });
    return Promise.reject(error.response.data.message)

  }
)

export default service