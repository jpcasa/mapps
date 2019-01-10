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
    if (state.user) {
      return `${state.user.first_name} ${state.user.last_name}`
    }
    return ''
  },
  user_role(state) {
    if (state.user) {
      switch (state.user.groups.name) {
        case 'agent':
          return 'Agente Mapps360'
          break
        default:
          return 'Agente'
      }
    }
    return ''
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
