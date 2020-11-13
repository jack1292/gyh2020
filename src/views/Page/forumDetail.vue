<template>
  <div class="forum-warpper">
    <div class="forum-video" v-if="detail">
      <div class="video-box">
        <span v-if="detail.current === 2" class="chongbo">重播</span>
        <span v-if="detail.current === 1 && state" class="zhibo" @click="playVideo">观看首播</span>
        <img :src="detail.thumb" alt="" class="thumb" v-if="detail.current === 0">
        <video :src="detail.url" ref="video" :controls="detail.current === 2" :poster="detail.thumb" v-else></video>
        <div v-if="detail.current === 2 || (detail.current === 1 && !state)" class="liwu-box">
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
    </div>
    <van-tabs v-model="active">
      <van-tab title="论坛介绍">
        <div class="detail-centent" v-html="detail.content_desc"></div>
      </van-tab>
      <van-tab title="论坛日程">
        <div class="detail-centent" v-html="detail.content_schedule"></div>
      </van-tab>
      <van-tab title="嘉宾介绍">
        <div class="member-list">
           <div class="member-item" v-for="(item,index) in detail.guest" :key="index">
              <img class="member-img" :src="item.headimg"/>
             <div class="member-info">
               <div class="member-name">{{item.name}}</div>
               <div class="member-content">{{item.content}}</div>
             </div>
           </div>
        </div>
      </van-tab>

    </van-tabs>
  </div>
</template>

<script>
    import {getForumVideoDetail,addIntegral} from "@/api";
    import {dianzhanAdd, songhuaAdd} from "@/api/special";

    export default {
        name: "forum",
        data() {
            return {
                id:'',
                detail: '',
                dianzanState: false,
                dianzhanNum:0,
                songhuaState: false,
                songhuaNum:0,
                active: 0,
                state:true,
                timeOut:null
            }
        },
        created() {
            this.id = this.$route.query.id
            this.init()
        },
        beforeDestroy(){
            clearTimeout(this.timeOut)
        },
        methods: {
            async init() {
                let _forum = await getForumVideoDetail(this.id)
                this.detail = _forum.data
                this.dianzhanNum = _forum.data.zan_num
                this.songhuaNum = _forum.data.flower_num
                if (this.detail.current !== 0){
                    this.setTimeOut()
                }
            },
            async dianzan() {
                this.dianzanState = true
                setTimeout(() => {
                    this.dianzanState = false
                }, 2000)
                let _data = await dianzhanAdd(this.id,1)
                this.dianzhanNum = _data.data.num
            },
            async songhua() {
                this.songhuaState = true
                setTimeout(() => {
                    this.songhuaState = false
                }, 2000)
                let _data = await songhuaAdd(this.id,2)
                this.songhuaNum = _data.data.num
            },
            playVideo() {
                this.state = false
                this.$refs['video'].play()
            },
            setTimeOut(){
                setTimeout(function () {
                    this.addIntegral()
                }, 1000*60*30)
            },
            async addIntegral(){
                let _data = await addIntegral(1,this.id,this.$store.state.user)
                console.log(_data)
            }
        }
    }
</script>

<style scoped lang="scss">
  .forum-warpper {
    background: #f1f1f1;
    min-height: calc(100vh - 188px);

    .member-list{
      /*border-top: 1px solid #f1f1f1;*/
      background: #ffffff;
      display: flex;
      flex-direction: column;
      .member-item{
        display: flex;
        flex-direction: row;
        padding: 20px;
        border-top: 1px solid #f1f1f1;
        .member-img{
          width: 130px;
          height: 180px;
          object-fit: scale-down;
        }
        .member-info{
          display: flex;
          flex-direction: column;
          margin-left: 15px;
          justify-content: space-around;
          .member-name{
            font-size: 26px;
            color: #333333;
            font-weight: bold;
          }
          .member-content{
            font-size: 22px;
            color: #666666;
            line-height: 30px;
          }
        }
      }
    }
    .detail-centent{
      border-top: 1px solid #f1f1f1;
      background: #ffffff;
      padding: 20px;
      font-size: 26px;
      color: #666666;
      text-indent: 52px;
      letter-spacing: 2px;
      line-height: 39px;
      text-align: justify;
    }
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
        .zhibo {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          font-size: 32px;
          width: 200px;
          height: 70px;
          line-height: 70px;
          text-align: center;
          color: #fff;
          background: #e3422f;
          z-index: 777;
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