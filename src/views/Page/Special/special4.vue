<template>
  <div class="warrper">

    <div class="desc-container">
      <div class="video-container">
        <video class="video" controls src="http://gyhfile.shzzfw.com/zt4.mp4" poster="../../../assets/img/csFeng.png"></video>
      </div>
      <div class="desc">
        <p>
          社会组织是现代文明社会的标志和不可或缺的细胞，是北京建设国际一流和谐宜居之都的重要节拍器。党的十九大报告对新时代的社会组织工作、志愿服务工作和公益慈善事业提出了新的期待和要求。在北京市委市政府的领导下，北京市社会组织以习近平新时代中国特色社会主义思想为指导，在北京公益事业发展中，起到了巨大的推动作用。</p><br>
        <p>近年来，北京围绕“五个慈善”（即全民慈善、效能慈善、惠民慈善、诚信慈善、创新慈善）建设，立足实际、突出重点，全面提升“慈善北京”发展水平，不断开创以法促善、守法行善、依法兴善的新局面。</p><br>
        <p>
          一直以来，北京市慈善组织在服务困难群众，弘扬德行善举、促进社会和谐稳定等方面都发挥着积极作用，尤其是在精准扶贫、脱贫攻坚中表现突出。截至2020年7月，全市登记认定市级慈善组织778家。市级慈善组织和红十字会中具有公开募捐资格的有51家，包括49家基金会和北京市慈善协会、北京市红十字会。</p><br>
        <p>
          “有困难找志愿者、有时间做志愿者”“我为人人、人人为我”已经成为许多市民日常生活方式和首都精神文明建设的亮丽风景。截至2020年9月，全市通过全国志愿服务信息系统实名注册的志愿者已达441.8万人，注册的志愿服务团体有7.67万个、法人组织899个，累计发布志愿服务项目超过41.8万个，记录服务时间超过4.7亿小时。</p><br>
        <p>
          北京市公益慈善与志愿服务事业的健康持续发展，离不开规范有序的管理和监督。未来，北京市社会组织将紧密团结在以习近平同志为核心的党中央周围，在习近平新时代中国特色社会主义思想的指引下，牢记使命、凝心聚力、担当实干，切实担负推进新时代公益慈善与志愿服务事业的职责使命。</p>
      </div>
    </div>

    <img class="classify-title" src="../../../assets/img/special_mine4.png"/>


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
      <router-link v-else :to="'/Content/specialDetail?sid=4&id=' + item.id" class="case-item">
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
  name: "special4",
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
      let _data = await elegantList(4,1)
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
      let _data = await caseList(4,2,this.page,5)
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
  background: url("../../../assets/img/bg_special4.png") no-repeat;
  background-size: 100% auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 377px;
  padding-bottom: 60px;

  .classify-title {
    width: 692px;
    height: auto;
    margin-top: 65px;
    font-size: 38px;
    text-align: center;
    -webkit-text-fill-color: #e11e15; /*文字的填充色*/
    -webkit-text-stroke: 1.5px #fff;
    font-weight: bold;
  }

  .desc-container {
    width: 692px;
    background-color: #ffffff;
    border-radius: 12px;
    border: dotted 2px #e63f5d;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .desc {
      font-size: 28px;
      text-indent: 56px;
      line-height: 44px;
      color: #333333;
      margin: 50px 30px;
      text-align: justify;
    }

    .video-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 2px;
      background: url("../../../assets/img/bg_special_video4.png") no-repeat;
      background-size: 100% 100%;

      .video {
        width: 503px;
        height: 334px;
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