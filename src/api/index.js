import axios from '@/utils/axios'

export default {
  // 获取站点信息
  getSiteInfo (params) {
    return axios({
      url: `/siteinfo`,
      // 这里面的api可以不需要的删了你操作一下
      params
    })
  },

  // 获取导航菜单
  getMenu (params) {
    return axios({
      url: `category`,
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
  getCategory (params) {
    if (params !== undefined) {
      return axios({
        url: `category/${params.id}`,
        params
      })
    } else {
      return axios({
        url: `category`,
        params
      })
    }
  },

  // 获取文章详情页
  getArticleDetail (params) {
    return axios({
      url: `articles/${params.id}`,
      params
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
  search (params) {
    return axios.get(`search`, params)
  }
}
