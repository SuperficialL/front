import API from '@/api/index'

const state = {
  isLoading: false,
  navigationLink: [],
  blogInfo: {},
  friendLink: [],
  tags: [],
  bannerList: []
}

const getters = {
  // 请求数据时加载状态
  isLoading: state => state.isLoading
}

const mutations = {
  UPDATE_MENU (state, data) {
    state.navigationLink = data.results
  },
  UPDATE_BlogInfo (state, blogInfo) {
    if (Array.isArray(blogInfo)) {
      state.blogInfo = blogInfo[0]
    }
  },
  UPDATE_BANNER (state, data) {
    state.bannerList = data
  },
  UPDATE_lINKS (state, friendLink) {
    state.friendLink = friendLink.results
  },
  UPDATE_TAGS (state, tags) {
    state.tags = tags.results
  },
  UPDATE_LOADING (state, response) {
    state.isLoading = response
  }
}

const actions = {
  // 获取导航栏
  GET_MENU ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getMenu(params).then((data) => {
        commit('UPDATE_MENU', data)
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // 获取站点信息
  GET_BLOGINFO ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getSiteInfo(params).then((data) => {
        commit('UPDATE_BlogInfo', data)
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // 获取友情链接
  GET_FriendLink ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getFriendLink(params).then((data) => {
        commit('UPDATE_lINKS', data)
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // 获取轮播
  GET_BANNER ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getIndexBanner(params).then((data) => {
        commit('UPDATE_BANNER', data)
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  // 获取标签集合
  GET_TAGS ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getTags(params).then((data) => {
        commit('UPDATE_TAGS', data)
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  },

  FETCH_LOADING ({ commit }, params) {
    commit('UPDATE_LOADING', params)
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
