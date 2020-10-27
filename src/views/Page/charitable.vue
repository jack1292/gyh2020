<template>
  <div class="charitable-warpper">
    <video
        src="http://gyhfile.shzzfw.com/%E6%85%88%E5%96%84%E7%BB%BC%E5%90%88%E7%89%87%EF%BC%88%E6%9C%89%E7%89%87%E5%A4%B4%EF%BC%89mp4.mp4"
        controls poster="../../assets/img/cishan.jpg" class="charitable-video"></video>
    <div class="charitable-title">2020年首都慈善奖宣传片</div>

    <div class="charitable-other">
      <router-link to="/Contentn/shoucilian" class="charitable-other-item">
        <img src="../../assets/img/cishanbeijin.png" alt="">
      </router-link>
      <router-link to="/Contentn/fulian" class="charitable-other-item">
        <img src="../../assets/img/funvlianhehui.png" alt="">
      </router-link>
      <router-link to="/Contentn/shizihui" class="charitable-other-item">
        <img src="../../assets/img/hongshizihui.png" alt="">
      </router-link>
    </div>

    <div class="organization">
      <div class="title">慈善组织奖</div>
      <div class="organization-list">
        <div v-for="(item,index) in organization" :key="index" class="organization-item" :class="{active:index>2}" @click="showVideo(item.video_url)">
          <img :src="item.thumb" alt="">
          <p class="ovHide">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="enterprise">
      <div class="title">爱心企业奖</div>
      <div class="enterprise-list">
        <div v-for="(item,index) in enterprise" :key="index" class="enterprise-item" :class="{active:index>2}" @click="showVideo(item.video_url)">
          <img :src="item.thumb" alt="">
          <p class="ovHide">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <div class="personal">
      <div class="title">慈善个人奖</div>
      <div class="personal-list">
        <div v-for="(item,index) in enterprise" :key="index" class="personal-item" @click="showVideo(item.video_url)">
          <img :src="item.thumb" alt="">
          <p class="ovHide">{{ item.title }}</p>
        </div>
      </div>
    </div>
    <a href="http://www.bca.org.cn/bjcsxh/web/index.html#cur4" class="img-link">
      <img src="../../assets/img/a1.png" alt="">
    </a>
    <a href="" class="img-link active">
      <img src="../../assets/img/a2.png" alt="">
    </a>

    <van-overlay :show="show"  >
      <video
          :src="videos"
          controls poster="../../assets/img/cishan.jpg" class="mode-video"></video>
      <van-button class="close-btn" @click="hideVideo">关闭</van-button>
    </van-overlay>

  </div>
</template>

<script>
import {getCharitable} from "@/api";
import config from '@/config'

export default {
  name: "charitable",
  data() {
    return {
      organization: [],
      enterprise: [],
      personal: [],
      videos:'',
      show:false
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      let _data = await getCharitable()
      this.organization = _data.data.first
      this.enterprise = _data.data.second
      this.personal = _data.data.third
      this.organization.map(item => {
        item.thumb = config.baseURL + item.thumb
      })
      this.enterprise.map(item => {
        item.thumb = config.baseURL + item.thumb
      })
      this.personal.map(item => {
        item.thumb = config.baseURL + item.thumb
      })
    },
    showVideo(str){
      this.videos = config.baseURL + str
      this.show = true
    },
    hideVideo(){
      this.videos = '';
      this.show = false
    }
  }
}
</script>

<style scoped lang="scss">
.charitable-warpper {
  background: #f1f1f1;
  min-height: calc(100vh - 188px);

  .charitable-video {
    display: block;
    width: 100%;
  }

  .charitable-title {
    width: 750px;
    height: 89px;
    text-align: center;
    line-height: 89px;
    font-size: 28px;
    background-color: #ffffff;
    margin-bottom: 20px;
  }

  .charitable-other {
    padding: 30px;
    background: #fff;
    margin-bottom: 20px;

    .charitable-other-item {
      display: block;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      img {
        display: block;
        width: 100%;
      }
    }
  }

  .organization {
    background: #fff;
    margin-bottom: 20px;

    .title {
      padding: 20px 0;
      font-size: 36px;
      line-height: 50px;
      letter-spacing: 2px;
      color: #e2412e;
      text-align: center;
    }

    .organization-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 30px;

      .organization-item {
        width: 224px;
        margin-bottom: 20px;

        &.active {
          width: 336px;

          img {
            width: 336px;
            height: 220px;
          }
        }

        img {
          width: 224px;
          height: 147px;
        }

        p {
          text-align: center;
          padding: 0 10px;
          font-size: 24px;
          height: 63px;
          line-height: 63px;
        }
      }
    }
  }

  .enterprise {
    background: #fff;
    margin-bottom: 20px;

    .title {
      padding: 20px 0;
      font-size: 36px;
      line-height: 50px;
      letter-spacing: 2px;
      color: #e2412e;
      text-align: center;
    }
    .enterprise-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 30px;

      .enterprise-item {
        width: 224px;
        margin-bottom: 20px;

        &.active {
          width: 336px;

          img {
            width: 336px;
            height: 220px;
          }
        }

        img {
          width: 224px;
          height: 147px;
        }

        p {
          text-align: center;
          padding: 0 10px;
          font-size: 24px;
          height: 63px;
          line-height: 63px;
        }
      }
    }
  }

  .personal {
    background: #fff;
    margin-bottom: 20px;

    .title {
      padding: 20px 0;
      font-size: 36px;
      line-height: 50px;
      letter-spacing: 2px;
      color: #e2412e;
      text-align: center;
    }
    .personal-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 30px;

      .personal-item {
        width: 333px;
        margin-bottom: 20px;
        border: solid 1px #eeeeee;
        overflow: hidden;

        img {
          width: 333px;
          height: 333px;
        }

        p {
          text-align: center;
          padding: 0 10px;
          font-size: 24px;
          height: 63px;
          background-color: #fdf6f6;
          line-height: 63px;
        }
      }
    }
  }

  .img-link{
    position: fixed;
    bottom: 120px;
    right: 0;
    &.active{
      bottom: 280px;
    }
    img{
      display: block;
      width: 180px;
      height: 180px;

    }
  }
  .mode-video{
    position: fixed;
    top: 30%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
  }
  .close-btn{
    position: fixed;
    top: 70%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    background: #c70005;
    color: #fff;
    border: 0;
  }
}
</style>