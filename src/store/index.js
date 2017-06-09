import Vue from 'vue'
import Vuex from 'vuex'


import AuthorStore from './AuthorStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    AuthorStore
  }
})
