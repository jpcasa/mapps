import menuData from '../utils/menus.json'

const state = () => {
  return {
    app_entry_url: ['app', 'tablero'],
    main_menu: menuData.main_menu,
    sidebar_menu: menuData.sidebar_menu
  }
}

function getMenu(state, location) {
  let menu = []
  for (var i = 0; i < state.main_menu.length; i++) {
    if (state.main_menu[i].locations.findIndex(x => x == location) != -1) {
      menu.push(state.main_menu[i])
    }
  }
  return menu
}

function findInMenu(state, action) {
  for (var i = 0; i < state.main_menu.length; i++) {
    if (state.main_menu[i].active) {
      if (action == 'submenu') {
        return state.main_menu[i].submenu
      } else if (action == 'active-item') {
        return i
      }
    }
  }
}

const getters = {
  mainMenu(state) {
    return getMenu(state, 'main-menu')
  },
  sidebarMenu(state) {
    return getMenu(state, 'sidebar')
  },
  submenu(state) {
    return findInMenu(state, 'submenu')
  },
  activeItem(state) {
    return findInMenu(state, 'active-item')
  }
}

const mutations = {
  CHECK_URL_ENTRY(state, path) {
    const path_string = '/' + path.join('/')
    state.main_menu[getters.activeItem(state)].active = false
    for (var i = 0; i < state.main_menu.length; i++) {
      if (state.main_menu[i].url == path_string) {
        state.main_menu[i].active = true
      }
    }
  },
  ACTIVATE_ITEM(state, new_index) {
    state.main_menu[getters.activeItem(state)].active = false
    state.main_menu[new_index].active = true
  }
}

const actions = {
  check_url_entry({ commit }, path) {
    commit('CHECK_URL_ENTRY', path)
  },
  activate_item({ commit }, index) {
    commit('ACTIVATE_ITEM', index)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
