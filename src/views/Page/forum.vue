<template>
  <div class="forum-warpper">
    <div class="forum-video" v-if="list.length>0">
      <div class="video-box">
        <span v-if="list[chiose].current === 2" class="chongbo">重播</span>
        <img :src="list[chiose].thumb" alt="" class="thumb" v-if="list[chiose].current === 0">
        <video :src="list[chiose].url" :controls="list[chiose].current === 2" :poster="list[chiose].thumb" v-else></video>
        <div v-if="list[chiose].current !== 0" class="liwu-box">
          <div class="xinBGC" :class="{active:dianzanState}">
            <img src="../../assets/img/xin1.png" alt="" @click="dianzan">
            <p>{{ dianzhanNum }}</p>
          </div>
          <div class="huaBgc" :class="{active:songhuaState}">
            <img src="../../assets/img/hua1.png" alt="" @click="songhua">
            <p>{{ songhuaNum }}</p>
          </div>


        </div>
      </div>
      <div class="video-img">
        <div v-for="(item,index) in list" :key="index" @click="chiose = index">
          <img :src="item.thumb" alt="">
          <img src="../../assets/img/ltAct.png" alt="" class="is-play" v-if="index === chiose">
        </div>
      </div>
    </div>
    <div class="forum-list-box">
      <div class="forum-list">
        <h3>公益前沿论坛</h3>
        <router-link v-for="(item,index) in list" :key="index" class="forum-item"
                     :to="'/Content/charitableDetail?id=' + item.id">
          {{ item.title }}
        </router-link>
      </div>
    </div>
    <div class="news-box">
      <h3 class="news-title">
        <span>论坛资讯</span>
        <router-link to="/Content/news" class="more">更多</router-link>
      </h3>
      <div class="news-list">
        <router-link v-for="(item,index) in news" :key="index" class="news-item"
                     :to="'/Content/newsDetail?id=' + item.id">

          <div v-if="index === 0" class="frist">
            <div>
              <img :src="item.image" alt="">
              <p>{{ item.title }}</p>
            </div>
            <p class="desc">{{ item.desc }}</p>
          </div>
          <div v-else class="other">
            <img :src="item.image" alt="">
            <div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {getForum, getNewsList} from "@/api";
import config from "@/config";
import {dianzhanAdd, songhuaAdd} from "@/api/special";

export default {
  name: "forum",
  data() {
    return {
      chiose: 0,
      list: [],    //  论坛列表
      news: [],    //  新闻列表
      dianzanState: false,
      dianzhanNum:0,
      songhuaState: false,
     songhuaNum:0,
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      let _forum = await getForum()
      this.list = _forum.data
      let _data = await getNewsList(1, 10, 1)
      _data.data.data.map(item => {
        item.image = config.baseURL + item.image
      })
      this.news = [..._data.data.data, ..._data.data.data]
      this.dianzhanNum = this.list[0].zan_num
      this.songhuaNum = this.list[0].flower_num
    },
    async dianzan() {
      this.dianzanState = true
      setTimeout(() => {
        this.dianzanState = false
      }, 2000)
      let _data = await dianzhanAdd(this.list[this.chiose].id,1)
      this.dianzhanNum = _data.data.num
    },
    async songhua() {
      this.songhuaState = true
      setTimeout(() => {
        this.songhuaState = false
      }, 2000)
      let _data = await songhuaAdd(this.list[this.chiose].id,2)
      this.songhuaNum = _data.data.num
    }
  },
  watch:{
    chiose(){
      this.dianzhanNum = this.list[this.chiose].zan_num
      this.songhuaNum = this.list[this.chiose].flower_num
    }
  }
}
</script>

<style scoped lang="scss">
.forum-warpper {
  background: #f1f1f1;
  min-height: calc(100vh - 188px);

  .forum-video {
    background: #fff;
    margin-bottom: 20px;
    position: relative;

    .video-box {
      position: relative;
      width: 750px;
      height: 599px;
      background-image: linear-gradient(-36deg, #e3422f 0%, #fda24a 100%);
      .chongbo{
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 36px;
        color: #fff;
      }
      .thumb {
        position: absolute;
        top: 0;
        left: 0;
        width: 750px;
        height: 599px;
      }

      video {
        display: block;
        width: 750px;
        height: 599px;
      }

    }

    .liwu-box {
      position: absolute;
      top: 0;
      right: 30px;



      .xinBGC {
        position: absolute;
        top: 90px;
        right: 0;
        width: 85px;
        height: 85px;
        padding-top: 22px;
        border-radius: 55px;
        background: rgba(0,0,0,.5);
        &.active{
          img{
            animation: beat infinite linear .5s;
          }

        }
        img{
          display: block;
          margin: 0 auto;
        }
        p {
          position: absolute;
          left: 0;
          bottom: -30px;
          width: 100%;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }
      }
      .huaBgc {
        position: absolute;
        top: 280px;
        right: 0;
        width: 85px;
        height: 85px;
        padding-top: 15px;
        border-radius: 55px;
        background: rgba(0,0,0,.5);
        &.active{
          img{
            animation: beat infinite linear .5s;
          }

        }
        img{
          display: block;
          margin-left: 15px;
        }
        p {
          position: absolute;
          left: 0;
          bottom: -30px;
          width: 100%;
          line-height: 30px;
          text-align: center;
          color: #fff;
        }
      }

    }

    .video-img {
      padding: 20px;
      display: flex;
      align-items: center;
      overflow-x: auto;
      justify-content: space-between;

      div {
        width: 201px;
        height: 123px;
        flex-basis: 201px;
        flex-shrink: 0;
        margin-right: 20px;
        position: relative;

        img {
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;

          &.is-play {
            z-index: 99;
          }
        }
      }

    }
  }

  .forum-list-box {
    background: #fff;
    padding: 30px;
    margin-bottom: 20px;

    .forum-list {
      padding: 50px 30px;
      background-image: linear-gradient(-36deg,
          #e3422f 0%,
          #fda24a 100%);
      border-radius: 12px;

      h3 {
        font-size: 42px;
        line-height: 80px;
        color: #ffffff;
        margin-bottom: 30px;
        text-align: center;
      }

      .forum-item {
        display: block;
        width: 100%;
        padding: 30px 60px;
        text-align: center;
        background-color: #ffffff;
        border-radius: 4px;
        font-size: 28px;
        margin-bottom: 30px;
      }
    }
  }

  .news-box {
    background: #fff;
    padding: 0 30px 30px;

    .news-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 95px;
      border-bottom: 3px solid #e2412e;
      margin-bottom: 20px;

      span {
        font-size: 32px;
      }

      .more {
        width: 133px;
        height: 52px;
        text-align: center;
        line-height: 52px;
        color: #fff;
        font-size: 26px;
        background-color: #e2412e;
        border-radius: 26px;
      }
    }

    .news-list {
      .news-item {
        display: block;
        margin-bottom: 20px;
        border: 1px solid #ccc;

        .frist {
          div {
            width: 100%;
            height: 458px;
            position: relative;

            img {
              display: block;
              height: 100%;
              margin: 0 auto;
            }

            p {
              position: absolute;
              left: 0;
              bottom: 0;
              width: 100%;
              height: 64px;
              line-height: 64px;
              padding: 0 20px;
              background: rgba(0, 0, 0, .5);
              color: #fff;
              font-size: 26px;
            }
          }

          .desc {
            padding: 20px;

          }
        }

        .other {
          display: flex;
          align-items: center;
          padding: 20px;

          img {
            display: block;
            width: 207px;
            height: 138px;
          }

          div {
            flex: 1;
            overflow: hidden;
            margin-left: 20px;

            h3 {
              font-size: 30px;
            }

            p {
              font-size: 24px;
              line-height: 31px;
            }
          }
        }
      }
    }
  }

}
@keyframes beat {
  0% {
    zoom: 0.95;
  }
  25% {
    zoom: 0.99;
  }
  50% {
    zoom: 1.03;
  }
  75% {
    zoom: 1.06;
  }
}
</style>