import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './api/index'
import './tools/index'
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import  plugin from './plugin/index'
import { ImagePreview } from 'vant';

// 全局注册
Vue.use(ImagePreview);
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(plugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
