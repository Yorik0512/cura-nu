/**
 * @file
 * Contains implementation of main Vuex storage.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import Dashboard from './modules/Dashboard/index'

// Install plugins.
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions,
  mutations,
  getters,
  modules: {
    dashboard: Dashboard
  },
  plugins: [createPersistedState()]
})
