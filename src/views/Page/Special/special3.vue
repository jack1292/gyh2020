<template>
  <div class="warrper">
    <img class="banner" src="../../../assets/img/bg_special3.png"/>
    <img class="classify-title" src="../../../assets/img/special_desc3.png"/>
    <div class="desc">
      <p>
        近年来，北京市委社会工委、市民政局深入贯彻落实习近平总书记关于脱贫攻坚的系列重要要求，按照党中央、国务院和民政部关于打好脱贫攻坚战的决策部署，在市委市政府领导下，制定《关于广泛动员社会组织参与脱贫攻坚和精准救助的指导意见》，对社会组织参与脱贫攻坚的工作机制、扶持政策、重点工作等内容进行了安排，初步建立具有首都特色和社会组织特点的帮扶体系和运行机制。全市各级社会组织不断提高政治站位，听党话、跟党走，结构性参与脱贫攻坚国家战略，形成了社会组织参与脱贫攻坚的生动实践和帮扶资源向贫困地区、贫困人口汇聚的生动局面。2018年以来，全市2000多家社会组织积极投身脱贫攻坚，累计开展项目约3500个，投入资金20余亿元，为北京扶贫协作地区脱贫攻坚做出了积极贡献。</p>
      <p>
        近年来，北京市委社会工委、市民政局深入贯彻落实习近平总书记关于脱贫攻坚的系列重要要求，按照党中央、国务院和民政部关于打好脱贫攻坚战的决策部署，在市委市政府领导下，制定《关于广泛动员社会组织参与脱贫攻坚和精准救助的指导意见》，对社会组织参与脱贫攻坚的工作机制、扶持政策、重点工作等内容进行了安排，初步建立具有首都特色和社会组织特点的帮扶体系和运行机制。全市各级社会组织不断提高政治站位，听党话、跟党走，结构性参与脱贫攻坚国家战略，形成了社会组织参与脱贫攻坚的生动实践和帮扶资源向贫困地区、贫困人口汇聚的生动局面。2018年以来，全市2000多家社会组织积极投身脱贫攻坚，累计开展项目约3500个，投入资金20余亿元，为北京扶贫协作地区脱贫攻坚做出了积极贡献。</p>
    </div>
    <video class="video"
           controls src="http://gyhfile.shzzfw.com/%E7%A4%BE%E4%BC%9A%E5%BF%83%E7%90%86%E5%BB%BA%E8%AE%BE.mp4"
           poster="../../../assets/img/csFeng.png"></video>

    <div class="bjms">
      <img src="../../../assets/img/beijimoshi.jpg" alt="">
      <div>
        <router-link class="bjms-item" v-for="item in bjms" :key="item.id"
                     :to="'/Content/specialDetail?sid=3&id=' + item.id">
          {{ item.title }}
        </router-link>
      </div>
    </div>

    <div class="llyj">
      <img src="http://shzzpt.org.cn/web/assets/img/a2.png" alt="" class="title">
      <div class="llyj-list">
        <router-link class="llyj-item" v-for="item in llyj" :key="item.id"
                     :to="'/Content/specialDetail?sid=3&id=' + item.id">
          <img :src="item.image" alt="">
          <p>{{ item.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="rcpy">
      <img src="http://shzzpt.org.cn/web/assets/img/a3.png" alt="" class="title">
      <div class="rcpy-list">
        <router-link class="rcpy-item" v-for="item in rcpy" :key="item.id"
                     :to="'/Content/specialDetail?sid=3&id=' + item.id">
          <p>{{ item.title }}</p>
        </router-link>
      </div>
    </div>
    <div class="zdjj">
      <img src="http://shzzpt.org.cn/web/assets/img/a4.png" alt="" class="title">
      <div class="zdjj-list">
        <router-link to="/Content/addressList?area=0" class="address-item">东城区</router-link>
        <router-link to="/Content/addressList?area=1" class="address-item">西城区</router-link>
        <router-link to="/Content/addressList?area=2" class="address-item">朝阳区</router-link>
        <router-link to="/Content/addressList?area=3" class="address-item">海淀区</router-link>
        <router-link to="/Content/addressList?area=4" class="address-item">丰台区</router-link>
        <router-link to="/Content/addressList?area=5" class="address-item">石景山区</router-link>
        <router-link to="/Content/addressList?area=6" class="address-item">门头沟区</router-link>
        <router-link to="/Content/addressList?area=7" class="address-item">房山区</router-link>
        <router-link to="/Content/addressList?area=8" class="address-item">通州区</router-link>
        <router-link to="/Content/addressList?area=9" class="address-item">顺义区</router-link>
        <router-link to="/Content/addressList?area=11" class="address-item">昌平区</router-link>
        <router-link to="/Content/addressList?area=12" class="address-item">大兴区</router-link>
        <router-link to="/Content/addressList?area=13" class="address-item">怀柔区</router-link>
        <router-link to="/Content/addressList?area=14" class="address-item">平谷区</router-link>
        <router-link to="/Content/addressList?area=15" class="address-item">密云区</router-link>
        <router-link to="/Content/addressList?area=16" class="address-item">延庆区</router-link>
      </div>
    </div>
    <div class="hxfc">
      <img src="http://shzzpt.org.cn/web/assets/img/a5.png" alt="" class="title">
      <div class="hxfc-list">

        <div v-for="item in hxfc" :key="item.id">
          <a v-if="item.url" :href="item.url" class="hxfc-item ovHide2">
            {{ item.title }}
          </a>
          <router-link v-else class="hxfc-item ovHide2"
                       :to="'/Content/specialDetail?sid=3&id=' + item.id">
            {{ item.title }}
          </router-link>

        </div>

      </div>
    </div>


  </div>
</template>

<script>
import {getShxl} from "@/api/special";

export default {
  name: "special3",
  data() {
    return {
      bjms: [],
      llyj: [],
      rcpy: [],
      hxfc: [],
    }
  },
  created() {
    this.init()
  },
  methods: {
    async init() {
      let _data = await getShxl()
      this.bjms = _data.data.type_1
      this.llyj = _data.data.type_2
      this.rcpy = _data.data.type_3
      this.hxfc = _data.data.type_5
    }
  }
}
</script>

<style scoped lang="scss">
.warrper {
  background-color: #fdf0e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  .banner {
    width: 100%;
    height: auto;
  }

  .video {
    width: 687px;
    height: 422px;
    background-color: #1f3d7b;
    box-shadow: 0px 0px 12px 0px #c0c0c0;
    border-radius: 12px;
    border: solid 3px #ffffff;
    margin-top: 52px;
    margin-bottom: 40px;
  }

  .classify-title {
    width: 609px;
    height: auto;
    margin-top: 45px;
  }

  .desc {
    width: 690px;
    font-size: 28px;
    line-height: 44px;
    color: #333333;
    margin-top: 65px;
    text-align: justify;

    p {
      text-indent: 56px;
    }
  }

  .bjms {
    img {
      display: block;
      width: 90%;
      margin: 0 auto;
    }

    div {
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .bjms-item {
        display: block;
        width: 19%;
        padding: 20px 0;
        background: #c70005;
        text-align: center;
        font-size: 24px;
        color: #ffd01e;
      }
    }
  }

  .llyj {
    .title {
      display: block;
      width: 80%;
      margin: 20px auto;
    }

    .llyj-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 30px;

      .llyj-item {
        width: 330px;
        margin-bottom: 20px;

        img {
          display: block;
          width: 330px;
          height: 450px;
        }

        p {
          padding: 0 30px;
          text-align: center;
        }
      }
    }
  }

  .rcpy {
    .title {
      display: block;
      width: 80%;
      margin: 20px auto;
    }

    .rcpy-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 30px;

      .rcpy-item {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 220px;
        height: 180px;
        margin-bottom: 20px;
        background: #c70005;
        text-align: center;
        font-size: 28px;
        color: #ffd01e;

        p {
          padding: 0 30px;
          text-align: center;
        }
      }
    }
  }

  .zdjj {
    .title {
      display: block;
      width: 80%;
      margin: 20px auto;
    }

    .zdjj-list {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 38px 30px;

      .address-item {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 156px;
        height: 72px;
        background-color: #ffffff;
        border-radius: 2px;
        font-size: 26px;
        color: #333;
        margin-bottom: 19px;
      }
    }
  }

  .hxfc {
    .title {
      display: block;
      width: 80%;
      margin: 20px auto;
    }

    .hxfc-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 38px 30px;

      .hxfc-item {
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        width: 335px;
        height: 105px;
        padding: 25px;
        background-color: #ffffff;
        border-radius: 2px;
        font-size: 26px;
        color: #333;
        margin-bottom: 19px;
      }
    }
  }
}
</style>