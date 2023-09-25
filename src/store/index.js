//import Vue from 'vue'
import Vuex from 'vuex'

// Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, u) {
      console.log('store user', u)
      state.user = u
    }
  },
  actions: {},
  modules: {}
})
