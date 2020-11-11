<template>
  <div class="project-warpper">
    <div class="search-box">
      <input type="text" placeholder="请输入要搜索的内容" v-model="keyword">
      <span @click="toProjectList">搜 索</span>
    </div>
    <div class="project-list">
      <router-link class="project-item" :to="'/Content/projectDetail?id=' + item.id" v-for="(item,index) in list"
                   :key="index">
        <div class="project-img">
          <img class="item-tag" src="../../assets/img/img_tuijian.png" v-if="item.expert_top ===1 "/>
          <img :src="item.thumb" alt="">
        </div>
        <div class="project-name">
          <h3 class="ovHide">{{ item.entry_name }}</h3>
          <span>点击进入</span>
        </div>
      </router-link>
    </div>

    <div class="more" v-if="more" @click="getMore">
      查看更多
    </div>

    <div class="to-org">
      <router-link to="/Home/organization" style="display: block">
        <img src="../../assets/img/juzheng.png" alt="">
      </router-link>
    </div>
  </div>
</template>

<script>
import {getProjectList} from "@/api";

export default {
  name: "project",
  data() {
    return {
      page: 1,
      limit: 20,
      total: 0,
      list: [],
      keyword: '',
      more: false,
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      let _data = await getProjectList(this.page, this.limit, this.keyword)
      if(this.page === 1) this.list = []
      this.list = [...this.list, ..._data.data.data]
      this.total = _data.data.total
      this.more = this.list.length < this.total ? true : false
    },
    getMore() {
      if (this.more) {
        this.page++
        this.init()
      }
    },
    toProjectList() {
      this.page = 1
      this.init()
    }
  }
}
</script>

<style scoped lang="scss">
.project-warpper {
  background: #f1f1f1;
  min-height: calc(100vh - 188px);
  padding-top: 30px;


  .search-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 692px;
    height: 90px;
    margin: 0 auto;
    background-color: #e2412e;
    border-radius: 4px;
    padding: 8px;

    input {
      width: 579px;
      height: 78px;
      padding: 15px 20px;
      background-color: #ffffff;
      border-radius: 4px;
      font-size: 24px;
    }

    span {
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

  .project-list {
    padding: 30px 30px 0;

    .project-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #fff;
      padding: 15px;
      margin-bottom: 20px;

      .project-img {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 180px;
        height: 120px;
        margin-right: 20px;
        overflow: hidden;
        position: relative;
        .item-tag {
          width: 160px;
          height: 160px;
          position: absolute;
          right: -56px;
          top: -56px;
          transform: scale(0.6);
        }
        img {
          display: block;
          width: 180px;

        }
      }

      .project-name {
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

  }

  .more {
    width: 427px;
    height: 75px;
    text-align: center;
    line-height: 75px;
    color: #fff;
    font-size: 28px;
    margin: 30px auto;
    background-color: #e2412e;
    border-radius: 38px;
  }
  .to-org{
    background: #fff;
    padding: 40px 30px;
    img{
      display: block;
      width: 100%;
    }
  }
}
</style>