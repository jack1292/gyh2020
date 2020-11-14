<template>
    <div class="mine-container">
        <div class="mine-info">
            <img class="mine-img"
                 :src="user.head_url ? user.head_url : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAnCAYAAABEz7vjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFMDNBNDZFRjYyNjExRUE5NDA1Qzk4MThFRTE4N0NGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFMDNBNDZGRjYyNjExRUE5NDA1Qzk4MThFRTE4N0NGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUwM0E0NkNGNjI2MTFFQTk0MDVDOTgxOEVFMTg3Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUwM0E0NkRGNjI2MTFFQTk0MDVDOTgxOEVFMTg3Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RpxiQAAAHnUlEQVR42sSZ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'"/>
            <div class="mine-name">{{user.name}}</div>
        </div>

        <div class="integral-all">
            <div class="flex-start integral-total">
                总积分：<span><b>{{ all }}</b>分</span>
                <!--          <a href="javascript:void 0">积分兑换</a>-->
            </div>
            <div class="integral-item-box">
                <div class="integral-item integral-item1">
                    <span><b>{{ video }}</b>分</span>
                    <!--            <a href="javascript:void  0">查看详情</a>-->
                </div>
                <div class="integral-item integral-item2">
                    <span><b>{{ message }}</b>分</span>
                    <!--            <a href="javascript:void  0">查看详情</a>-->
                </div>
                <div class="integral-item integral-item3">
                    <span><b>{{ share }}</b>分</span>
                    <!--            <a href="javascript:void  0">查看详情</a>-->
                </div>
                <div class="integral-item integral-item4">
                    <span><b>{{ zan }}</b>分</span>
                    <!--            <a href="javascript:void  0">查看详情</a>-->
                </div>
            </div>
        </div>

        <div class="content-info">
            <div class="content-info-title">积分奖励</div>
            <div class="reward-box">
                <div class="reward-list">
                    <div class="reward-item">
                        <p><i class="iconfont iconjifen"></i>1000分以上</p>
                        <img src="../../assets/img/integral-item5.png" alt="">
                        <div>获得电子参展证书</div>
                    </div>
                    <div class="reward-item">
                        <p><i class="iconfont iconjifen"></i>2000分以上</p>
                        <img src="../../assets/img/integral-item6.png" alt="">
                        <div>赠送北京市社会组织孵化中心</div>
                    </div>
                    <div class="reward-item">
                        <p><i class="iconfont iconjifen"></i>3000分以上</p>
                        <img src="../../assets/img/integral-item7.png" alt="">
                        <div>获得一次今日头条、搜狐等
                            网站推广内容的机会
                        </div>
                    </div>
                    <div class="reward-item">
                        <p><i class="iconfont iconjifen"></i>5000分以上</p>
                        <img src="../../assets/img/integral-item8.png" alt="">
                        <div>赠送微店独立运权<br/>
                            （自备域名，自己运维）
                        </div>
                    </div>
                </div>
                <div class="mechanism">
                    <h3>一、积分获取：</h3>
                    <p>
                        1、参加一次论坛直播100分，要求在线30分钟以上；<br/>
                        2、获得一人留言80分，每个游客账户算一人；<br/>
                        3、转发一次名片50分，每个游客账户算一次；<br/>
                        4、为其他社会组织点赞一次得1分，每天不超过200分。<br/>
                    </p>
                    <br/>
                    <h3>二、兑换机制：</h3>
                    <p>
                        汇展期间积分1000以上皆可获得电子参展证书；2000分以上还可赠送北京市社会组织孵化中心百人场地半天免费使用；3000分以上还可获得一次今日头条、搜狐等网站推广内容的机会；5000分以上还可赠送微店独立运营权（自备域名，自己运维）。以上奖项可重复获得。</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {showIntegral} from "@/api";
    export default {

        name: "mine",
        data() {
            return {
                user: null,
                all: 0,
                video: 0,
                message: 0,
                share: 0,
                zan: 0,
            }
        },
        created() {
            this.user = this.$store.state.user
            console
            if(!this.user || this.user!== 'null' ){
                this.init()
            }else{
                this.$router.push('/Home/login')
            }
            
        },
        methods: {

            async init() {
                let _data = await showIntegral(this.$store.state.user.token)
                if(_data.status === 301){
                    this.$store.state.user = ''
                    this.$router.push('/Home/login')
                }
                this.all = _data.data.all
                this.video = _data.data.video
                this.message = _data.data.message
                this.share = _data.data.share
                this.zan = _data.data.zan
            }
        }
    }
</script>

<style scoped lang="scss">
    .mine-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        .mine-info {
            background: url("http://shzzpt.org.cn/gyh/img/mune.fc0f594d.jpg") no-repeat top;
            background-size: 100%;
            width: 100%;
            height: 383px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .mine-img {
                width: 128px;
                height: 128px;
                border-radius: 128px;
                object-fit: scale-down;
                border: 1px solid #f9aa0d;
            }
            .mine-name {
                font-size: 36px;
                color: #ffffff;
                margin-top: 25px;
            }
        }
        .integral-all {
            margin: -50px 30px;
            background-color: #ffffff;
            box-shadow: 0px 0px 10px 0px
            rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            padding: 20px;
            .integral-total {
                font-size: 16px;
                line-height: 48px;
                span {
                    color: #ffba00;

                    b {
                        font-size: 36px;
                    }
                }
            }

            .integral-item-box {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                justify-content: space-between;
                .integral-item {
                    width: 315px;
                    height: 140px;
                    border-radius: 8px;
                    position: relative;
                    margin-top: 20px;
                    &.integral-item1 {
                        background: url("../../assets/img/integral-item1.png") no-repeat;
                        background-size: 131% 108%;
                    }

                    &.integral-item2 {
                        background: url("../../assets/img/integral-item2.png") no-repeat;
                        background-size: 131% 108%;
                    }

                    &.integral-item3 {
                        background: url("../../assets/img/integral-item3.png") no-repeat;
                        background-size: 131% 108%;
                    }

                    &.integral-item4 {
                        background: url("../../assets/img/integral-item4.png") no-repeat;
                        background-size: 131% 108%;
                    }

                    span {
                        display: block;
                        padding-top: 70px;
                        padding-left: 40px;
                        color: #fff;
                        font-size: 18px;

                        b {
                            font-size: 24px;
                        }
                    }

                    a {
                        position: absolute;
                        right: 10px;
                        top: 30px;
                        width: 78px;
                        height: 34px;
                        text-align: center;
                        line-height: 32px;
                        color: #fff;
                        border-radius: 6px;
                        border: solid 1px #ffffff;
                    }
                }
            }
        }
        .content-info {
            border-top: 20px solid #efefef;
            display: flex;
            flex-direction: column;
            min-height: auto;
            margin-bottom: 30px;
            margin-top:80px;
            padding: 40px;
            .content-info-title {
                display: flex;
                flex-direction: row;
                height: 56px;
                line-height: 56px;
                padding: 0 30px;
                position: relative;
                justify-content: space-between;
                font-size: 32px;
                font-weight: bold;
                color: #333333;

                &:before {
                    position: absolute;
                    top: 11px;
                    left: 0px;
                    content: '';
                    width: 6px;
                    height: 30px;
                    background-color: #f9aa0d;
                }
            }



            .reward-box {
                .reward-list {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: space-between;

                    .reward-item {
                        width: 48%;
                        margin-top: 30px;
                        p {
                            width: 100%;
                            height: 60px;
                            line-height: 60px;
                            border: solid 1px #ffba00;
                            text-align: center;
                            color: #ffba00;
                        }
                        img {
                            display: block;
                            width: 100%;
                        }
                        div {
                            width: 100%;
                            height: 95px;
                            padding: 10px;
                            color: #fff;
                            font-size: 26px;
                            line-height: 30px;
                            text-align: center;
                            background-color: #f9aa0d;
                        }
                    }
                }
                .mechanism {
                    padding: 30px 0;
                    h3 {
                        font-size: 28px;
                        font-weight: bold;
                        color: #f9aa0d;
                    }
                    p {
                        line-height: 39px;
                        font-size: 26px;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
</style>