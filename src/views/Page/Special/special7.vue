<template>
  <div class="warrper">
    <video class="video" controls src="http://gyhfile.shzzfw.com/zt7.mp4"
           poster="../../../assets/img/csFeng.png"></video>
    <div class="classify-title">
      <div class="eng">SPECIAL INTRODUCTION</div>
      <div class="chinese">专题介绍</div>
    </div>
    <div class="desc">
      <p>
        社会组织在促进和谐稳定、参与社会管理、提供公共服务等方面，都发挥着重要的作用。近年来，北京市社会组织稳步发展，秉持非营利性、公益性和公共性原则，在教育科技、健康卫生、文化体育、社会福利、社会治理等公共服务领域发挥了重要作用，已成为社会治理和社会事业的重要主体，充分发挥了社会组织在公共服务供给中的独特功能和积极作用，有效地激发了社会活力、促进社会和谐稳定。</p><br>
      <p>
        未来，北京市社会组织将继续以习近平新时代中国特色社会主义思想为指导，全面贯彻中共中央办公厅、国务院办公厅颁布的《行业协会商会与行政机关脱钩总体方案》，通过深化改革，发挥社会组织专业性、自治性、独立性等优势，实现政府治理和社会调解、居民自治良性互动。</p>
    </div>
    <div class="classify-title">
      <div class="eng">ORGANIZATIONAL STYLE</div>
      <div class="chinese">组织风采</div>
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
    <div class="classify-title margin-bottom">
      <div class="eng">SPECIAL CASE</div>
      <div class="chinese">专题案例</div>
    </div>

    <div v-for="item in caseList" :key="item.id">
      <a v-if="item.url" :href="item.url"
         class="case-item">
        <h3 class="ovHide">{{ item.title }}</h3>
        <div class="ovHide2" v-html="item.content"></div>
      </a>
      <router-link v-else :to="'/Content/specialDetail?sid=7&id=' + item.id" class="case-item">
        <h3 class="ovHide">{{ item.title }}</h3>
        <div class="ovHide2" v-html="item.content"></div>
      </router-link>
    </div>
    <span class="more" v-if="this.caseList.length<this.total" @click="addMore">查看更多</span>

  </div>
</template>

<script>
import {elegantList, caseList} from "@/api/special";

export default {
  name: "special7",
  data() {
    return {
      list: [],
      srcList: [],
      caseList: [],
      page: 1,
      total: 0,
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
      let _data = await elegantList(7,1)
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
      let _data = await caseList(7,2,this.page,5)
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
  background: url("../../../assets/img/bg_special7.png") no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 309px;
  padding-bottom: 60px;

  .video {
    width: 707px;
    height: 447px;
    background-color: #1f3d7b;
    box-shadow: 0px 0px 12px 0px #c0c0c0;
    border-radius: 12px;
    border: solid 3px #ffffff;
    margin-top: 52px;
    margin-bottom: 40px;
  }

  .classify-title {
    align-self: flex-start;
    margin-top: 30px;
    margin-left: 30px;
    font-size: 38px;
    text-align: center;
    -webkit-text-fill-color: #e11e15; /*文字的填充色*/
    -webkit-text-stroke: 1.5px #fff;
    font-weight: bold;

    .eng {
      font-size: 41px;
      color: #ababab;
    }

    .chinese {
      font-size: 42px;
      font-weight: bold;
      color: #333333;
      margin-top: 20px;
      text-align: left;
    }
  }

  .desc {
    margin: 30px;
    font-size: 28px;
    line-height: 44px;
    color: #333333;
    text-align: justify;

    p {
      text-indent: 56px;
    }
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

  .case-item {
    display: block;
    margin: 10px 30px;
    padding: 20px 10px;
    border-radius: 5px;
    border: 1px solid #c70005;
    background: #fff;
    width: 690px;

    h3 {
      font-size: 32px;
      width: 650px;
      height: 40px;
      line-height: 40px;
      margin-bottom: 20px;
    }

    > div {
      height: 80px;
    }
  }

  .more {
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