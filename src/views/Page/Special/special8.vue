<template>
  <div class="warrper">
    <div class="video-container">
      <div class="video-title">
        <div class="chinese">宣传片</div>
        <div class="eng">ADVERTISING<br/>VIDEO</div>
      </div>
      <video class="video" controls src="http://gyhfile.shzzfw.com/%E7%A7%91%E6%8A%80%E5%88%9B%E6%96%B0.mp4"
             poster="../../../assets/img/csFeng.png"></video>
    </div>
    <div class="desc">
      <p>
        党的十九大报告中先后5次提到了社会组织，指出要推动社会治理重心向基层下移，发挥社会组织作用，实现政府治理和社会调节、居民自治良性互动，这为社会组织的发展指明了新的方向，提出了新的要求。社会组织已成为新时期国家治理体系和治理能力现代化的重要主体之一，是我国经济、社会发展过程中承上启下、不可缺失的“黏合层”，其作用不可忽视。</p><br>
      <p>
        科技类社会组织是从事与科技发展相关的工作与活动，能够促进科技与经济结合、助力自主创新的社会组织。科技类社会组织所具备的“专业性”和“社会性”特征，使其在科技创新中心建设过程中能够填补政府和市场能力空缺，成为科技创新中心建设的重要参与者和创新体系的重要组成部分。</p><br>
      <p>
        作为政策的传递者、科学知识的普及者、社会服务的提供者，北京市科技类社会组织秉持围绕中心、发挥优势、突出主题、服务民众的宗旨，在传播教育健康科普知识、满足居民多元教育健康需求、助力建设国际一流的和谐宜居之都等方面，发挥积极作用。将其内化为居民的自我健康意识，自我防范意识，唤起自我管理的主动性。</p><br>
      <p>北京社会组织将继续在更大范围、以更多频次、用更新形式普及科技创新知识，聚焦居民急需关注、忧心担心，举办更多公益慈善活动。</p></div>
    <div class="classify-title">
      组织风采
    </div>
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
        <div class="mine-item" @click="toMienPreview(index)">
          <img class="item-image" :src="item.image"/>
          <div class="item-title ovHide">{{ item.title }}</div>
        </div>
      </swiper-slide>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    </swiper>
    <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="srcList"
                       @change="onChange">
      <template class="preview-title" v-slot:cover>{{ previewTitle }}</template>
    </van-image-preview>
    <div class="classify-title margin-bottom">专题案例</div>
    <div v-for="item in caseList" :key="item.id">
      <a v-if="item.url" :href="item.url"
         class="case-item">
        <h3 class="ovHide">{{ item.title }}</h3>
        <div class="ovHide2" v-html="item.content"></div>
      </a>
      <router-link v-else :to="'/Content/specialDetail?sid=8&id=' + item.id" class="case-item">
        <h3 class="ovHide">{{ item.title }}</h3>
        <div class="ovHide2" v-html="item.content"></div>
      </router-link>
    </div>
    <span class="more" v-if="this.caseList.length<this.total" @click="addMore">查看更多</span>
  </div>
</template>

<script>
import {caseList, elegantList} from "@/api/special";

export default {
  name: "special8",
  data() {
    return {
      list: [],
      srcList: [],
      caseList:[],
      page:1,
      total:0,
      swiperOption: {
        //可见图片张数
        slidesPerView: 2,
        // 默认选中中间一张
        centeredSlides: true,
        //自动轮播
        autoplay: {
          delay: 5000,
          //当用户滑动图片后继续自动轮播
          disableOnInteraction: false,
          stopOnLastSlide: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        //开启循环模式
        loop: true,
        on: {}
      },
      startPosition: 0,
      previewTitle: '',
      mineTitle: '',
      show: false,
    }
  },
  created() {
    this.init()
    this.getcaseList()
  },
  methods: {
    async init(){
      let that = this
      let _data = await elegantList(8,1)
      this.list = _data.data.data
      this.srcList = this.list.map(item => {
        return item.image
      })
      that.swiperOption.on = {
        click(e) {
          if (e.target.className === 'item-image') {
            let swiper = that.$refs.mySwiper.$swiper;
            that.toMienPreview(swiper.realIndex)
          }
        }
      }
    },
    async getcaseList(){
      let _data = await caseList(8,2,this.page,5)
      this.caseList = [...this.caseList,..._data.data.data]
      this.total = _data.data.total
    },
    addMore(){
      this.page++
      this.getcaseList()
    },
    toMienPreview(index) {
      this.startPosition = index
      this.show = true
      this.previewTitle = this.list[index].title
    },
    onChange(index){
      this.previewTitle = this.list[index].title
    }
  }
}
</script>

<style scoped lang="scss">
.swiper-slide-active, .swiper-slide-duplicate-active {
  transform: scale(1.1);
  z-index: 1000;
}
.warrper {
  background: url("../../../assets/img/bg_special8.png") no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 279px;
  padding-bottom: 60px;

  .video-container {
    width: 701px;
    height: 645px;
    background-image: linear-gradient(108deg,
        #011a8b 0%,
        #0065b6 100%);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .video-title {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 190px;
      padding-left: 62px;
      align-items: center;

      .eng {
        font-size: 28px;
        color: #ebebeb;
        opacity: 0.18;
        margin-left: 20px;
      }

      .chinese {
        font-size: 67px;
        font-weight: bold;
        color: #ffffff;
      }
    }

    .video {
      width: 673px;
      height: 448px;
      background-color: #1f3d7b;
      border-radius: 8px;
      margin-bottom: 20px;
    }
  }

  .classify-title {
    font-size: 38px;
    font-weight: bold;
    color: #333333;
    margin-top: 20px;
  }

  .desc {
    background: url("../../../assets/img/special_desc8.png") no-repeat;
    background-size: 100% 100%;
    margin: 60px 20px;
    padding: 95px 65px;
    font-size: 28px;
    line-height: 44px;
    color: #333333;
    text-align: justify;

    p {
      text-indent: 56px;
    }
  }

  .mine-img {
    width: 585px;
    height: 343px;
    background-color: #1f3d7b;
    border-radius: 12px;
    margin-top: 50px;
  }

  .swiper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 500px;
    margin-top: 10px;

    .swiper-button-prev, .swiper-button-next {
      width: 60px;
      height: 60px;
      background-color: #f5f5f555;
      border-radius: 60px;
    }

    .swiper-slide {
      display: flex;
      align-items: center;
      justify-content: center;

      .mine-item {
        width: 535px;
        height: 400px;
        position: relative;

        .item-image {
          object-fit: cover;
          width: 535px;
          height: 400px;
        }

        .item-title {
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 0 10px;
          text-align: center;
          font-size: 28px;
          color: #ffffff;
          width: 100%;
          height: 52px;
          line-height: 52px;
          background-color: #00000055;
        }
      }
    }
  }
  .case-item{
    display: block;
    margin: 10px 30px;
    padding: 20px 10px;
    border-radius: 5px;
    border: 1px solid #c70005;
    background: #fff;
    width: 690px;
    h3{
      font-size: 32rpx;
      width: 650px;
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
    }
    >div{
      height: 80px;
      width: 100%;
    }
  }
  .more{
    display: block;
    width: 200px;
    height: 60px;
    margin: 20px auto;
    text-align: center;
    line-height: 60px;
    background: #c70005;
    color: #ffd01e;
    border-radius: 10px;
  }
}
</style>