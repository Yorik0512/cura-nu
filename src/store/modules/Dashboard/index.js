/**
 * @file
 * Contains implementation of Dashboard Vuex storage module.
 */

import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

const defaultBlockHeight = 100

// Default state.
const state = {
  counterId: 4,
  items: [
    {
      id: 1,
      height: defaultBlockHeight
    },
    {
      id: 2,
      height: defaultBlockHeight
    },
    {
      id: 3,
      height: defaultBlockHeight
    },
    {
      id: 4,
      height: defaultBlockHeight
    }
  ]
}

export default {
  state,
  actions,
  getters,
  mutations
}
