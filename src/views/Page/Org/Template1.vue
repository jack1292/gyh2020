<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div class="warpper">
    <div class="org-logo">
      <div>
        <img :src="apply_info.logo_url" alt="" v-if="apply_info.logo_url">
        <p>{{ userinfo.name }}</p>
      </div>
    </div>

    <div class="banner">
      <img :src="organization[0].img_url" alt="" v-if="organization.length>0">
      <div>
        <h3>机构简介</h3>
        <p>ORGANIZATION PROFILE</p>
      </div>
    </div>
    <div style="height: 30px;background: #fff;"></div>
    <div class="org-desc">
      <p>{{ userinfo.name }} ，
        于 {{ userinfo.chengli_time }} 在 {{ userinfo.administration }} 登记成立，
        注册资金 {{ userinfo.registered_capital }} 元，
        法定代表人/负责人是 {{ userinfo.legal_person }} 。
        秘书处位于 {{ apply_info.secretariat_address }} ，
        现有专职 {{ apply_info.major_num }} 人，
        党员 {{ apply_info.party_num }} 人
        <span v-if="apply_info.party_name">，成立有 {{ apply_info.party_name }}</span> 。
        <span v-if="userinfo.examine">经 {{ userinfo.examine }} 评定，评估等级为 {{ userinfo.level }} 级，有效期为{{ userinfo.end_time }}。</span>
        <span v-for="(item,index) in userinfo.year.length" :key="item">
            <i v-if="userinfo.conclusion[index]">{{ userinfo.year[index] }}年度年检（年报）结论为 {{ userinfo.conclusion[index] }} ，</i>
          </span>
        业务范围包括{{ userinfo.range }}
        <span v-if="project_info.length>0">高质量完成 {{project_info[0].entry_name}} 等项目；</span>
        <span v-if="honor.length>0">曾获得 {{ honor[0].honor_name }} 等荣誉表彰。</span>
        联系人：{{apply_info.contacts}} ，
        联系电话：{{apply_info.phone}} ，
        邮箱： {{apply_info.email}}。</p>
      <div class="BannerBox">
        <div class="bannerBtn1">
          <img src="../../../assets/img/wenziqiashang.png" alt="">文字洽商
        </div>
        <div class="bannerBtn2">
          <img src="../../../assets/img/yijiantonghua.png" alt="">一键通话
        </div>
        <div class="bannerBtn3">
          <img src="../../../assets/img/yijianzhuanfa.png" alt="">一键转发
        </div>
      </div>
    </div>

    <div class="org-project" v-if="project_info.length !== 0">
      <div class="title">
        <h3>项目展示</h3>
        <p>PRESENTATION</p>
      </div>
      <div class="org-project-list">
        <div class="org-project-item" :class="{active:project_info.length % 2 ===1 && index === 0}" v-for="(item,index) in project_info" :key="index">
          <img class="item-image" :src="item.xiangmu_kaizhan_img[0]"/>
          <div class="item-title" :class="{active:project_info.length % 2 ===1 && index === 0}">{{item.entry_name}}</div>
          <img class="item-tag" src="../../../assets/img/img_tuijian.png" v-if="item.instructions" />
        </div>
      </div>
    </div>

    <div class="mien-project">
      <div class="title">
        <h3>风采展示</h3>
        <p>ELEGANT DEMEANOR</p>
      </div>
      <div class="org-project-list" v-if="organization.length>0">
        <div class="org-project-item" :class="{active:organization.length % 2 ===1 && index === 0}" v-for="(item,index) in organization" :key="index" @click="toMienPreview(index)">
          <img class="item-image" :src="item.img_url"/>
          <div class="item-title" :class="{active:organization.length % 2 ===1 && index === 0}">{{item.title}}</div>
        </div>
      </div>
    </div>

    <div class="contact-us">
      <div class="title">
        <h3>联系我们</h3>
        <p>CONTACT US</p>
      </div>
      <div class="item-container">
        <img class="item-img" src="../../../assets/img/img_lianxiren1.png"/>
        <div class="item-content">
          <div class="item-tag">联系人：<span class="item-title">{{apply_info.contacts}}</span></div>
          <div class="item-tag margin-top-sm">联系电话：<span class="item-title">{{apply_info.phone}}</span></div>
        </div>
      </div>
      <div class="item-container">
        <img class="item-img"  src="../../../assets/img/img_address1.png"/>
        <div class="item-content">
          <div class="item-tag">联系地址</div>
          <div class="item-title margin-top-sm">{{ apply_info.secretariat_address }}</div>
        </div>
      </div>
    </div>
    <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="srcList" @change="onChange">
      <template class="title" v-slot:cover>{{previewTitle}}</template>
    </van-image-preview>
  </div>
</template>

<script>
import {getInstitutionInfo} from '@/api'
export default {
  name: "Template1",
  data() {
    return {
      userinfo: {
        "phone": '',
        "name": '',
        "chengli_time": '',
        "administration": '',
        "legal_person": '',
        "manage_depart": '',
        "registered_capital": '',
        "range": '',
        "level": '',
        "end_time": '',
        "examine": '',
        "conclusion": "",
        "year": "",
        "regist_no": "",
        "unified_code": '',
        "org_type": '',
        "business_unit": '',
        "registration_status": "正常",
        "address": '',
        "create_time": '',
        "shop_id": '',
      },
      apply_info: {
        "user_id": '',
        "contacts": '',
        "website": '',
        "email": '',
        "shenbao_phone": '',
        "assets": '',
        "expenditure": '',
        "is_dishonesty": '',
        "is_punish": '',
        "is_investigation": '',
        "legal_person_img": '',
        "level_img": '',
        "desc": '',
        "secretariat_address": '',
        "major_num": '',
        "party_num": '',
        "party_name": '',
        "logo_url": '',
      },
      project_info: [],
      organization: [],
      honor: [],
      srcList: [],
        startPosition:0,
        previewTitle:'',
        show:false
    }
  },
  created() {
    if (this.$route.query.id) {
      this.getInstitutionInfo()
    }

  },
  methods: {
    async getInstitutionInfo() {

      let _data = await getInstitutionInfo(this.$route.query.id)
      this.userinfo = _data.data.userinfo
      this.apply_info = _data.data.apply_info
      this.project_info = _data.data.project_info
      this.organization = _data.data.organization
      this.honor = _data.data.honor

      if (this.organization.length > 0) {
        this.organization.map(item => {
          this.srcList.push(item.img_url)
        })
      }
      this.project_info.map(item => {
        item.xiangmu_kaizhan_img = item.xiangmu_kaizhan_img.split(',')
      })

      this.userinfo.conclusion = this.userinfo.conclusion ? this.userinfo.conclusion.split(';') : []
      this.userinfo.year = this.userinfo.year ? this.userinfo.year.split(';') : []
    },
      toMienPreview(index){
        this.startPosition = index
          this.show = true
          console.log(this.organization[index])
          this.previewTitle = this.organization[index].title
//          this.toPreview(,index)
      },
      onChange(index) {
          this.previewTitle = this.organization[index].title
          this.startPosition = index;
      },
  }
}
</script>

<style scoped lang="scss">

.warpper {
  background: #f5f5f5;
  min-height: 100vh;
  padding: 1px 0;

  .org-logo{
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    margin: 20px;
    padding: 0 20px;
    background: #fff;
    border-radius: 10px;
    div{
      display: flex;
      align-items: center;
      img{
        display: block;
        width: 100px;
        margin-right: 20px;
        object-fit: scale-down;
      }
      p{
        flex: 1;
        font-size: 30px;
        font-weight: bold;
        color: #555555;
      }
    }
  }
  .banner{
    position: relative;
    height: 617px;
    background: #fff;
    img{
      width: 100%;
      height: 100%;
      object-fit: scale-down;
    }
    div{
      position: absolute;
      left: 65px;
      right: 65px;
      bottom: -50px;
      height: 100px;
      background-color: #ffffff;
      box-shadow: 0px 3px 27px 0px
      rgba(0, 0, 0, 0.12);
      border-radius: 10px;
      padding: 10px 0;
      h3{
        font-size: 38px;
        text-align: center;
        line-height: 50px;
      }
      p{
        font-size: 20px;
        text-align: center;
        line-height: 40px;
        font-weight: lighter;
        color: #999;
      }
    }
  }
  .org-desc{
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    p{
      font-size: 30px;
      line-height: 160%;
    }
    .BannerBox {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 20px;

      .bannerBtn1 {
        width: 215px;
        height: 130px;
        background-color: #c70005;
        border-radius: 10px;
        cursor: pointer;
        color: #ffffff;
        font-size: 30px;
        text-align: center;

        img {
          display: block;
          margin: 20px auto;
        }
      }

      .bannerBtn2 {
        width: 215px;
        height: 130px;
        background-color: #007ac7;
        border-radius: 10px;
        cursor: pointer;
        color: #ffffff;
        font-size: 30px;
        text-align: center;

        img {
          display: block;
          margin: 20px auto;
        }
      }

      .bannerBtn3 {
        width: 215px;
        height: 130px;
        background-color: #e5580b;
        border-radius: 10px;
        //display: flex;
        //justify-content: center;
        //align-items: center;
        cursor: pointer;
        color: #ffffff;
        font-size: 30px;
        text-align: center;

        img {
          display: block;
          margin: 22px auto;
        }
      }
    }
  }
  .contact-us{
    padding: 40px 20px;
    background: #fff;
    .item-container{
      display: flex;
      flex-direction: row;
      height: 169px;
      background-color: #ffffff;
      box-shadow: 0px 3px 24px 0px  rgba(0, 0, 0, 0.11);
      border-radius: 10px;
      align-items: center;
      margin-top: 24px;
      .item-img{
        object-fit: scale-down;
        flex-shrink: 0;
        margin-left: 40px;
        margin-right: 22px;
        width: 89px;
        height: 89px;
      }
      .item-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        .item-tag{
          font-size: 24px;
          color: #666666;
        }
        .item-title{
          font-size: 30px;
          color: #333333;
        }
      }
    }
    .title{
      h3{
        font-size: 38px;
        text-align: center;
        line-height: 50px;
      }
      p{
        font-size: 20px;
        text-align: center;
        line-height: 40px;
        font-weight: lighter;
        color: #999;
      }
    }
  }
  .mien-project{
    padding: 40px 12px;
    background: #fff;
    .org-project-list{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      .org-project-item{
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 24px;
        width: 336px;
        height: 207px;
        position: relative;
        overflow: hidden;
        &.active{
          width: 700px;
          height: 459px;
          margin-right: 20px;
        }
        .item-image{
          width: 100%;
          height: 100%;
          object-fit: scale-down;
        }
        .item-title{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 49px;
          line-height: 49px;
          text-align: center;
          background-color: #000000b3;
          font-size: 26px;
          color: #ffffff;
          &.active{
            height: 58px;
            line-height: 58px;
          }
        }
      }
    }
    .title{
      h3{
        font-size: 38px;
        text-align: center;
        line-height: 50px;
      }
      p{
        font-size: 20px;
        text-align: center;
        line-height: 40px;
        font-weight: lighter;
        color: #999;
      }
    }
  }
  .org-project{
    padding: 40px 12px;
    background: #fff;
    .org-project-list{
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      .org-project-item{
        margin-left: 12px;
        margin-right: 12px;
        margin-top: 24px;
        width: 336px;
        height: 207px;
        position: relative;
        overflow: hidden;
        &.active{
          width: 700px;
          height: 459px;
          margin-right: 20px;
        }
        .item-image{
          width: 100%;
          height: 100%;
          object-fit: scale-down;
        }
        .item-tag{
          width: 160px;
          height: 160px;
          position: absolute;
          right: -36px;
          top: -36px;
        }
        .item-title{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 49px;
          line-height: 49px;
          text-align: center;
          background-color: #c70005;
          font-size: 26px;
          color: #ffffff;
          &.active{
            height: 58px;
            line-height: 58px;
          }
        }
      }
    }
    .title{
      h3{
        font-size: 38px;
        text-align: center;
        line-height: 50px;
      }
      p{
        font-size: 20px;
        text-align: center;
        line-height: 40px;
        font-weight: lighter;
        color: #999;
      }
    }
  }
}
</style>