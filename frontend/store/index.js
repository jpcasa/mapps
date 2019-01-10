import Vuex from 'vuex'
import auth from './modules/auth'
import menus from './modules/menus'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      menus
    }
  })
}

export default createStore
