// import axios from 'axios'
//
// export default {
//   // 获取公用信息
//   getGlobalInfomation (params) {
//     return axios({
//       url: `${process.env.baseUrl}/api/settings`,
//       params
//     })
//   },
//
//   // 获取导航菜单
//   getMenu (params) {
//     return axios({
//       url: `${process.env.baseUrl}/api/category`,
//       params
//     })
//   },
//
//   // 获取轮播
//   getBanner (params) {
//     return axios({
//       url: `${process.env.baseUrl}/api/carousel`,
//       params
//     })
//   },
//
//   // 获取文章列表页
//   getArticleList (params) {
//     return axios({
//       url: `${process.env.baseUrl}/api/article`,
//       params
//     })
//   },
//
//   // 获取文章详情页
//   getArticleDetail (pk) {
//     return axios({
//       url: `${process.env.baseUrl}/api/article/${pk}`
//     })
//   },
//
//   // 获取评论列表
//   getCommentList (params) {
//     return axios({
//       url: `${process.env.baseUrl}/api/comment`,
//       params
//     })
//   },
//
//   // 发表评论
//   updateComment (data) {
//     return axios({
//       url: `${process.env.baseUrl}/api/comment`,
//       method: 'POST',
//       data
//     })
//   }
// }
//
// export const getBanner = params => {
//   // 封装一个函数，名为 getBanner
//   return axios.get(`/api/carousel`, {
//     // 请求路径
//     params: params
//   })
// }
//
// export const getArticle = params => {
//   // 封装一个函数，名为 getBanner
//   return axios.get(`/api/article`, {
//     // 请求路径
//     params: params
//   })
// }
//
// export const getMenu = params => {
//   // 封装一个函数，名为 getMenu
//   return axios.get(`/api/category`, {
//     // 请求路径
//     params: params
//   })
// }
