<template>
  <div class="warrper">
    <img class="classify-title" src="../../../assets/img/special_desc2.png"/>
    <div class="desc">
      <p>打好脱贫攻坚战是党的十九大提出的三大攻坚战之一，对如期全面建成小康社会，实现我们党第一个百年奋斗目标具有十分重要的意义。让贫困人口和贫困地区同全国一道进入全面小康社会，是我们党的庄严承诺。</p><br>
      <p>
        2017年12月，国务院扶贫开发领导小组印发关于广泛引导和动员社会组织参与脱贫攻坚的通知。2018年7月19日，北京市委社会工委、市民政局和市扶贫援合办联合召开北京市社会组织参与脱贫攻坚和精准救助动员大会，同时启动北京市社会组织参与脱贫攻坚推介对接活动。北京市委社会工委、市民政局多次召开专题会议，专门研究社会组织参与脱贫攻坚工作，市委社会工委、市民政局领导亲自带队到帮扶地区进行需求对接，开展项目调研。</p><br>
      <p>
        北京市利用52个社会组织联合党委，动员号召社会组织领域广大党员发挥先锋模范作用，投身脱贫攻坚行动，把党的政治优势、组织优势转化为引领发展优势和脱贫攻坚优势。各级各类社会组织主动投身、积极参与脱贫攻坚行动，听党话、跟党走，结构性参与脱贫攻坚国家战略，坚持大扶贫格局，坚决打赢脱贫攻坚战！</p>
    </div>
    <video class="video" controls src="http://gyhfile.shzzfw.com/%E8%84%B1%E8%B4%AB%E6%94%BB%E5%9D%9A.mp4"  poster="../../../assets/img/csFeng.png"></video>
    <img class="classify-title" src="../../../assets/img/special_mine2.png"/>
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
    <div class="classify-title margin-bottom">专题案例</div>
    <div v-for="item in caseList" :key="item.id">
      <a v-if="item.url" :href="item.url"
         class="case-item">
        <h3 class="ovHide">{{ item.title }}</h3>
        <div class="ovHide2" v-html="item.content"></div>
      </a>
      <router-link v-else :to="'/Content/specialDetail?sid=2&id=' + item.id" class="case-item">
        <h3 class="ovHide">{{ item.title }}</h3>
        <div class="ovHide2" v-html="item.content"></div>
      </router-link>
    </div>
    <span class="more" v-if="this.caseList.length<this.total" @click="addMore">查看更多</span>
  </div>
</template>

<script>
import {elegantList,caseList} from "@/api/special";
export default {
  name: "special2",
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
      let _data = await elegantList(2,1)
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
      let _data = await caseList(2,2,this.page,5)
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
  background: url("../../../assets/img/bg_special2.png")rgb(243,207,182) no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 377px;
  padding-bottom: 60px;

  .video {
    width: 693px;
    height: 372px;
    margin-top: 20px;
  }

  .classify-title {
    width: 600px;
    height: auto;
    margin-top: 60px;
    font-size: 38px;
    text-align: center;
    -webkit-text-fill-color: #e11e15; /*文字的填充色*/
    -webkit-text-stroke: 1.5px #fff;
    font-weight: bold;
  }

  .desc {
    width: 690px;
    font-size: 28px;
    line-height: 44px;
    color: #333333;
    margin-top: 42px;
    text-align: justify;
    p{
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
  .case-item{
    display: block;
    margin: 10px 30px;
    padding: 20px 10px;
    border-radius: 5px;
    border: 1px solid #c70005;
    background: #fff;
    width: 690px;
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
    background: #c70005;
    color: #ffd01e;
    border-radius: 10px;
  }
}
</style>