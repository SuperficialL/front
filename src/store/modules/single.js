import API from '@/api/index'

const state = {
  article: {},
  comments: []
}

const mutations = {
  UPDATE_ARTICLE_DETAIL (state, data) {
    state.article = data
  },
  GET_COMMENT (state, comments) {
    state.comments = comments
  }
}

const actions = {
  // 获取文章详情
  GET_ARTICLE_DETAIL ({ commit, state }, params) {
    return new Promise((resolve, reject) => {
      API.getArticleDetail(params).then((data) => {
        commit('UPDATE_ARTICLE_DETAIL', data)
        resolve(data)
      }).catch((error) => {
        reject(error)
      })
    })
  }
  // GET_COMMENT_LIST ({ commit, state }, params) {
  //   // 获取评论列表
  //   return new Promise((resolve, reject) => {
  //     API.getComments(params).then((response) => {
  //       commit('GET_COMMENT', response.data)
  //       resolve(response)
  //     }).catch((error) => {
  //       reject(error)
  //     })
  //   })
  // }
}

export default {
  state,
  mutations,
  actions
}
