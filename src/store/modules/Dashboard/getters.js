/**
 * @file
 * Contains implementation of Vuex storage getters.
 */

/**
 * Get dashboard items.
 * @returns {Object}
 *   Object of dashboard items.
 */
export const getDashbordItems = state => {
  return state.items
}

/**
 * Get dashboard counter id.
 * @returns {Object}
 *   Object of dashboard items.
 */
export const getDashbordCounterId = state => {
  return state.counterId
}
