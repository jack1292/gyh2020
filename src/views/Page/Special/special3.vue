<template>
  <div class="warrper">
    <img class="banner" src="../../../assets/img/bg_special3.png"/>
    <img class="classify-title" src="../../../assets/img/special_desc3.png"/>
    <div class="desc">
      <p>
        社会心理服务体系建设是全面加强基层社会治理的基础性工作，是提升人民群众“七有五性三感”、维护社会和谐稳定的重要支撑。贯彻落实党中央决策部署，北京各级党委政府、各从业社会组织，以高度的政治责任感，全面加强社会心理服务体系建设。蔡奇书记主持召开北京市社会建设工作领导小组会议，通过并印发了《北京市加强社会心理服务体系建设的意见》，全面构建了首都社会心理服务体系建设整体架构，初步形成了“党委领导、政府负责、社会协同、多元保障，服务有效”的社会心理服务体系建设“北京模式”，贡献了北京智慧、北京方案。</p>
      <br>
      <p>
        在疫情防控期间，全市社会心理专业机构通过“京鄂I WILL
        志愿行动”、网上授课咨询、心理服务热线开通、相关APP、公众号专业推送等方式为老人、儿童、社区工作者、医护人员开展心理服务，市民应对疫情的恐慌心理、焦虑情绪、负面心态得到有效缓解和干预。</p><br>
      <p>
        新时代加强社会心理服务体系建设任务艰巨使命光荣。要充分发挥北京社会心理服务优势，全面形成北京“十四五”时期社会心理服务体系发展的总体设计。要充分发挥首都资源集聚优势，全面推进社会心理的研究引领和实践探索。要充分聚焦人们进群众对美好生活的向往，培育积极向上的社会心态，为全面提升广大人民群众的获得感、幸福感、安全感贡献新的力量。</p>
    </div>
    <video class="video"
           controls src="http://gyhfile.shzzfw.com/zt3.mp4"
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
        <router-link to="/Content/addressList?area=1&name=东城区" class="address-item">东城区</router-link>
        <router-link to="/Content/addressList?area=2&name=西城区" class="address-item">西城区</router-link>
        <router-link to="/Content/addressList?area=3&name=朝阳区" class="address-item">朝阳区</router-link>
        <router-link to="/Content/addressList?area=4&name=海淀区" class="address-item">海淀区</router-link>
        <router-link to="/Content/addressList?area=5&name=丰台区" class="address-item">丰台区</router-link>
        <router-link to="/Content/addressList?area=6&name=石景山区" class="address-item">石景山区</router-link>
        <router-link to="/Content/addressList?area=7&name=门头沟区" class="address-item">门头沟区</router-link>
        <router-link to="/Content/addressList?area=8&name=房山区" class="address-item">房山区</router-link>
        <router-link to="/Content/addressList?area=9&name=通州区" class="address-item">通州区</router-link>
        <router-link to="/Content/addressList?area=10&name=顺义区" class="address-item">顺义区</router-link>
        <router-link to="/Content/addressList?area=11&name=昌平区" class="address-item">昌平区</router-link>
        <router-link to="/Content/addressList?area=12&name=大兴区" class="address-item">大兴区</router-link>
        <router-link to="/Content/addressList?area=13&name=怀柔区" class="address-item">怀柔区</router-link>
        <router-link to="/Content/addressList?area=14&name=平谷区" class="address-item">平谷区</router-link>
        <router-link to="/Content/addressList?area=15&name=密云区" class="address-item">密云区</router-link>
        <router-link to="/Content/addressList?area=16&name=延庆区" class="address-item">延庆区</router-link>
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