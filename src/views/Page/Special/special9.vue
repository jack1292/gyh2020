<template>
  <div class="warrper">
    <div class="container">
      <video class="video" controls src="http://gyhfile.shzzfw.com/zt9.mp4" poster="../../../assets/img/csFeng.png"></video>
      <div class="classify-title">
        <div class="chinese">专题介绍</div>
      </div>
      <div class="desc">
        <p>2013年，中国国家主席习近平提出了共建“一带一路”的伟大倡议，旨在通过加强国际合作，共同打造政治互信、经济融合、文化包容的利益共同体、命运共同体和责任共同体。经过7年的不懈努力，“一带一路”建设已从理念转化为行动，从愿景转变为现实，正在向落地生根、持久发展、和相关国家共同绘制精谨细腻“工笔画”的阶段迈进。</p><br>
        <p>北京社会组织作为“一带一路”建设的积极响应者、实践者，在健康有序发展的基础上，乘势而上、顺势而为，推动共建“一带一路”向高质量发展转变。</p><br>
        <p>积土成山、积水成渊，北京社会组织将继续以共商共建共享为原则，以和平合作、开放包容、互学互鉴、互利共赢的丝绸之路精神为指引，以政策沟通、设施联通、贸易畅通、资金融通、民心相通为重点，从理念到行动，从愿景到现实，把倡议不断转化为广受群众欢迎的公益慈善服务和公益慈善项目，为服务好国家重大对外开放战略和首都经济社会高质量发展不断贡献力量。</p>
      </div>
      <div class="classify-title">
        <div class="chinese active">组织<span>风采</span></div>
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
      <div class="classify-title margin-bottom">
        <div class="chinese active">专题<span>案例</span></div>
      </div>
      <div v-for="item in caseList" :key="item.id">
        <a v-if="item.url" :href="item.url"
           class="case-item">
          <h3 class="ovHide">{{ item.title }}</h3>
          <div class="ovHide2" v-html="item.content"></div>
        </a>
        <router-link v-else :to="'/Content/specialDetail?sid=9&id=' + item.id" class="case-item">
          <h3 class="ovHide">{{ item.title }}</h3>
          <div class="ovHide2" v-html="item.content"></div>
        </router-link>
      </div>
      <span class="more" v-if="this.caseList.length<this.total" @click="addMore">查看更多</span>






    </div>

  </div>
</template>

<script>
import {elegantList,caseList} from "@/api/special";
export default {
  name: "special9",
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
      let _data = await elegantList(9,1)
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
      let _data = await caseList(9,2,this.page,5)
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
  background: url("../../../assets/img/bg_special9.png") no-repeat;
  background-size: 100% auto;
  padding-top: 345px;
  padding-bottom: 60px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    border-radius: 12px;
    margin: 0 30px;
    padding: 30px 12px;
    border: dashed 2px #5e7ed0;

    .video {
      width: 665px;
      height: 441px;
    }

    .classify-title {
      margin-top: 30px;

      .eng {
        font-size: 41px;
        color: #ababab;
      }

      .chinese {
        font-size: 36px;
        color: #333333;
        margin-top: 20px;
        font-weight: bold;
        position: relative;

        span {
          color: #5e7ed0;
        }

        &.active {
          &::before {
            position: absolute;
            width: 228px;
            height: 5px;
            background-color: #5e7ed0;
            content: '';
            top: 50px;
            left: 50%;
            transform: translate(-50%, 0);
          }
        }
      }
    }

    .desc {
      margin: 30px 15px;
      font-size: 28px;
      line-height: 44px;
      color: #333333;
      text-align: justify;
      p{
        text-indent: 56px;
      }
    }

    .mine-list {
      display: flex;
      padding: 10px;
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: 30px;

      .mine-item {
        display: flex;
        flex-direction: column;
        width: 312px;
        margin: 4px;

        .item-image {
          object-fit: scale-down;
          width: 312px;
          height: 232px;
        }

        .item-title {
          padding-left: 9px;
          font-size: 26px;
          color: #000000;
          width: 100%;
          height: 49px;
          text-align: center;
          line-height: 49px;
        }
      }
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
  .case-item{
    display: block;
    margin: 10px 30px;
    padding: 20px 10px;
    border-radius: 5px;
    border: 1px solid #5e7ed0;
    background: #fff;
    width: 630px;
    h3{
      font-size: 32px;
      width: 650px;
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
    background: #5e7ed0;
    color: #fff;
    border-radius: 10px;
  }
}
</style>