/**
 * @file
 * Contains implementation of Vuex storage mutations.
 */

/**
 * Update Dashboard items.
 * @param {object} state
 *   Vuex state.
 * @param {object} items
 *   Added dashboard items.
 */
export const UPDATE_DASHBOARD_ITEMS = (state, items) => {
  state.dashboard.items = items
}

/**
 * Add to dashboard item to Dashboard items array.
 * @param {object} state
 *   Vuex state.
 * @param {object} item
 *   Added dashboard item.
 */
export const ADD_DASHBOARD_ITEM = (state, item) => {
  state.dashboard.items.push(item)
}

/**
 * Delete dashboard item from Dashboard items array.
 * @param {object} state
 *   Vuex state.
 * @param {number} id
 *   Dashboard item id.
 */
export const DELETE_DASHBOARD_ITEM = (state, id) => {
  state.dashboard.items = state.dashboard.items.filter(item => {
    if (item.id !== id) {
      return item
    }
  })
}

/**
 * Update Dashboard counter id.
 * @param {object} state
 *   Vuex state.
 * @param {number} id
 *   Dashboard item id.
 */
export const UPDATE_DASHBOARD_COUNTER_ID = (state, id) => {
  state.dashboard.counterId = id
}
