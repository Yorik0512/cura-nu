/**
 * @file
 * Contains implementation of Router.
 */

import Vue from 'vue'
import Router from 'vue-router'

// Lazy load views components.
const Dashboard = () => import('@/views/Dashboard.vue')
const Transactions = () => import('@/views/Transactions.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions
    }
  ]
})
