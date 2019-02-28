import API from '@/api'

const state = {
  articleList: [],
  page: 1,
  count: Number,
  description: String
}

const mutations = {
  UPDATE_ARTICLES (state, data) {
    state.articleList = data.results
    state.count = data.results.length
    state.description = data
  }
}

const actions = {
  // 获取文章列表信息
  GET_ARTICLES ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getArticles(params).then((data) => {
        console.log(data)
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
