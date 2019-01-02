const state = () => {
  return {
    user: null
  }
}

const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
  loggedUser(state) {
    return state.user
  }
}

const mutations = {
  SET_USER(state, user) {
    state.user = user || null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
