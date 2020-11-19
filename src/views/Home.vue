<template>
  <div class="warpper">
    <headernav></headernav>
    <router-view/>
    <van-tabbar v-model="active" active-color="#CF4E3A" inactive-color="#333" route>
      <van-tabbar-item replace to="/Home/index">
        <span>网站首页</span>
        <template #icon="">
          <i class="iconfont iconhome"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item replace to="/Home/forum">
        <span>前沿论坛</span>
        <template #icon="">
          <i class="iconfont iconxingqiu"/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item icon="iconhezuo" replace to="/Home/alleviation">
        <span>消费扶贫</span>
        <template #icon="">
          <i class="iconfont iconhezuo"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {share} from '@/tools/share'
import headernav from './Components/HeaderNav'
export default {
  name: 'Home',
  components: {
    headernav
  },
  data(){
    return {
      active: 0,
    }
  },
  created(){
    this.browserRedirect()
    share('2020北京公益慈善汇展', '欢迎观看2020北京公益慈善汇展', 'http://cshadmin.shzzpt.org.cn/defaultLogo/default_logo.png', window.location.href,'')
  },
  methods:{
    browserRedirect() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      return
    } else {
       document.writeln();
        window.location.href = 'http://shzzpt.org.cn/web'
    }
}
  }
}
</script>

<style scoped lang="scss">
.warpper{
  padding-top: 88px;
  padding-bottom: 100px;
}
</style>
