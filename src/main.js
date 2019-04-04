// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import charts from 'vue-echarts'
import 'echarts'
import 'element-ui/lib/theme-chalk/index.css'
import element from 'element-ui'

Vue.component('chart', charts)

Vue.use(element)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
