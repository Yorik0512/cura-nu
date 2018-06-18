/**
 * @file
 * Contains implementation of Vuex storage getters of Dashboard actions.
 */

/**
 * Update Dashboard items.
 * @returns {Object} items
 *   Object of Dashboard items.
 */
export const updateDashboardItems = ({commit}, items) => {
  if (typeof items === 'object') {
    commit('UPDATE_DASHBOARD_ITEMS', items)
  }
}

/**
 * Add Dashboard item.
 * @param {object} item
 *   Object of dashboard item data.
 */
export const addDashboardItem = ({commit}, item) => {
  if (typeof item === 'object') {
    commit('ADD_DASHBOARD_ITEM', item)
  }
}

/**
 * Delete Dashboard counter id.
 * @param {number} id
 *   Number of id.
 */
export const deleteDashboardCounterId = ({commit}, id) => {
  if (typeof id === 'number') {
    commit('DELETE_DASHBOARD_ITEM', id)
  }
}

/**
 * Update Dashboard counter id.
 * @param {number} id
 *   Number of id.
 */
export const updateDashboardCounterId = ({commit}, id) => {
  if (typeof id === 'number') {
    commit('UPDATE_DASHBOARD_COUNTER_ID', id)
  }
}
