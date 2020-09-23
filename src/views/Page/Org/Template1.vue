<template>
  <div class="warpper">
    <div class="org-logo">
      <div>
        <img :src="apply_info.logo_url" alt="" v-if="apply_info.logo_url">
        <p>{{ userinfo.name }}</p>
      </div>
    </div>

    <div class="banner">
      <img :src="organization[0].img_url" alt="">
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

    <div class="org-project">
      <div class="title">
        <h3>项目展示</h3>
        <p>PRESENTATION</p>
      </div>
    </div>


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
      srcList: []
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
    }
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
  .org-project{
    padding: 40px 20px;
    background: #fff;
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