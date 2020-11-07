<template>
  <div class="warrper">


    <div class="desc">
      新冠肺炎疫情发生以来，北京市社会组织认真学习习近平总书记重要指示精神，发挥资源动员、行业引领、专业技术、志愿服务等特长，积极有序参与疫情防控工作，以实际行动体现社会组织“服务国家、服务首都、服务社会、服务居民”的责任和担当，展现出社会组织独特优势，充分彰显了首都社会组织的责任担当和大爱情怀。在抗击新冠肺炎的斗争中，北京市社会组织立足基层需求、结合自身优势，用实际行动履行社会责任，成为疫情防控阻击战中一支不可或缺的重要力量。
    </div>
    <div class="desc-container">
      <img src="../../../assets/img/special_desc5.png"/>
      <div class="video-container">
        <video class="video" controls src="http://gyhfile.shzzfw.com/%E7%96%AB%E6%83%85%E9%98%B2%E6%8E%A7.mp4" poster="../../../assets/img/csFeng.png"></video>
      </div>
    </div>
    <div class="classify-title">
      <img src="../../../assets/img/special_mine5.png"/>
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
    <div class="classify-title margin-bottom">专题案例</div>
    <div v-for="item in caseList" :key="item.id">
      <a v-if="item.url" :href="item.url"
         class="case-item">
        <h3 class="ovHide">{{ item.title }}</h3>
        <div class="ovHide2" v-html="item.content"></div>
      </a>
      <router-link v-else :to="'/Content/specialDetail?sid=5&id=' + item.id" class="case-item">
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
  name: "special5",
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
      let _data = await elegantList(5,1)
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
      let _data = await caseList(5,2,this.page,5)
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
  background: url("../../../assets/img/bg_special5.png") no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 388px;
  padding-bottom: 60px;

  .classify-title {
    width: 690px;
    height: 97px;
    margin-top: 65px;
    margin-left: 30px;
    margin-right: 30px;
    background-color: #55b0fd;
    border-radius: 8px 8px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    img {
      width: 459px;
      height: auto;
    }
  }

  .desc {
    width: 689px;
    background-color: #ffffff;
    border-radius: 12px;
    border: dashed 2px #5e7ed0;
    font-size: 28px;
    line-height: 44px;
    color: #333333;
    text-align: justify;
    padding: 30px;
    text-indent: 56px;

    img {
      float: left;
      width: 254px;
      height: 266px;
      margin-right: 30px;
      margin-bottom: 30px;
    }
  }

  .desc-container {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 30px;

    img {
      height: 255px;
      width: auto;
    }

    .video-container {
      width: 482px;
      height: 339px;
      margin-left: 30px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background: url("../../../assets/img/bg_special_video5.png") no-repeat;
      background-size: cover;

      .video {
        width: 430px;
        height: 285px;
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
    border: 1px solid #55b0fd;
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
    background: #55b0fd;
    color: #fff;
    border-radius: 10px;
  }
}
</style>