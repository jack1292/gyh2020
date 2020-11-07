<template>
  <div class="warrper">
    <div class="container">
      <div class="desc-container">
        <div class="classify-title">
          <div class="chinese">专题介绍///</div>
          <div class="eng">SPECIAL INTRODUCTION</div>
        </div>
        <div class="desc">
          北京是中国的首都，是与世界交流的窗口。在北京市委的坚强领导下，全市文化类社会组织高举中国特色社会主义伟大旗帜，深入学习贯彻习近平新时代中国特色社会主义思想，认真贯彻落实党的十九大精神，坚持党的基本路线、基本纲领、基本经验，坚持社会主义先进文化前进方向，坚持文艺为人民服务、为社会主义服务的方向和“百花齐放、百家争鸣”的方针，积极参与北京全国文化中心建设，扎实推进基层公共文化服务工作，努力为群众提供丰富多彩的文化生活，共同建设人民的精神家园，为推进全国文化中心建设、实现中华民族伟大复兴的中国梦作出积极的贡献。             </div>
      </div>
      <div class="video-container">
        <img src="../../../assets/img/special_video10.png"/>
        <video class="video" controls src="http://gyhfile.shzzfw.com/%E6%96%87%E5%8C%96%E5%BB%BA%E8%AE%BE%E6%94%B93.mp4" poster="../../../assets/img/csFeng.png"></video>
      </div>

      <div class="mine-container">
        <div class="classify-title">
          <div class="chinese">组织风采///</div>
          <div class="eng">SOCIAL ORGANIZATION STYLE</div>
        </div>
        <swiper class="swiper" :options="swiperOption" ref="mySwiper">
          <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index" >
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
      </div>

      <div class="mine-container">
        <div class="classify-title">
          <div class="chinese">专题案例///</div>
          <div class="eng">SOCIAL ORGANIZATION STYLE</div>
        </div>
        <div v-for="item in caseList" :key="item.id">
          <a v-if="item.url" :href="item.url"
             class="case-item">
            <h3 class="ovHide">{{ item.title }}</h3>
            <div class="ovHide2" v-html="item.content"></div>
          </a>
          <router-link v-else :to="'/Content/specialDetail?sid=10&id=' + item.id" class="case-item">
            <h3 class="ovHide">{{ item.title }}</h3>
            <div class="ovHide2" v-html="item.content"></div>
          </router-link>
        </div>
        <span class="more" v-if="this.caseList.length<this.total" @click="addMore">查看更多</span>
      </div>

    </div>

  </div>
</template>

<script>
import {elegantList,caseList} from "@/api/special";
export default {
  name: "special10",
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
      let _data = await elegantList(10,1)
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
      let _data = await caseList(10,2,this.page,5)
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
  background: url("../../../assets/img/bg_special10.png") no-repeat;
  background-size: 100% auto;
  padding-top: 345px;
  padding-bottom: 60px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff55;
    border-radius: 12px;
    margin: 0 30px;
    padding: 30px 12px;

    .video-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: #0c9f77;
      margin-top: 36px;

      img {
        width: 274px;
        height: 130px;
        margin-top: 50px;
      }

      .video {
        width: 100%;
        height: 425px;
      }
    }

    .classify-title {
      margin-top: 55px;
      margin-left: 31px;

      .eng {
        font-size: 24px;
        color: #ffffff;
        margin-top: 20px;
      }

      .chinese {
        font-size: 42px;
        color: #ffffff;
        font-weight: bold;
      }
    }

    .desc-container {
      background-color: #0c6c9fdd;

      .desc {
        margin: 30px;
        font-size: 28px;
        line-height: 44px;
        color: #ffffff;
        text-align: justify;
      }
    }

    .mine-container {
      background-color: #b69308dd;
      margin-top: 36px;
      width: 100%;

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
        background: #fff;
        width: 610px;
        overflow: hidden;
        h3{
          font-size: 32px;
          width: 100%;
          height: 40px;
          line-height: 40px;
          margin-bottom: 20px;
        }
        >div{
          height: 80px;
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

  }

}
</style>