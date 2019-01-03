import API from '@/api/index'

const state = {
  category_name: '',
  articleList: [],
  page: 1,
  category: null,
  count: null
}

const mutations = {
  UPDATE_ARTICLES (state, data) {
    state.articleList = data.article_list
    state.category_name = data.name
    // state.count = data.article_list.length
  }
}

const actions = {
  // 获取文章列表信息
  GET_CATEGORY ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getCategory(params).then((data) => {
        commit('UPDATE_ARTICLES', data)
        resolve(data)
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
