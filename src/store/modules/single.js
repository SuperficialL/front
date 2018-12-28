import API from '@/api/api'

const state = {
  id: 0,
  views: 0,
  article: {}
}

const mutations = {
  UPDATE_ARTICLE_DETAIL (state, article) {
    state.article = article
    state.id = article.id
  },
  CLEAR_ARTICLE_DETAIL (state) {
    state.article = {}
  }
}

const actions = {
  // 获取文章详情
  GET_ARTICLE_DETAIL ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getArticleDetail(params).then((response) => {
        commit('UPDATE_ARTICLE_DETAIL', response.data)
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
