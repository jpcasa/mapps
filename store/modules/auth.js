const state = () => {
  return {
    user: {
      username: 'hola@jpcasabianca.com',
      first_name: 'Juan Pablo',
      last_name: 'Casabianca',
      email: 'hola@jpcasabianca.com',
      avatar: '/1x/user.png'
    }
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

const actions = {
  set_user({ commit }, user) {
    commit('SET_USER', user)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
