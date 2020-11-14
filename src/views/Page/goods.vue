<template>
  <div class="alleviation-warpper">
    <div class="classify-name">{{ data.add_id }}</div>
    <div class="goods-list">
      <a
        :href="items.url"
        v-for="(items, index) in data.data"
        :key="index"
        class="alleviation-item"
        target="_blank"
      >
        <div>
          <img :src="items.image" alt="" />
        </div>
        <p class="ovHide">
          <b>¥{{ items.price }}</b
          >{{ items.title }}
        </p>
      </a>
    </div>
    <a href="javascript:void 0" class="zhibo" @click="showVideo">
      <img src="../../assets/img/zjtuijian2.png" alt="" />
      <h3>直播带货</h3>
    </a>
    <van-overlay :show="show">
      <video
        :src="videos"
        controls
        poster="http://shzzpt.org.cn/web/assets/img/xiaofeifuping.jpg"
        class="mode-video"
      ></video>
      <van-button class="close-btn" @click="hideVideo">关闭</van-button>
    </van-overlay>
  </div>
</template>

<script>
import { queryGoodsList } from "@/api";

export default {
  name: "goods",
  data () {
    return {
      id: '',
      data: [],
      show: false,
      videos: '',
      lists: [{
        name: '',
        video: ''
      }, {
        name: '西藏拉萨馆',
        video: 'http://gyhfile.shzzfw.com/%E8%A5%BF%E8%97%8F%E6%8B%89%E8%90%A8%E9%A6%86.mp4',
      }, {
        name: '新疆馆',
        video: 'http://gyhfile.shzzfw.com/%E6%96%B0%E7%96%86%E9%A6%86.mp4',
      }, {
        name: '青海玉树馆',
        video: 'http://gyhfile.shzzfw.com/%E9%9D%92%E6%B5%B7%E7%8E%89%E6%A0%91%E9%A6%86.mp4',
      }, {
        name: '内蒙古馆',
        video: 'http://gyhfile.shzzfw.com/%E5%86%85%E8%92%99%E5%8F%A4%E9%A6%86.mp4',
      }, {
        name: '河南馆',
        video: 'http://gyhfile.shzzfw.com/%E6%B2%B3%E5%8D%97%E9%A6%86.mp4',
      }, {
        name: '河北保定馆',
        video: 'http://gyhfile.shzzfw.com/%E6%B2%B3%E5%8C%97%E4%BF%9D%E5%AE%9A%E9%A6%86.mp4',
      }, {
        name: '河北承德馆',
        video: 'http://gyhfile.shzzfw.com/%E6%B2%B3%E5%8C%97%E6%89%BF%E5%BE%B7%E9%A6%86.mp4',
      }, {
        name: '河北张家口馆',
        video: 'http://gyhfile.shzzfw.com/%E6%B2%B3%E5%8C%97%E5%BC%A0%E5%AE%B6%E5%8F%A3%E9%A6%86.mp4',
      }, {
        name: '湖北馆',
        video: 'http://gyhfile.shzzfw.com/%E6%B9%96%E5%8C%97%E9%A6%86.mp4',
      }, {
        name: '湖北巴东馆',
        video: 'http://gyhfile.shzzfw.com/%E6%B2%B3%E5%8C%97%E5%B7%B4%E4%B8%9C%E9%A6%86.mp4',
      },]
    }
  },
  created () {
    this.id = this.$route.query.id
    this.init()
  },
  methods: {
    async init () {
      let _data = await queryGoodsList(this.id, 1, 10000)
      this.data = _data.data
    },
    showVideo () {
      this.show = true
      this.videos = this.lists[Number(this.id)].video
    },
    hideVideo () {
      this.show = false
      this.videos = ''
    }
  }
}
</script>

<style scoped lang="scss">
.alleviation-warpper {
  background: #ffffff;
  padding: 24px;
  .classify-name {
    font-size: 32px;
    line-height: 54px;
    font-weight: bold;
    color: #333333;
    padding-bottom: 30px;
  }
  .goods-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .alleviation-item {
      display: block;
      width: 334px;
      margin: 30px 0;
      background-color: #f8f0f0;
      div {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 334px;
        height: 224px;
        overflow: hidden;
        img {
          display: block;
          width: 334px;
        }
      }
      p {
        height: 58px;
        padding: 0 15px;
        line-height: 58px;
        font-size: 24px;
        b {
          color: #e2412e;
          margin-right: 10px;
        }
      }
    }
  }
  .zhibo {
    position: fixed;
    top: 30%;
    right: 0;
    img {
      display: block;
      width: 200px;
    }
    h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 36px;
      line-height: 48px;
      text-align: center;
      color: #eef60e;
    }
  }
  .mode-video {
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .close-btn {
    position: fixed;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    background: #c70005;
    color: #fff;
    border: 0;
  }
}
</style>