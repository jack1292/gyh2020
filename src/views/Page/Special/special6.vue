<template>
  <div class="warrper">
    <video class="video" controls src="http://gyhfile.shzzfw.com/zt6.mp4"
           poster="../../../assets/img/csFeng.png"></video>
    <img class="classify-title" src="../../../assets/img/special_desc6.png"/>
    <div class="desc">
      <p>社会组织是社会治理的重要参与者和实践者，是坚持和完善共建共治共享社会治理制度的重要力量和载体，是促进经济社会协调发展、推动社会和谐稳定、巩固党的执政基础的重要力量。</p><br>
      <p>
        在各级党组织的引领带动下,各类社会组织主动作为：公益慈善类社会组织整合专业资源，提供便民利民、志愿互助、特定群体照护、防灾减灾训练、心理疏导等服务，满足社区居民多样化、个性化需求，成为社区服务的有生力量；社会服务类社会组织广泛联系群众、发动群众，动员和引导居民有序参与社区事务、有序表达利益诉求，成为多元社区治理的重要组成部分；文体活动类社会组织通过丰富多彩的文体活动，引导居民崇德向善，共同营造健康文明的社会文化；矛盾调处类社会组织通过参与纠纷调解、信访化解、群防群治等社区事务，积极投身重大活动服务保障和相关维稳工作，助力源头治理，促进平安社区建设。在已有经验的基础上，各类社会组织正积极探索更加多元、有效的路径方法，促进社会组织在基层社会治理中持续发力，为首都经济社会发展做出更大贡献。</p>
    </div>
    <img class="classify-title" src="../../../assets/img/special_mine6.png"/>
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
      <router-link v-else :to="'/Content/specialDetail?sid=6&id=' + item.id" class="case-item">
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
  name: "special6",
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
      let _data = await elegantList(6,1)
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
      let _data = await caseList(6,2,this.page,5)
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
  background: url("../../../assets/img/bg_special6.png") no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 265px;
  padding-bottom: 60px;

  .video {
    width: 697px;
    height: 409px;
    background-color: #1f3d7b;
    border-radius: 12px;
    border: solid 3px #ffffff;
    margin-top: 52px;
    margin-bottom: 40px;
  }

  .classify-title {
    width: 460px;
    height: auto;
    margin-top: 45px;
    z-index: 3;
    text-align: center;
    font-size: 36px;
    -webkit-text-fill-color: #e11e15; /*文字的填充色*/
    -webkit-text-stroke: 1.5px #fff;
    font-weight: bold;
  }

  .desc {
    margin: -35px 30px 30px 30px;
    padding: 60px 30px;
    background-color: #c61d1e;
    border-radius: 10px;
    font-size: 28px;
    line-height: 44px;
    color: #ffffff;
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