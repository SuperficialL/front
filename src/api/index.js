import axios from '@/utils/axios'

export default {
  // 获取站点信息
  getSiteInfo (params) {
    return axios({
      url: `siteinfo`,
      params
    })
  },

  // 获取导航菜单
  getMenu (params) {
    return axios({
      url: `category/`,
      params
    })
  },

  // 获取轮播
  getIndexBanner (params) {
    return axios({
      url: `carousel`,
      params
    })
  },

  // 获取分类下文章列表
  getArticles (params) {
    return axios({
      url: `articles/`,
      params
    })
  },

  // 获取文章详情页
  getArticleDetail (params) {
    return axios({
      url: `articles/${params.id}`
    })
  },

  // 获取友情链接
  getFriendLink (params) {
    return axios({
      url: `friendLinks`,
      params
    })
  },

  // 获取标签集合
  getTags (params) {
    if (params !== undefined) {
      return axios({
        url: `tags/${params.id}`,
        params
      })
    } else {
      return axios({
        url: `tags`,
        params
      })
    }
  },

  // 搜索
  getSearch (params) {
    return axios({
      url: `articles/`,
      params
    })
  },

  // get评论
  getComments (params) {
    return axios({
      url: `comments`,
      params
    })
  },

  // post评论
  postComment (params) {
    return axios({
      url: `comments/`,
      method: 'POST',
      // params
      data: JSON.stringify(params)
    })
  }
}
