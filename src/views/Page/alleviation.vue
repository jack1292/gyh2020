<template>
  <div class="alleviation-warpper">
    <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
      <van-swipe-item v-for="(item,index) in swiperList" :key="index">
        <a :href="item.url" class="swiper-img">
          <img :src="item.image" alt="">
          <p class="ovHide"><b>¥{{item.price}}</b>{{item.title}}</p>
        </a>
      </van-swipe-item>
    </van-swipe>

    <div class="alleviation-box">
      <div class="alleviation-title">公益产品</div>
      <div class="alleviation-list">
        <a :href="item.url" v-for="(item,index) in list" :key="index" class="alleviation-item" target="_blank">
          <div>
            <img :src="item.image" alt="">
          </div>
          <p class="ovHide"><b>¥{{item.price}}</b>{{item.title}}</p>
        </a>
      </div>
    </div>



  </div>
</template>

<script>
import {getAlleviationList} from "@/api";
import config from '@/config'

export default {
  name: "alleviation",
  data() {
    return {
      swiperList:[],
      list: [],
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      let _data = await getAlleviationList(1, 10000)

      _data.data.data.map(item=>{
        item.image = config.baseURL + item.image
      })
      this.list = _data.data.data
      this.list.map((item,index)=>{
        if(index<4){
          this.swiperList.push(item)
        }
      })

    },
  }
}
</script>

<style scoped lang="scss">
.alleviation-warpper {
  background: #f1f1f1;
  .my-swipe{
    margin-bottom: 20px;
    .swiper-img{
      display: block;
      width: 100%;
      height: 483px;
      overflow: hidden;
      position: relative;
      img{
        display: block;
        height: 100%;
        margin: 0 auto;
      }
      p{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        background: rgba(0,0,0,0.5);
        height: 68px;
        padding: 0 20px;
        line-height: 68px;
        font-size: 32px;
        color: #fff;
        b{
          color: #e2412e;
          margin-right: 10px;
        }
      }
    }
  }

  .alleviation-box{
    background: #fff;
    padding: 30px;
    .alleviation-title{
      font-size: 32px;
      line-height: 54px;
      font-weight: bold;
      color: #333333;
      padding-bottom: 30px;
    }
    .alleviation-list{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .alleviation-item{
        display: block;
        width: 334px;
        margin-bottom: 30px;
        background-color: #f8f0f0;
        div{
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 334px;
          height: 224px;
          overflow: hidden;
          img{
            display: block;
            width: 334px;
          }
        }
        p{
          height: 58px;
          padding: 0 15px;
          line-height: 58px;
          font-size: 24px;
          b{
            color: #e2412e;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>