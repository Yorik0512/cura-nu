/**
 * @file
 * Contains implementation of Vuex storage actions of Dashboard actions.
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
 * Update Dashboard item height.
 * @param {object} item
 *   Contains item id and height
 */
export const updateDashboardItemHeight = ({commit}, item) => {
  if (typeof item === 'object' && typeof item.id === 'number' && typeof item.height === 'number') {
    commit('UPDATE_DASHBOARD_ITEM_HEIGHT', item)
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
