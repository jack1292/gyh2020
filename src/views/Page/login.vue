<template>
  <div class="login-warpper">
    <img
      class="logo"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAnCAYAAABEz7vjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFMDNBNDZFRjYyNjExRUE5NDA1Qzk4MThFRTE4N0NGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFMDNBNDZGRjYyNjExRUE5NDA1Qzk4MThFRTE4N0NGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUwM0E0NkNGNjI2MTFFQTk0MDVDOTgxOEVFMTg3Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUwM0E0NkRGNjI2MTFFQTk0MDVDOTgxOEVFMTg3Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RpxiQAAAHnUlEQVR42sSZ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"
    />
    <div class="title">2020北京公益慈善汇展</div>
    <div class="login-container">
      <div class="login-title">登录</div>
      <div class="login-input">
        <div class="input-title">机构名称</div>
        <input
          class="input-content"
          v-model="account"
          autocomplete="on"
          placeholder="请输入机构名称"
        />
      </div>
      <div class="login-input">
        <div class="input-title">密码</div>
        <input
          class="input-content"
          v-model="password"
          type="password"
          placeholder="请输入密码(初始登录密码:123456)"
        />
      </div>
      <div class="login-input">
        <div class="input-title">验证码</div>
        <div class="input-container">
          <input
            class="input-content2"
            maxlength="4"
            v-model="code"
            placeholder="请输入验证码"
          />
          <div class="code-img" @click="refreshCode">
            <s-identify :identifyCode="identifyCode"></s-identify>
          </div>
        </div>
      </div>
      <van-button
        round
        class="login-submit-btn"
        @click="login"
        :disabled="submitState"
        >登 录</van-button
      >
      <router-link to="forget" class="forget"> 忘记密码？ </router-link>
    </div>
    <div class="tag">公益汇聚力量 慈善人人参与</div>
  </div>
</template>

<script>
import SIdentify from "../Components/identify.vue";
import { Toast } from "vant";
import { login } from "@/api";
export default {
  components: { SIdentify },
  name: "login",
  data () {
    return {
      submitState: false,
      account: '',
      password: '',
      code: '',
      identifyCode: '',
      identifyCodes: '123456789ABCDEFGHJKLMNPQRSTUVWXYZ',
    }
  },
  created () {
    this.refreshCode()
  },
  methods: {
    async login () {
      this.submitState = true
      if (!this.account) {
        Toast('请输入机构名称')
        this.submitState = false
        return
      }
      if (!this.password) {
        Toast('请输入登录密码')
        this.submitState = false
        return
      }
      if (!this.code) {
        Toast('请输入验证码')
        this.submitState = false
        return
      }
      if (this.code.toUpperCase() !== this.identifyCode) {
        Toast('验证码错误，请重新输入')
        this.submitState = false
        return
      }
      this.submitState = false
      let _data = await login(this.account, this.password)
      if (_data.status === 200) {
        this.$store.state.user = _data.data
        setTimeout(() => {
          window.location.href = 'http://shzzpt.org.cn/m/#/Home/mine'
        }, 200)

      } else {
        Toast(_data.msg)
      }
    },
    /*
   * 生成验证码
   * */
    randomNum (min, max) {
      console.log(Math.floor(Math.random() * (max - min) + min))
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCode, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, 33)
        ]
      }
      console.log(this.identifyCode)
    }
  }
}
</script>

<style scoped lang="scss">
.login-warpper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url("http://shzzpt.org.cn/gyh/img/login.2f11e7a5.jpg") no-repeat;
  background-size: 100% 100%;
  .logo {
    width: 130px;
    height: 130px;
    object-fit: scale-down;
    margin-top: 30px;
  }
  .title {
    font-size: 42px;
    font-weight: bold;
    color: #ffffff;
  }
  .login-container {
    margin: 30px;
    width: 690px;
    min-height: 732px;
    background-color: #ffffff;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    .login-title {
      font-size: 42px;
      font-weight: bold;
      color: #333333;
      margin-top: 30px;
      margin-bottom: 20px;
    }
    .login-input {
      display: flex;
      width: 100%;
      align-items: center;
      margin-top: 20px;
      .input-title {
        font-size: 28px;
        color: #333333;
        width: 120px;
        text-align: right;
        flex-shrink: 0;
      }
      .input-content {
        flex: 1;
        height: 82px;
        background-color: #ffffff;
        border-radius: 4px;
        border: solid 2px #d6d6d6;
        padding: 0 12px;
        margin-left: 12px;
        font-size: 28px;
      }
      .input-container {
        display: flex;
        flex-grow: 1;
        border-radius: 4px;
        border: solid 2px #d6d6d6;
        padding: 0 12px;
        margin-left: 12px;
        align-items: center;
        .input-content2 {
          width: 300px;
          height: 82px;
          background-color: #ffffff;
          padding: 0 12px;
          font-size: 28px;
        }
        .code-img {
          flex-shrink: 0;
          /*width: 139px;*/
          /*height: 55px;*/
          border: solid 1px #cccccc;
        }
      }
    }
  }
  .login-submit-btn {
    width: 616px;
    height: 88px;
    line-height: 88px;
    text-align: center;
    background-color: #c51119;
    border-radius: 44px;
    font-size: 32px;
    color: #ffffff;
    margin-top: 46px;
  }
  .forget {
    font-size: 28px;
    color: #c51119;
    margin-top: 35px;
  }
  .tag {
    font-size: 26px;
    color: #fdd59a;
    margin-top: 60px;
    margin-bottom: 30px;
  }
}
</style>