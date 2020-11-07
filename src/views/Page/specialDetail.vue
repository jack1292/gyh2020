<template>
  <div class="specialDetail">
    <h3 class="title">{{title}}</h3>
    <div class="img-list" v-if="img.length>0">
      <img v-for="(item,index) in img" :key="index" :src="item" alt="">
    </div>
    <div class="content" v-html="content"></div>
  </div>
</template>

<script>
import {caseDetail} from "@/api/special";

export default {
  name: "speaiclDetail",
  data(){
    return {
      sid:'',
      id:'',
      title:'',
      content:''
    }
  },
  created() {
    this.init()
  },
  methods:{
    async init(){
      let _data = await caseDetail(this.$route.query.sid,this.$route.query.id)
      console.log(_data)
      this.title = _data.data.title
      this.img= _data.data.image
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
    text-indent: 56px;
    line-height: 150%;
    a{
      color: #c70005;
    }
  }
}
</style>