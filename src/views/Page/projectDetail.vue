<template>
  <div class="project-detail">
    <h1 class="detail-title">{{ title }}</h1>
    <van-swipe
      class="my-swipe"
      :autoplay="3000"
      :show-indicators="false"
      @change="onChange"
    >
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <div class="swiper-img">
          <img :src="item" alt="" />
        </div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ current + 1 }}/{{ swiperList.length }}
        </div>
      </template>
    </van-swipe>
    <div class="detail-info">
      <h2 class="detail-info-title">
        <i class="iconfont iconjianjie"></i>基本信息
      </h2>
      <ul class="detail-info-list">
        <li>
          <span><i class="iconfont iconjigou"></i>运作机构：</span>
          <p>{{ name }}</p>
        </li>
        <li>
          <span><i class="iconfont iconrenyuan"></i>服务对象：</span>
          <p>{{ service_object }}</p>
        </li>
        <li>
          <span><i class="iconfont iconhome"></i>服务地点：</span>
          <p>{{ service_address }}</p>
        </li>
        <li>
          <span><i class="iconfont iconhezuo"></i>服务领域：</span>
          <p>{{ service_area }}</p>
        </li>
      </ul>
      <h2 class="detail-info-title">
        <i class="iconfont iconjianjie1"></i>项目简介
      </h2>
      <p class="detail-desc" v-for="item in xiangmu_desc" :key="item">
        {{ item }}
      </p>
    </div>
    <div class="credit-info">
      <h2 class="detail-info-title">
        <i class="iconfont iconzuanshi"></i>信用状况
      </h2>
      <ul class="credit-list">
        <li v-if="apply_info && userinfo">
          <h3><i class="iconfont iconjigou"></i>机构简介</h3>
          <p>
            {{ name }} ， {{ userinfo.chengli_time }} 在
            {{ userinfo.administration }} 登记成立，
            <span v-if="userinfo.registered_capital"
              >注册资金 {{ userinfo.registered_capital }} 元，</span
            >
            法定代表人/负责人是 {{ userinfo.legal_person }} 。 秘书处位于
            {{ apply_info.secretariat_address }} ， 现有专职
            {{ apply_info.major_num }} 人， 党员 {{ apply_info.party_num }} 人
            <span v-if="apply_info.party_name"
              >，成立有 {{ apply_info.party_name }}</span
            >
            。
            <span v-if="userinfo.examine"
              >经 {{ userinfo.examine }} 评定，评估等级为
              {{ userinfo.level }} 级，有效期为{{ userinfo.end_time }}。</span
            >
            <span v-for="(item, index) in userinfo.year.length" :key="item">
              <i v-if="userinfo.conclusion[index]"
                >{{ userinfo.year[index] }}年度年检（年报）结论为
                {{ userinfo.conclusion[index] }} ，</i
              >
            </span>
            业务范围包括{{ userinfo.range }}
            <span v-if="project_info.length > 0"
              >高质量完成 {{ project_info[0].entry_name }} 等项目；</span
            >
            <span v-if="honor.length > 0"
              >曾获得 {{ honor[0].honor_name }} 等荣誉表彰。</span
            >
            联系人：{{ apply_info.contacts }} ， 联系电话：{{
              apply_info.phone
            }}
            ， 邮箱： {{ apply_info.email }}。
          </p>
        </li>
        <li>
          <h3><i class="iconfont iconrenyuan"></i>项目团队</h3>
          <p>{{ team }}</p>
        </li>
        <li>
          <h3><i class="iconfont iconxinyong"></i>信用积累</h3>
          <p>
            <span v-if="is_dishonesty === 0"
              >机构或机构负责人未存在失信行为</span
            >
            <span v-else>机构或机构负责人存在失信行为</span>
            <br />
            <span v-if="is_punish === 0"
              >机构未受到登记管理机关或其他部门行政处罚</span
            >
            <span v-else
              >机构受到登记管理机关或其他部门行政处罚或行政处罚尚未执行完毕</span
            >
            <br />
            <span v-if="is_investigation === 0"
              >机构或机构负责人未被司法机关或有关部门立案调查</span
            >
            <span v-else>机构或机构负责人被司法机关或有关部门立案调查</span>
            <br />
            <span v-if="level">{{ level }}级社会组织（有效期2017年--2019年）<br /></span>
            
            运作经验：{{ experience }}
          </p>
        </li>
      </ul>
    </div>
    <div class="opinion-info" v-if="instructions">
      <h2 class="detail-info-title">
        <i class="iconfont iconyijian"></i>项目推介意见
      </h2>
      <p>{{ instructions }}</p>
    </div>
    <div class="support-info">
      <h2 class="detail-info-title">
        <i class="iconfont iconxinyong"></i>资助信息
      </h2>
      <ul class="detail-info-list">
        <li>
          <span><i class="iconfont icontongji"></i>所需资源：</span>
          <p>{{ yusuan }} / 万元</p>
        </li>
        <li>
          <span><i class="iconfont iconjifen"></i>以往资金来源：</span>
          <p>{{ source }}</p>
        </li>
        <li v-if="service_scope">
          <span><i class="iconfont iconrenyuan"></i>可服务范围及人群：</span>
          <p>{{ service_scope }}</p>
        </li>
        <li v-if="stakeholders">
          <span><i class="iconfont iconjigou"></i>可对接合作的资源方：</span>
          <p>{{ stakeholders }}</p>
        </li>
      </ul>
    </div>

    <div class="about-box">
      <div class="about-title">相关项目</div>
      <div class="about-list">
        <router-link
          class="about-item"
          :to="'/Content/projectDetail?id=' + item.id"
          v-for="(item, index) in relevant"
          :key="index"
        >
          <div>
            <img :src="item.xiangmu_kaizhan_img" alt="" />
          </div>
          <p class="ovHide">{{ item.entry_name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectDetail } from "@/api";

export default {
  name: "projectDetail",
  data () {
    return {
      title: '',
      current: 0,
      swiperList: [],
      name: '',
      apply_info: '',
      userinfo: '',
      project_info: '',
      honor: '',
      service_object: '',
      service_address: '',
      service_area: '',
      xiangmu_desc: '',

      desc: '',
      team: '',
      level: '',
      is_dishonesty: '',
      is_investigation: '',
      is_punish: '',
      experience: '',
      instructions: '',
      yusuan: '',
      source: '',
      service_scope: '',
      stakeholders: '',
      relevant: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    onChange (index) {
      this.current = index;
    },
    async init () {
      let _data = await getProjectDetail(this.$route.query.id)
      console.log(_data)
      this.title = _data.data.entry_name
      this.swiperList = _data.data.xiangmu_kaizhan_img
      this.name = _data.data.name
      this.service_object = _data.data.service_object
      this.service_address = _data.data.service_address
      this.service_area = _data.data.service_area
      this.xiangmu_desc = _data.data.xiangmu_desc.split('\n')
      this.desc = _data.data.desc
      this.team = _data.data.team
      this.level = _data.data.level
      this.is_dishonesty = _data.data.is_dishonesty
      this.is_investigation = _data.data.is_investigation
      this.is_punish = _data.data.is_punish
      this.experience = _data.data.experience
      this.instructions = _data.data.instructions
      this.yusuan = _data.data.yusuan
      this.source = _data.data.source
      this.service_scope = _data.data.service_scope
      this.stakeholders = _data.data.stakeholders
      this.relevant = _data.data.relevant
      this.userinfo = _data.data.userinfo
      this.apply_info = _data.data.apply_info
      this.project_info = _data.data.project_info
      this.honor = _data.data.honor
      this.userinfo.conclusion = this.userinfo.conclusion ? this.userinfo.conclusion.split(';') : []
                this.userinfo.year = this.userinfo.year ? this.userinfo.year.split(';') : []
    },
  },
  watch: {
    '$route': 'init'
  }
}
</script>

<style scoped lang="scss">
.project-detail {
  padding: 30px;

  .detail-title {
    text-align: center;
    font-size: 38px;
    line-height: 68px;
  }

  .my-swipe {
    margin-top: 20px;
    margin-bottom: 20px;

    .custom-indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      background: rgba(0, 0, 0, 0.1);
    }

    .swiper-img {
      width: 689px;
      height: 402px;
      background-image: linear-gradient(0deg, #ffb9b9 0%, #fae6e6 100%),
        linear-gradient(#e2412e, #e2412e);

      img {
        width: 100%;
        height: 100%;
        vertical-align: top;
        -o-object-fit: scale-down;
        object-fit: scale-down;
      }
    }
  }

  .detail-info {
    padding: 15px;
    margin-bottom: 20px;
    background-color: #e2412e;

    .detail-info-title {
      display: flex;
      align-items: center;
      color: #fff;
      height: 60px;
      font-size: 32px;

      i {
        font-size: 32px;
        margin-right: 10px;
      }
    }

    .detail-info-list {
      margin-bottom: 15px;

      li {
        display: flex;
        align-items: self-start;
        min-height: 60px;
        padding: 15px 0;
        border-bottom: 1px solid rgba(255, 177, 168, 0.2);
        color: #fff;
        font-size: 26px;

        span {
          display: flex;
          align-items: center;
          width: 180px;

          i {
            font-size: 32px;
            margin-right: 10px;
            color: rgba(255, 255, 255, 0.5);
          }
        }

        p {
          flex: 1;
        }
      }
    }

    .detail-desc {
      text-align: justify;
      text-indent: 52px;
      font-size: 26px;
      line-height: 40px;
      color: #ffffff;
    }
  }

  .credit-info {
    padding: 15px;
    margin-bottom: 20px;
    background-image: linear-gradient(0deg, #ffb9b9 0%, #fae6e6 100%),
      linear-gradient(#e6f2fa, #e6f2fa);
    .detail-info-title {
      display: flex;
      align-items: center;
      height: 60px;
      font-size: 32px;
      color: #e2412e;
      i {
        font-size: 32px;
        margin-right: 10px;
      }
    }

    .credit-list {
      padding-left: 20px;
      li {
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 10px;
        h3 {
          display: flex;
          align-items: center;
          color: #e2412e;
          font-size: 32px;
          height: 60px;
          i {
            font-size: 36px;
            margin-right: 10px;
            color: rgba(226, 65, 46, 0.5);
          }
        }
        p {
          padding: 10px;
          font-size: 24px;
          line-height: 34px;
          color: #333333;
        }
      }
    }
  }

  .opinion-info {
    padding: 15px;
    margin-bottom: 20px;
    background-image: linear-gradient(0deg, #ffb9b9 0%, #fae6e6 100%),
      linear-gradient(#e6f2fa, #e6f2fa);
    .detail-info-title {
      display: flex;
      align-items: center;
      height: 60px;
      font-size: 32px;
      color: #e2412e;
      i {
        font-size: 32px;
        margin-right: 10px;
      }
    }
    p {
      padding: 10px;
      font-size: 24px;
      line-height: 34px;
      color: #333333;
    }
  }

  .support-info {
    padding: 15px;
    margin-bottom: 20px;
    background-image: linear-gradient(0deg, #ffb9b9 0%, #fae6e6 100%),
      linear-gradient(#e6f2fa, #e6f2fa);
    .detail-info-title {
      display: flex;
      align-items: center;
      height: 60px;
      font-size: 32px;
      color: #e2412e;
      i {
        font-size: 32px;
        margin-right: 10px;
      }
    }
    .detail-info-list {
      margin-bottom: 15px;

      li {
        display: flex;
        align-items: self-start;
        min-height: 60px;
        padding: 15px 0;
        border-bottom: 1px solid rgba(255, 177, 168, 0.2);
        font-size: 26px;

        span {
          display: flex;
          align-items: self-start;
          width: 240px;

          i {
            font-size: 32px;
            margin-right: 10px;
            color: #e75f4f;
          }
        }

        p {
          flex: 1;
        }
      }
    }
  }

  .about-box {
    .about-title {
      height: 60px;
      line-height: 60px;
      font-size: 38px;
      margin-bottom: 20px;
    }
    .about-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      justify-content: space-between;
      .about-item {
        display: block;
        width: 333px;
        margin-bottom: 20px;
        div {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 333px;
          height: 210px;
          img {
            display: block;
            width: 330px;
            height: 210px;
          }
        }
        p {
          padding: 0 20px;
          height: 51px;
          line-height: 51px;
          color: #fff;
          font-size: 24px;
          text-align: center;
          background-color: #e2412e;
        }
      }
    }
  }
}
</style>