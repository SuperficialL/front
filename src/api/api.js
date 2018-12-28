import axios from '@/axios/index'
export default {
  // 获取站点信息
  getSiteInfo (params) {
    return axios.get(`/api/siteInfo/`, params)
  },

  // 获取导航菜单
  getMenu (params) {
    return axios.get(`/navigationLink`, params)
  },

  // 获取轮播
  getIndexBanner (params) {
    return axios.get(`/carousel`, params)
  },

  // 获取文章列表
  getArticleList (params) {
    return axios.get(`blog/articleList`, params)
  },

  // 获取文章详情页
  getArticleDetail (params) {
    return axios.get(`api/articleList/${params.id}`, params)
  },

  // 获取评论列表
  getCommentList (params) {
    return axios.get(`/api/comment`, params)
  },

  // 获取友情链接
  getFriendLink (params) {
    return axios.get(`/api/friendLinks`, params)
  },

  // 获取标签集合
  getTags (params) {
    return axios.get(`/api/tags`, params)
  },

  // 创建评论
  addComment (params) {
    return axios.post('/api/comments', params)
  },

  // 搜索
  search (params) {
    return axios.get(`/search/`, params)
  }
}
