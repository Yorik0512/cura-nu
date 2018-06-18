import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router'
import store from '@/store'

// Add ElementUI.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// Install plugins.
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
