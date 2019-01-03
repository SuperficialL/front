import Axios from 'axios'
import qs from 'qs'
import store from '@/store/store'
import { Message } from 'element-ui'

// import router from '@/router'

const option = {
  timeout: 20000,
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: (data, headers) => {
    if (headers['Content-Type'].search('application/json') !== -1) {
      return JSON.stringify(data)
    } else if (headers['Content-Type'].search('multipart/form-data') !== -1) {
      return data
    } else {
      return qs.stringify(data)
    }
  }
}

const axios = Axios.create(option)

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 请求时设置token
  store.dispatch('FETCH_LOADING', true)
  return config
}, error => {
  store.dispatch('FETCH_LOADING', false)
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 错误拦截判断
  store.dispatch('FETCH_LOADING', false)
  /* if (response.data && !response.data.success) {
    // window.common.hideLoading()
    // window.common.showToast(response.data.message)
    return
  } */
  /* return {
    data: response.data,
    status: response.status,
    headers: response.headers,
    statusText: response.statusText
  } */

  return response.data
}, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  // window.common.hideLoading()
  // const errMsg = error.message
  // errMsg.indexOf('timeout') !== -1
  //   ? window.common.showToast({ text: '请求超时！', time: 0 })
  //   : window.common.showToast({ text: error.message, time: 0 })
  return Promise.reject(error)
})

export default axios
