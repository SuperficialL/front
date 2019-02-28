import Axios from 'axios'
import store from '@/store/store'
import { Message } from 'element-ui'

const option = {
  timeout: 20000,
  baseURL: process.env.VUE_APP_BASE_API,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}

const axios = Axios.create(option)
// 添加请求拦截器
axios.interceptors.request.use(config => {
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
  //  if (response.data && !response.data.success) {
  //   // window.common.hideLoading()
  //   // window.common.showToast(response.data.message)
  //   return
  // }
  /* return {
    data: response.data,
    status: response.status,
    headers: response.headers,
    statusText: response.statusText
  } */

  return response.data
}, error => {
  let response = error.response
  Message({
    message: error.message,
    type: 'error',
    duration: 5 * 1000
  })
  switch (response.status) {
    case 401:
      console.log('授权失败')
      break
    case 403:
      console.log('您没有该操作权限')
      break
    case 500:
      console.log('服务器错误')
  }
  return Promise.reject(error)
})

export default axios
