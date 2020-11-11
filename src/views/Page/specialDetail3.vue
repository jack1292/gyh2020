<template>
  <div class="specialDetail">
    <h3 class="title">{{title}}</h3>
    <div class="img-list" v-if="video.length>0">
      <video v-for="(item,index) in video " :key="index" controls style="display:block;width:100%;margin-bottom: 20px">
        <source :src="item" type="video/mp4">
        您的浏览器不支持 video 标签。
      </video>
    </div>
    <div class="img-list" v-if="img.length>0">
      <div v-for="(item,index) in img" :key="index" >
        <img :src="urlstr + item" alt="" v-if="item">
      </div>
    </div>
    <div class="content content-detail" v-html="content"></div>
  </div>
</template>

<script>
import {getKejiDetail} from "@/api/special";
import config from '@/config'
export default {
  name: "speaiclDetail",
  data(){
    return {
      img:[],
      video:[],
      title:'',
      content:'',
      urlstr:config.baseURL
    }
  },
  created() {
    this.init()
  },
  methods:{
    async init(){
      let _data = await getKejiDetail(this.$route.query.id,this.$route.query.type,this.$route.query.sts)
      this.title = _data.data.sts === 1 ?'2019年机器人大赛': _data.data.sts === 2?'第21届北京青年学术演讲比赛':'2020年机器人大赛'
      this.img= _data.data.image
      this.video= _data.data.video_url
      this.content = _data.data.content
    }
  }
}
</script>

<style scoped lang="scss">
.specialDetail{
  padding: 30px;
  .title{
    text-align: center;
    line-height: 150%;
    font-size: 38px;
    margin-bottom: 30px;
  }
  .img-list{
    img{
      display: block;
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .content{

    line-height: 150%;
    a{
      color: #c70005;
    }
  }
}
</style>


