import menuData from '../utils/menus.json'

const state = () => {
  return {
    main_menu: menuData.main_menu
  }
}

export default {
  namespaced: true,
  state
}
