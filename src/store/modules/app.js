const state = {
  drawer: false,
  gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
  items: [
    { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/'},
    { title: 'Pages', icon: 'mdi-menu', items: [
      { title: 'Authentication', icon: 'mdi-login', items: [
        { title: 'SignIn', icon: 'mdi-login', to: '/authentication/sign-in'},
        { title: 'SignUp', icon: 'mdi-logout', to: '/authentication/sign-up'},
      ]},
      { title: 'ProductList', icon: 'mdi-reproduction', to: '/page/product-list'},
    ]},
    { title: 'Grid System', icon: 'mdi-grid-large', to: '/grid-system'},
    { title: 'Grid List Page', icon: 'mdi-grid-large', to: '/grid-list-page'},
    { title: 'Breakpoints', icon: 'mdi-format-bold', to: '/breakpoints'},
    { title: 'Typography', icon: 'mdi-format-text-variant-outline', to: '/typography'},
    { title: 'Tables', icon: 'mdi-table-large-plus', items: [
      { title: 'Basic Table', to: '/tables/basic-table'},
      { title: 'App Table', to: '/tables/app-table'},
    ]},
    { title: 'Forms', icon: 'mdi-form-textbox', items: [
      { title: 'Validaion Form', to: '/forms/validation-form'},
      { title: 'App Form', to: '/forms/app-form'},
    ]},
    { title: 'Buttons', icon: 'mdi-gesture-tap-button', to: '/buttons'},
    { title: 'Icons', icon: 'mdi-robot-confused', to: '/icons'},
    { title: 'Vue Study', icon: 'mdi-vuejs', items: [
      { title: 'Vue Chapter1', to: '/vue-study/vue-chapter1'},
    ]},
  ],
  sites: [
    { url: 'http://ci.inclutter.com', icon: 'mdi-face-man-outline', title: 'Jenkins'},
    { url: 'http://iptime.inclutter.com', icon: 'mdi-face-man-outline', title: 'iptime'},
    { url: 'https://www.notion.so/inclutter', icon: 'mdi-view-dashboard', title: 'Notion'},
    { url: 'https://github.com/inclutter', icon: 'mdi-github', title: 'Github'},
    { url: 'https://inclutter.atlassian.net/jira', icon: 'mdi-xml', title: 'JIRA'},
  ],
  right: null,
}

const getters = {
  getDrawer: state => state.drawer
}

const mutations = {
  setDrawer (state, data) {
    state.drawer = data
  }
}

const actions = {
  toggleDrawer ({ commit }, value) {
    commit('setDrawer', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
