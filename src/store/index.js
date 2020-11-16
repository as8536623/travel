import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutaitons from './mutaitons'
Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  getters: {
    doubleCity (state) {
      return state.city + '+++' + 'dpi'
    }
  },
  mutations: mutaitons,
  actions: {
  },
  modules: {
  }
})
