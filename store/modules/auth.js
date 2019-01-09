const state = () => {
  return {
    user: {
      username: 'hola@jpcasabianca.com',
      first_name: 'JP',
      last_name: 'Casabianca',
      email: 'hola@jpcasabianca.com',
      avatar: '/1x/user.png',
      groups: {
        name: 'agent'
      }
    }
  }
}

const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
  loggedUser(state) {
    return state.user
  },
  full_name(state) {
    return `${state.user.first_name} ${state.user.last_name}`
  },
  user_role(state) {
    switch (state.user.groups.name) {
      case 'agent':
        return 'Agente Mapps360'
        break
      default:
        return 'Agente'
    }
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
