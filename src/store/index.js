import { createStore } from 'vuex'
import { userSession } from './modules/userSession'
import createPersistedState from 'vuex-persistedstate'

export default createStore({
  state: {
    BaseURL: 'https://localhost:44354/',
  },

  mutations: {

  },

  actions: {
  },

  getters: {

  },
  modules: {
    userSession,
  },

  plugins: [createPersistedState({
    storage: window.sessionStorage,
})],

})


