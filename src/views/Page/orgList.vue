<template>
  <div class="organization-warpper">
    <img src="../../assets/img/org.jpg" alt="" class="org-banner">
    <div class="search-box">
      <input type="text" placeholder="请输入要搜索的内容" v-model="keyword">
      <span @click="toOrgList">搜 索</span>
    </div>
    <div class="type-item" v-if="list.length>0">
      <div class="org-list">
        <router-link :to="'/Content/template'+item.shop_id+'?id=' + item.user_id" class="org-item" v-for="(item,index) in list" :key="index">
          <div class="org-info">
            <div class="org-img">
              <img :src="item.logo_url" alt="">
            </div>
            <div class="org-name">
              <h3 class="ovHide">{{item.name}}</h3>
              <span>点击进入</span>
            </div>
          </div>
          <i class="iconfont iconfanhui-copy"></i>
        </router-link>
      </div>
    </div>


  </div>
</template>

<script>
import {getOrgList} from "@/api";

export default {
  name: "orgList",
  data() {
    return {
      list: [],
      keyword:'',
      area:'',
      type:'',
      state:2
    }
  },
  created() {
    if(this.$route.query.keyword) this.keyword = this.$route.query.keyword,this.state = 2
    if(this.$route.query.area) this.area = this.$route.query.area,this.state = 3
    if(this.$route.query.type) this.type = this.$route.query.type
    this.getList()
  },
  methods: {
    async getList() {
      let _data = await getOrgList(1,10000,this.keyword,this.area,this.type,this.state)
      this.list = _data.data.data
        console.log(_data.data.data)
    },
    toOrgList(){
      this.getList()
    }
  }
}
</script>

<style scoped lang="scss">
.organization-warpper {
  background: #f1f1f1;
  min-height: calc(100vh - 188px);

  .org-banner {
    display: block;
    width: 100%;
  }
  .type-item {
    background: #fff;
    margin-bottom: 20px;

    .type-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 90px;
      padding: 0 30px;
      background-color: #ffffff;
      border: solid 2px #eeeeee;

      h3 {
        position: relative;
        font-size: 32px;
        color: #e2412e;
        padding-left: 30px;
        line-height: 40px;

        &:before {
          position: absolute;
          top: 0;
          left: 0;
          content: '';
          width: 12px;
          height: 36px;
          background-color: #e2412e;
        }
      }

      .more {
        width: 114px;
        height: 53px;
        text-align: center;
        line-height: 53px;
        background-color: #e2412e;
        border-radius: 27px;
        font-size: 28px;
        color: #ffffff;
      }
    }

    .org-list {
      padding: 30px;

      .org-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 164px;
        padding: 20px;
        margin-bottom: 20px;
        border-radius: 10px;
        border: solid 2px #eeeeee;

        .org-info {
          display: flex;
          align-items: center;
          width: 90%;
          overflow: hidden;
          .org-img{
            display: flex;
            align-items: center;
            justify-content: space-around;
            width: 120px;
            height: 120px;
            border: solid 1px #eeeeee;
            margin-right: 20px;
            border-radius: 120px;
            overflow: hidden;
            img {
              display: block;
              width: 120px;

            }
          }


          .org-name {
            flex: 1;
            overflow: hidden;

            h3 {
              font-size: 30px;
              color: #333333;
              margin-bottom: 20px;
            }

            span {
              display: block;
              width: 169px;
              height: 43px;
              text-align: center;
              line-height: 43px;
              font-size: 26px;
              color: #ffffff;
              background-color: #e2412e;
              border-radius: 22px;
            }
          }
        }

        i {
          font-size: 36px;
          color: #e0e0e0;
        }
      }
    }


  }


  .search-box{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 692px;
    height: 90px;
    margin: 40px auto;
    background-color: #e2412e;
    border-radius: 4px;
    padding: 8px;
    input{
      width: 579px;
      height: 78px;
      padding: 15px 20px;
      background-color: #ffffff;
      border-radius: 4px;
      font-size: 24px;
    }
    span{
      display: block;
      flex: 1;
      text-align: center;
      height: 78px;
      line-height: 78px;
      font-size: 28px;
      font-weight: bold;
      color: #fff600;
    }
  }

}
</style>