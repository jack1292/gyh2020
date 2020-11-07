import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import  plugin from './plugin/index'
import { ImagePreview,Tabbar, TabbarItem,Button,Cell,Tab,Tabs , CellGroup,Overlay,Step, Steps,Swipe, SwipeItem,List } from 'vant';
import './assets/css/reset.css'
import './assets/font/iconfont.css'
import 'swiper/dist/css/swiper.css'
import './api/index'
import './tools/index'
import {  } from 'vant';



// 全局注册
Vue.use(List);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Overlay);
Vue.use(ImagePreview);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(plugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
