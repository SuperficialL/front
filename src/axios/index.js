 import axios from 'axios'

// http request 拦截器
axios.interceptors.request.use(config => config, error => Promise.reject(error))

// http response 拦截器
 axios.interceptors.response.use(response => {
  return {
    data: response.data,
    status: response.status,
    headers: response.headers
  }
})
export default axios
