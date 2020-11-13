<template>
    <div>
        <div class="header">
            <div>
                <img src="../../assets/img/logo.png" alt="" class="lgoo">
            </div>
            <div class="right-nav" @click="show = true">
                <i class="iconfont iconmenuManager"></i>
            </div>

        </div>
        <van-overlay :show="show" @click="show = false">
            <div class="overlay-nav">
                <van-cell title="网站首页" is-link to="/Home/index"/>
                <van-cell title="专题展" is-link to="/Home/special"/>
                <van-cell title="组织展" is-link to="/Home/organization"/>
                <van-cell title="项目展" is-link to="/Home/project"/>
                <van-cell title="慈善展" is-link to="/Home/charitable"/>
                <van-cell title="前沿论坛" is-link to="/Home/forum"/>
                <van-cell title="消费扶贫" is-link to="/Home/alleviation"/>
                <van-cell title="关于汇展" is-link to="/Home/about"/>
                <van-cell title="联系我们" is-link to="/Home/call"/>
                <van-cell title="免责声明" is-link to="/Home/mianze"/>
                <van-cell title="登录" is-link to="/Home/login" v-if="!isLogin" />
                <van-cell title="个人中心" is-link to="/Home/mine" v-if="isLogin" />
            </div>
        </van-overlay>
    </div>

</template>

<script>
    export default {
        name: "HeaderNav",
        data() {
            return {
                show: false,
                isLogin: this.$store.state.user && this.$store.state.user.token
            }
        }
    }
</script>

<style scoped lang="scss">
    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 88px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff6f6;
        z-index: 2000;
        .lgoo {
            display: block;
            height: 70px;
        }
        .right-nav {
            i {
                display: block;
                width: 88px;
                height: 88px;
                text-align: center;
                line-height: 88px;
                font-size: 44px;
            }
        }

    }

    .overlay-nav {
        position: fixed;
        top: 88px;
        right: 30px;
        width: 50%;
        background: #fff;
        padding: 10px;
        border-radius: 10px;
    }
</style>