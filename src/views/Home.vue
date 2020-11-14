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
    share('2020北京公益慈善汇展', '欢迎观看2020北京公益慈善汇展', 'http://cshadmin.shzzpt.org.cn/defaultLogo/default_logo.png', window.location.href,'')
  }
}
</script>

<style scoped lang="scss">
.warpper{
  padding-top: 88px;
  padding-bottom: 100px;
}
</style>
