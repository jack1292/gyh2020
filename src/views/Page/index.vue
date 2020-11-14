<template>
  <div class="warpper-index">
    <img src="../../assets/img/banner.png" alt="" class="banner" />
    <div class="nav">
      <router-link to="/Home/special" class="nav-item">
        <img src="../../assets/img/nav1.png" alt="" />
        <p>专题展</p>
      </router-link>
      <router-link to="/Home/organization" class="nav-item">
        <img src="../../assets/img/nav2.png" alt="" />
        <p>组织展</p>
      </router-link>
      <router-link to="/Home/project" class="nav-item">
        <img src="../../assets/img/nav3.png" alt="" />
        <p>项目展</p>
      </router-link>
      <router-link to="/Home/charitable" class="nav-item">
        <img src="../../assets/img/nav4.png" alt="" />
        <p>慈善展</p>
      </router-link>
    </div>
    <div class="schedule">
      <h3 class="title">日程安排</h3>
      <div style="overflow-x: scroll">
        <div class="schedule-list bx-content">
          <div
            class="schedule-item  schedule-item1"
            :class="{ active: width >= 10 }"
          >
            <p>11月15日</p>
            <p class="active">微店展示</p>
          </div>
          <div
            class="schedule-item bottom  schedule-item2"
            :class="{ active: width >= 20 }"
          >
            <p>11月16日</p>
            <p class="active">开幕式</p>
            <p class="active" @click="toLuntan(1)">前沿论坛</p>
            <p class="active"><a href="javascript:void 0">项目推介</a></p>
          </div>
          <div
            class="schedule-item schedule-item3"
            :class="{ active: width >= 30 }"
          >
            <p>11月17日</p>
            <p class="active" @click="toLuntan(2)">前沿论坛</p>
            <p class="active"><a href="javascript:void 0">项目推介</a></p>
          </div>
          <div
            class="schedule-item bottom schedule-item4"
            :class="{ active: width >= 37 }"
          >
            <p>11月18日</p>
            <p class="active" @click="toLuntan(3)">前沿论坛</p>
            <p class="active"><a href="javascript:void 0">项目推介</a></p>
          </div>
          <div
            class="schedule-item schedule-item5"
            :class="{ active: width >= 45 }"
          >
            <p>11月19日</p>
            <p class="active"  @click="toLuntan(4)">前沿论坛</p>
            <p class="active"><a href="javascript:void 0">项目推介</a></p>
          </div>
          <div
            class="schedule-item bottom schedule-item6"
            :class="{ active: width >= 53 }"
          >
            <p>11月20日</p>
            <p class="active" @click="toLuntan(5)">前沿论坛</p>
            <p class="active"><a href="javascript:void 0">项目推介</a></p>
          </div>
          <div
            class="schedule-item schedule-item7"
            :class="{ active: width >= 60 }"
          >
            <p>11月21日</p>
            <p class="active" @click="toLuntan(6)">前沿论坛</p>
            <p class="active"><a href="javascript:void 0">项目推介</a></p>
          </div>
          <div
            class="schedule-item bottom schedule-item8"
            :class="{ active: width >= 69 }"
          >
            <p>11月22日</p>
            <p class="active" @click="toLuntan(7)">前沿论坛</p>
            <p class="active"><a href="javascript:void 0">项目推介</a></p>
          </div>
          <div
            class="schedule-item schedule-item9"
            :class="{ active: width >= 77 }"
          >
            <p>11月23日</p>
            <p class="active" @click="toLuntan(8)">前沿论坛</p>
            <p class="active"><a href="javascript:void 0">项目推介</a></p>
          </div>
          <div
            class="schedule-item bottom schedule-item10"
            :class="{ active: width >= 85 }"
          >
            <p>11月24日</p>
            <p class="active" @click="toLuntan(9)">前沿论坛</p>
            <p class="active"><a href="javascript:void 0">项目推介</a></p>
          </div>
          <div
            class="schedule-item schedule-item11"
            :class="{ active: width >= 100 }"
          >
            <p>11月25日</p>
            <p class="active" @click="toLuntan(10)">前沿论坛</p>
            <p class="active"><a href="javascript:void 0">项目推介</a></p>
          </div>
          <div class="jindu" :style="'width:' + width + '%'"></div>
        </div>
      </div>
    </div>
    <div class="video">
      <h3 class="title">直播厅</h3>
      <div class="video-list">
        <div
          class="video-item"
          @click="
            showVideo(
              'http://gyhfile.shzzfw.com/%E5%8C%97%E4%BA%AC%E5%85%AC%E7%9B%8A%E5%AE%A3%E4%BC%A0%E7%89%87.mp4'
            )
          "
        >
          <img src="http://shzzpt.org.cn/web/assets/img/live4.png" alt="" />
          <p><i class="iconfont iconshipin"></i> 汇展宣传</p>
        </div>
        <div class="video-item">
          <img src="http://shzzpt.org.cn/web/assets/img/live1.png" alt="" />
          <p><i class="iconfont iconkaimushi"></i> 开幕仪式</p>
        </div>
        <router-link class="video-item" to="/Home/forum">
          <img src="http://shzzpt.org.cn/web/assets/img/live2.jpg" alt="" />
          <p><i class="iconfont iconrenyuan"></i> 前沿论坛</p>
        </router-link>
        <router-link class="video-item" to="/Home/project">
          <img src="http://shzzpt.org.cn/web/assets/img/live2.png" alt="" />
          <p><i class="iconfont iconhezuo"></i> 项目推介</p>
        </router-link>
      </div>
    </div>
    <van-overlay :show="show">
      <video
        :src="videos"
        controls
        poster="../../assets/img/cishan.jpg"
        class="mode-video"
      ></video>
      <van-button class="close-btn" @click="hideVideo">关闭</van-button>
    </van-overlay>
  </div>
</template>

<script>
import { getTime } from "@/api/special";

export default {
  name: "index",
  data () {
    return {
      width: 0,
      videos: '',
      show: false
    }
  },
  created () {
    this.init()
  },
  methods: {
    async init () {
      let _data = await getTime()
      let _data1 = (new Date('2020-11-15 00:00:00')).getTime();
      let _data2 = (new Date('2020-11-16 00:00:00')).getTime();
      let _data3 = (new Date('2020-11-17 00:00:00')).getTime();
      let _data4 = (new Date('2020-11-18 00:00:00')).getTime();
      let _data5 = (new Date('2020-11-19 00:00:00')).getTime();
      let _data6 = (new Date('2020-11-20 00:00:00')).getTime();
      let _data7 = (new Date('2020-11-21 00:00:00')).getTime();
      let _data8 = (new Date('2020-11-22 00:00:00')).getTime();
      let _data9 = (new Date('2020-11-23 00:00:00')).getTime();
      let _data10 = (new Date('2020-11-24 00:00:00')).getTime();
      let _data11 = (new Date('2020-11-25 00:00:00')).getTime();
      let _time = _data.data * 1000
      if (_time > _data1) {
        this.width = 10
      }
      if (_time > _data2) {
        this.width = 20
      }
      if (_time > _data3) {
        this.width = 30
      }
      if (_time > _data4) {
        this.width = 37
      }
      if (_time > _data5) {
        this.width = 45
      }
      if (_time > _data6) {
        this.width = 53
      }
      if (_time > _data7) {
        this.width = 60
      }
      if (_time > _data8) {
        this.width = 69
      }
      if (_time > _data9) {
        this.width = 77
      }
      if (_time > _data10) {
        this.width = 85
      }
      if (_time > _data11) {
        this.width = 100
      }

    },
    showVideo (str) {
      this.videos = str
      this.show = true
    },
    hideVideo () {
      this.videos = '';
      this.show = false
    },
    toLuntan(num){
        let arr =[0,20,17,13,12,14,15,19,16,21,18]
        this.$router.push('/Home/forumDetail?id=' +arr[num] )
    }
  }
}
</script>

<style scoped lang="scss">
.warpper-index {
  background: #f1f1f1;
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
  .banner {
    display: block;
    width: 100%;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
    background: #fff;
    margin-bottom: 15px;

    .nav-item {
      display: block;
      width: 150px;

      img {
        display: block;
        width: 100%;
      }

      p {
        text-align: center;
        font-size: 28px;
        color: #333333;
      }
    }
  }

  .schedule {
    background: #fff;
    margin-bottom: 15px;
    overflow: hidden;

    .title {
      width: 150px;
      text-align: center;
      line-height: 64px;
      margin: 60px auto;
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 3px;
      color: #333333;
      border-bottom: 3px solid #f5b400;
    }

    .schedule-list {
      width: 1250px;
      height: 400px;
      padding-bottom: 40px;
      border-radius: 20px;
      position: relative;

      &:before {
        position: absolute;
        top: 150px;
        left: 0;
        content: "";
        width: 100%;
        height: 11px;
        background: #ffebb2;
      }

      .schedule-item {
        position: absolute;
        width: 220px;
        height: 135px;

        &.schedule-item1 {
          top: 0;
          left: 0;
        }

        &.schedule-item2 {
          top: 195px;
          left: 100px;
        }

        &.schedule-item3 {
          top: 0;
          left: 200px;
        }

        &.schedule-item4 {
          top: 195px;
          left: 300px;
        }

        &.schedule-item5 {
          top: 0;
          left: 400px;
        }

        &.schedule-item6 {
          top: 195px;
          left: 500px;
        }

        &.schedule-item7 {
          top: 0;
          left: 600px;
        }
        &.schedule-item8 {
          top: 195px;
          left: 700px;
        }

        &.schedule-item9 {
          top: 0;
          left: 800px;
        }
        &.schedule-item10 {
          top: 195px;
          left: 900px;
        }

        &.schedule-item11 {
          top: 0;
          left: 1000px;
        }

        &:after {
          position: absolute;
          left: 50%;
          bottom: -33px;
          transform: translate(-50%, 0);
          content: "";
          width: 18px;
          height: 18px;
          border-radius: 11px;
          background: #fff;
          border: 1px solid #ffebb2;
        }

        &.bottom:after {
          left: 50%;
          top: -48px;
          bottom: unset;
        }

        &.active:after {
          background: #e2412e;
          border: 1px solid #e2412e;
        }

        p {
          height: 45px;
          line-height: 45px;
          font-size: 20px;
          color: #e2412e;
          text-align: center;

          &.active {
            line-height: 45px;
            font-size: 20px;
            color: #e2412e;
            text-align: center;
          }
          a{
              display: block;
              height: 45px;
          line-height: 45px;
          font-size: 20px;
         color: #e2412e;
          text-align: center;
          }
        }
      }

      .jindu {
        position: absolute;
        top: 150px;
        left: 0;
        content: "";
        height: 11px;
        background: #e2412e;
      }
    }
  }

  .video {
    background-image: linear-gradient(-90deg, #e2412e 0%, #ffc683 100%);
    margin-bottom: 15px;
    overflow: hidden;

    .title {
      width: 150px;
      line-height: 64px;
      margin: 30px auto;
      font-size: 32px;
      text-align: center;
      font-weight: bold;
      letter-spacing: 3px;
      color: #fff;
      border-bottom: 3px solid #f5b400;
    }

    .video-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 40px;

      .video-item {
        display: block;
        width: 315px;
        margin-bottom: 20px;

        img {
          display: block;
          width: 315px;
          border-radius: 10px;
        }

        p {
          line-height: 60px;
          font-size: 30px;
          font-weight: bold;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
}
</style>