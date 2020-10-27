<template>
  <div class="forum-warpper">
    <div class="forum-video" v-if="list.length>0">
      <div class="video-box">
        <img :src="list[chiose].thumb" alt="" class="thumb" v-if="list[chiose].current === 0">
        <video :src="list[chiose].url" controls v-else></video>
      </div>
      <div class="video-img">
        <div v-for="(item,index) in list" :key="index">
          <img :src="item.end_image" alt="">
          <img src="../../assets/img/ltAct.png" alt="" class="is-play">
        </div>
      </div>
    </div>
    <div class="forum-list-box">
      <div class="forum-list">
        <h3>公益前沿论坛</h3>
        <router-link v-for="(item,index) in list" :key="index" class="forum-item" :to="'/Content/charitableDetail?id=' + item.id">
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
        <router-link v-for="(item,index) in news" :key="index" class="news-item" :to="'/Content/newsDetail?id=' + item.id">

          <div v-if="index === 0" class="frist">
            <div>
              <img :src="item.image" alt="">
              <p>{{item.title}}</p>
            </div>
            <p class="desc">{{item.desc}}</p>
          </div>
          <div v-else class="other">
            <img :src="item.image" alt="">
            <div>
              <h3>{{item.title}}</h3>
              <p>{{item.desc}}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {getForum ,getNewsList} from "@/api";
import config from "@/config";

export default {
  name: "forum",
  data() {
    return {
      chiose:0,
      list:[],    //  论坛列表
      news:[],    //  新闻列表
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      let _forum = await getForum()
      this.list= _forum.data
      let _data = await getNewsList(1, 10, 1)
      _data.data.data.map(item=>{
        item.image = config.baseURL + item.image
      })
      this.news = [..._data.data.data,..._data.data.data]
    },
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
    .video-box{
      position: relative;
      width: 750px;
      height: 599px;
      background-image: linear-gradient(-36deg, #e3422f 0%, #fda24a 100%);
      .thumb{
        position: absolute;
        top: 0;
        left: 0;
        width: 750px;
        height: 599px;
      }
      video{
        display: block;
        width: 750px;
        height: 599px;
      }

    }

    .video-img{
      padding: 20px;
      display: flex;
      align-items: center;
      overflow-x: auto;
      justify-content: space-between;
      div{
        width: 201px;
        height: 123px;
        position: relative;
        img{
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          &.is-play{
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
  .news-box{
    background: #fff;
    padding: 0 30px 30px;
    .news-title{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 95px;
      border-bottom: 3px solid #e2412e;
      margin-bottom: 20px;
      span{
        font-size: 32px;
      }
      .more{
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
    .news-list{
      .news-item{
        display: block;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        .frist{
          div{
            width: 100%;
            height: 458px;
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
              height: 64px;
              line-height: 64px;
              padding: 0 20px;
              background: rgba(0,0,0,.5);
              color: #fff;
              font-size: 26px;
            }
          }
          .desc{
            padding: 20px;

          }
        }
        .other{
          display: flex;
          align-items: center;
          padding: 20px;
          img{
            display: block;
            width: 207px;
            height: 138px;
          }
          div{
            flex: 1;
            overflow: hidden;
            margin-left: 20px;
            h3{
              font-size: 30px;
            }
            p{
              font-size: 24px;
              line-height: 31px;
            }
          }
        }
      }
    }
  }

}
</style>