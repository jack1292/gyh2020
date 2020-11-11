<template>
  <div class="warrper">
    <div class="video-container">
      <div class="video-title">
        <div class="chinese">宣传片</div>
        <div class="eng">ADVERTISING<br/>VIDEO</div>
      </div>
      <video class="video" controls src="http://gyhfile.shzzfw.com/zt8.mp4"
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

    <div class="page-title">科技支撑疫情抗击</div>

    <div class="frist-box">
      <router-link class="frist-item ovHide" :to="'/Content/specialDetail2?id='+ item.id+'&type=1'" v-for="item in list1" :key="item.id">{{item.title}}</router-link>
    </div>

    <div class="page-title">科技助力精准扶贫</div>

    <div class="two-box " :class="{active:showAll}">
      <router-link class="two-item " :to="'/Content/specialDetail2?id='+ item.id+'&type=2'" v-for="item in list2" :key="item.id"><p class="ovHide">{{item.title}}</p></router-link>
    </div>

    <span class="show-all" @click="showAll = true" v-if="!showAll">查看全部</span>

    <div class="page-title">学术交流助力科技创新</div>

    <video controls class="three-video" v-if="list3.video" :poster="list3.video.image[0]" width="1200px">
      <source :src="list3.video.video_url[0]" type="video/mp4">
      您的浏览器不支持 video 标签。
    </video>
    <div class="three-list">
      <router-link class="three-item "
                   :to="'/Content/specialDetail3?id='+ item.id+'&type=3&sts='+item.sts" v-for="item in list3.list" :key="item.id">
        <img :src="item.image[0]" alt="">
        <p v-if="item.sts === 1">2019年<br/>机器人大赛</p>
        <p v-if="item.sts === 2">第21届北京青年学术演讲比赛</p>
        <p v-if="item.sts === 3">2020年<br/>机器人大赛</p>
      </router-link>
    </div>



    <div class="page-title">创新模式服务学会发展</div>

    <div class="four-box">
      <h3 class="four-title">2019年能力提升培训</h3>
      <div v-if="list4.length>0" class="four-item-list">
        <img v-for="(item,index) in list4[0].image" :key="index" :src="item" @click="showImg(index,1)" alt="">
      </div>
      <h3 class="four-title">2020年科技成果转化复合型人才培训</h3>
      <div v-if="list4.length>0" class="four-item-list">
        <img v-for="(item,index) in list4[1].image" :key="index" :src="item" @click="showImg(index,2)" alt="">
      </div>
      <h3 class="four-title">2020年能力提升培训</h3>
      <div v-if="list4.length>0" class="four-item-list">
        <video v-for="(item,index) in list4[2].video_url " :key="index" controls class="three-video"
               :poster="list4[2].image[index]" width="1200px">
          <source :src="item" type="video/mp4">
          您的浏览器不支持 video 标签。
        </video>
      </div>
      <h3 class="four-title">学会咨询辅导服务</h3>
      <div v-if="list4.length>0" class="four-item-list">
        <img v-for="(item,index) in list4[3].image" :key="index" :src="item" @click="showImg(index,4)" alt="">
      </div>
    </div>


    <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="srcList">

    </van-image-preview>
  </div>
</template>

<script>
import {getKeji} from "@/api/special";

export default {
  name: "special8",
  data() {
    return {
      list1:[],
      list2:[],
      showAll:false,
      list3:[],
      list4:[],
      srcList:[],
      startPosition: 0,
      show: false,
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init(){
      let _data = await getKeji()
      this.list1 = _data.data.type_1
      this.list2 = _data.data.type_2
      this.list3 = _data.data.type_3
      this.list4 = _data.data.type_4
    },
    showImg(index,num){
      if(num === 1){
        this.srcList = this.list4[0].image
      }
      if(num === 2){
        this.srcList = this.list4[1].image
      }
      if(num === 4){
        this.srcList = this.list4[3].image
      }
      this.startPosition = index
      this.show = true
    }
  }
}
</script>

<style scoped lang="scss">

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

  .page-title{
    height: 88px;
    text-align: center;
    line-height: 88px;
    font-size: 36px;
    font-weight: bold;
    color: #007ac7;
  }
  .frist-box{
    padding: 30px;
    .frist-item{
      display: block;
      width: 100%;
      padding-left:  15px;
      margin-bottom: 10px;
      border-radius: 10px;
      height: 88px;
      line-height: 88px;
      color: #fff;
      font-size: 26px;
      background: #46B7FC;
    }
  }
  .two-box{
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 420px;
    overflow: hidden;
    width: 100%;
    &.active{
      height: auto;
    }
    .two-item{
      display: block;
      width: 100%;
      padding:  15px;
      margin-bottom: 10px;
      border-radius: 10px;
      height: 88px;
      line-height: 65px;
      color: #fff;
      font-size: 26px;
      background: #5e7ed0;
    }
  }
  .show-all{
    display: block;
    width: 40%;
    height: 68px;
    text-align: center;
    line-height: 68px;
    color: #fff;
    background: #5e7ed0;
    margin: 30px auto ;
  }
  .three-video{
    display: block;
    width: 100%;
  }
  .three-list{
    padding: 30px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .three-item{
      display: block;
      width: 210px;
      img{
        display: block;
        width: 220px;
        height: 220px;
        object-fit: cover;
      }
      p{
        margin-top: 10px;
        text-align: center;
        font-size: 28px;
        height: 88px;
        line-height: 44px;
      }
    }
  }
  .four-box{
    width: 100%;
    .four-title{
      padding: 15px 30px;
      font-size: 28px;
      text-align: left;
    }
    .four-item-list{
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding: 15px 30px;
      video{
        width: 100%;
        margin-bottom: 20px;
      }
      img{
        display: block;
        width: 220px;
        height: 220px;
        object-fit: cover;
        margin: 0 13px 13px 0;
        &:nth-child(3n){
          margin-right: 0;
        }
      }
    }
  }

}
</style>