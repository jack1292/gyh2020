<template>
  <div class="call-warpper">
    <div class="call-item">
      <span>姓名：</span>
      <input type="text" placeholder="请输入姓名" v-model="name">
    </div>
    <div class="call-item">
      <span>机构：</span>
      <input type="text" placeholder="请输入机构" v-model="org">
    </div>
    <div class="call-item">
      <span>手机号：</span>
      <input type="text" placeholder="请输入手机号" v-model="tel">
    </div>
    <div class="call-item active">
      <span>留言：</span>
      <textarea placeholder="请输入留言" v-model="desc"></textarea>
    </div>

    <div class="submit-btn" @click="submitInfo">提交</div>

    <div class="call-info">
      <h3>联系方式</h3>
      <p><i class="iconfont icondizhi"></i> 地址：北京市海淀区颐和园路5号北京大学管理学院</p>
      <p class="active">240室</p>
      <p><i class="iconfont iconzuoji"></i> 电话：010-62744360（ 工作日 9:00 - 18:00 ）</p>
      <p><i class="iconfont iconyouxiang"></i> 邮箱：zccfpt@zccfpt.com</p>
    </div>
  </div>
</template>

<script>
import {submitCall} from '@/api'
export default {
  name: "call",
  data() {
    return {
      name: '',
      org: '',
      tel: '',
      desc: '',
      state:true
    }
  },
  methods: {
    async submitInfo(){
      if(!this.name) return this.$toast('请输入姓名')
      if(!this.org) return this.$toast('请输入机构')
      if(!this.tel) return this.$toast('请输入手机号码')
      if(this.$tools.checkTel(this.tel)) return this.$toast('请输入正确的手机号码')
      if(!this.desc) return this.$toast('请输入留言')
      if(this.state){
        let _data = await submitCall(this.name,this.org,this.tel,this.desc)
        if(_data.status){
          this.$toast('您的留言已提交，稍后有相关人员联系您！')
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.call-warpper {
  padding: 30px;

  .call-item {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &.active {
      align-items: self-start;
    }

    span {
      display: block;
      width: 120px;
      height: 72px;
      flex-shrink: 0;
      text-align: right;
      line-height: 72px;
    }

    input {
      width: 600px;
      height: 72px;
      font-size: 28px;
      padding: 0 20px;
      background-color: #fafafa;
      border-radius: 4px;
      border: solid 1px #e5e5e5;
    }

    textarea {
      width: 600px;
      height: 200px;
      padding: 20px;
      font-size: 28px;
      background-color: #fafafa;
      border-radius: 4px;
      border: solid 1px #e5e5e5;
    }
  }

  .submit-btn {
    width: 517px;
    height: 76px;
    text-align: center;
    line-height: 76px;
    margin: 40px auto;
    font-size: 28px;
    color: #fff;
    background-color: #d8200a;
    border-radius: 38px;
  }

  .call-info {
    h3 {
      font-size: 32px;
      font-weight: bold;
      color: #4f4f4f;
      margin-bottom: 20px;
    }

    p {
      font-size: 26px;
      line-height: 36px;
      margin-bottom: 15px;
      color: #4f4f4f;
      &.active{
        padding-left: 120px;
      }
      i {
        font-size: 32px;
      }
    }
  }
}
</style>