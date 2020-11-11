<template>
  <div class="address-list">
    <div class="address-nav">
      <div v-for="(item,index) in list"
           :key="item.id"
           :class="{active:index === acindex}"
           @click="acindex=index">{{item.title}}</div>
    </div>

    <div v-html="list[acindex].content" class="special-detail-html"></div>

  </div>
</template>

<script>
import {addressList} from "@/api/special";

export default {
  name: "addressList",
  data(){
    return {
      area:'',
      list:[],
      id:'',
      acindex:0
    }
  },
  created() {
    this.area = this.$route.query.area
    this.name = this.$route.query.name
    this.areaList()
  },
  methods:{
    async areaList(){
      let _data = await addressList(this.area)
      this.list = _data.data
      this.id = _data.data[0].id
    }
  }
}
</script>

<style scoped lang="scss">
.address-list{
  .address-nav{
    display: flex;
    align-items: center;
    overflow-x: auto;
    justify-content: space-between;
    height: 88px;
    div{
      height: 68px;
      line-height: 68px;
      padding: 0 20px;
      margin: 0 20px;
      text-align: center;
      font-size: 30px;
      color: #283B42;
      flex-shrink: 0;
      white-space: nowrap;
      &.active{
        color: #fff;
        background: #c70005;
        border-radius: 30px;
      }
    }
  }
}

</style>