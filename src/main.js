import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import 'babel-polyfill'
import less from 'less'
import 'assets/style/reset.css'
import 'assets/style/border.css'
import 'assets/style/iconfont.css'
import 'swiper/css/swiper.css'

fastclick.attach(document.body)

Vue.prototype.$http = axios

Vue.use(VueAwesomeSwiper, less)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
