import API from '@/api/api'

const state = {
  blogInfo: [],
  friendLink: [],
  menu: [],
  bannerList: [],
  articleList: [],
  totalCount: 0,
  commentList: [],
  category: [],
  tags: []
}

const mutations = {
  UPDATE_BLOGINFO (state, blogInfo) {
    state.blogInfo = blogInfo.results
  },
  UPDATE_lINKS (state, friendLink) {
    state.friendLink = friendLink.results
  },
  UPDATE_MENU (state, menu) {
    state.menu = menu.results
  },
  UPDATE_CATEGORY (state, category) {
    state.category = category
  },
  UPDATE_ARTICLE_LIST (state, articleList) {
    state.articleList = articleList.results
    state.totalCount += articleList.results.length
  },
  UPDATE_BANNER (state, bannerList) {
    state.bannerList = bannerList.results
  },
  UPDATE_TAGS (state, tags) {
    state.tags = tags.results
  },
  UPDATE_COMMENT (state, comment) {
    state.comment = comment
  }
}

const actions = {
  // 获取导航栏
  GET_MENU ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getMenu(params).then((response) => {
        commit('UPDATE_MENU', response.data)
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // 获取文章列表信息
  GET_ARTICLE_LIST ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getArticleList(params).then((response) => {
        commit('UPDATE_ARTICLE_LIST', response.data)
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // 获取轮播
  GET_BANNER ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getIndexBanner(params).then((response) => {
        commit('UPDATE_BANNER', response.data)
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // 获取友情链接
  GET_FriendLink ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getFriendLink(params).then((response) => {
        commit('UPDATE_lINKS', response.data)
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // 获取标签集合
  GET_TAGS ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getTags(params).then((response) => {
        commit('UPDATE_TAGS', response.data)
        resolve(response)
      }).catch((error) => {
        reject(error)
      })
    })
  }
}

export default {
  state,
  mutations,
  actions
}
