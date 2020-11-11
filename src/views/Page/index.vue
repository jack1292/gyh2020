<template>
    <div class="warpper-index">
        <img src="../../assets/img/banner.png" alt="" class="banner">
        <div class="nav">
            <router-link to="/Home/special" class="nav-item">
                <img src="../../assets/img/nav1.png" alt="">
                <p>专题展</p>
            </router-link>
            <router-link to="/Home/organization" class="nav-item">
                <img src="../../assets/img/nav2.png" alt="">
                <p>组织展</p>
            </router-link>
            <router-link to="/Home/project" class="nav-item">
                <img src="../../assets/img/nav3.png" alt="">
                <p>项目展</p>
            </router-link>
            <router-link to="/Home/charitable" class="nav-item">
                <img src="../../assets/img/nav4.png" alt="">
                <p>慈善展</p>
            </router-link>
        </div>
        <div class="schedule">
            <h3 class="title">日程安排</h3>
            <div style="overflow-x: scroll;">
                <div class="schedule-list bx-content">
                    <div class="schedule-item active schedule-item1">
                        <p>09月15日</p>
                        <p class="active">发布通知开始招募</p>
                    </div>
                    <div class="schedule-item bottom active schedule-item2">
                        <p>10月30日</p>
                        <p class="active">停止报名</p>
                    </div>
                    <div class="schedule-item schedule-item3"
                         :class="{active:width==='55%'||width==='70%'||width==='80%'||width==='95%'}">
                        <p>11月09日</p>
                        <p class="active">确定参展名单</p>
                    </div>
                    <div class="schedule-item bottom schedule-item4"
                         :class="{active:width==='55%'||width==='70%'||width==='80%'||width==='95%'}">
                        <p>11月09日</p>
                        <p class="active">制作微店</p>
                    </div>
                    <div class="schedule-item schedule-item5"
                         :class="{active:width==='70%'||width==='80%'||width==='95%'}">
                        <p>11月13日</p>
                        <p class="active">微店展示</p>
                    </div>
                    <div class="schedule-item bottom schedule-item6" :class="{active:width==='80%'||width==='95%'  }">
                        <p>11月16日</p>
                        <p class="active">开幕式</p>
                    </div>
                    <div class="schedule-item schedule-item7" :class="{active:width==='95%'}">
                        <p>11月25日</p>
                        <p class="active">闭幕式</p>
                    </div>
                    <div class="jindu" :style="'width:'+ width "></div>
                </div>
            </div>
        </div>
        <div class="video">
            <h3 class="title">直播厅</h3>
            <div class="video-list">
                <div class="video-item" @click="showVideo('http://gyhfile.shzzfw.com/20201031%E5%8C%97%E4%BA%AC%E5%85%AC%E7%9B%8A%E6%85%88%E5%96%84%E6%B1%87%E5%B1%95%E5%AE%A3%E4%BC%A0%E7%89%87-1102-2ok.mp4')">
                    <img src="../../assets/img/video2.png" alt="">
                    <p><i class="iconfont iconshipin"></i> 汇展宣传</p>
                </div>
                <div class="video-item" @click="showVideo('http://gyhfile.shzzfw.com/20201031%E5%8C%97%E4%BA%AC%E5%85%AC%E7%9B%8A%E6%85%88%E5%96%84%E6%B1%87%E5%B1%95%E5%AE%A3%E4%BC%A0%E7%89%87-1102-2ok.mp4')">
                    <img src="../../assets/img/video1.png" alt="">
                    <p><i class="iconfont iconkaimushi"></i> 开幕仪式</p>
                </div>
                <router-link class="video-item" to="/Home/forum">
                    <img src="../../assets/img/video3.png" alt="">
                    <p><i class="iconfont iconrenyuan"></i> 前沿论坛</p>
                </router-link>
                <router-link class="video-item" to="/Home/project">
                    <img src="../../assets/img/video4.png" alt="">
                    <p><i class="iconfont iconhezuo"></i> 项目推介</p>
                </router-link>
            </div>
        </div>
        <van-overlay :show="show">
            <video
                    :src="videos"
                    controls poster="../../assets/img/cishan.jpg" class="mode-video"></video>
            <van-button class="close-btn" @click="hideVideo">关闭</van-button>
        </van-overlay>
    </div>
</template>

<script>
    import {getTime} from "@/api/special";

    export default {
        name: "index",
        data() {
            return {
                width: '',
                videos:'',
                show:false
            }
        },
        created() {
            this.init()
        },
        methods: {
            async init() {
                let _data = await getTime()
                let _time = _data.data
                let _time1 = 1604851200
                let _time2 = 1605196800
                let _time3 = 1605456000
                let _time4 = 1606233600
                if (_time < _time1) {
                    this.width = '30%'
                } else if (_time > _time1 && _time < _time2) {
                    this.width = '55%'
                } else if (_time > _time2 && _time < _time3) {
                    this.width = '70%'
                } else if (_time > _time3 && _time < _time4) {
                    this.width = '80%'
                } else {
                    this.width = '95%'
                }
            },
            showVideo(str){
                this.videos = str
                this.show = true
            },
            hideVideo(){
                this.videos = '';
                this.show = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .warpper-index {
        background: #f1f1f1;
        .mode-video {
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
        }
        .close-btn {
            position: fixed;
            top: 70%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50%;
            background: #c70005;
            color: #fff;
            border: 0;
        }
        .banner {
            display: block;
            width: 100%;
        }

        .nav {
            display: flex;
            align-items: center;
            justify-content: space-around;
            padding: 20px;
            background: #fff;
            margin-bottom: 15px;

            .nav-item {
                display: block;
                width: 150px;

                img {
                    display: block;
                    width: 100%;
                }

                p {
                    text-align: center;
                    font-size: 28px;
                    color: #333333;
                }
            }
        }

        .schedule {
            background: #fff;
            margin-bottom: 15px;
            overflow: hidden;

            .title {
                width: 150px;
                text-align: center;
                line-height: 64px;
                margin: 60px auto;
                font-size: 32px;
                font-weight: bold;
                letter-spacing: 3px;
                color: #333333;
                border-bottom: 3px solid #f5b400;
            }

            .schedule-list {
                width: 1600px;
                height: 265px;
                padding-bottom: 40px;
                border-radius: 20px;
                position: relative;

                &:before {
                    position: absolute;
                    top: 107px;
                    left: 0;
                    content: '';
                    width: 100%;
                    height: 11px;
                    background: #ffebb2;
                }

                .schedule-item {
                    position: absolute;
                    width: 220px;
                    height: 60px;

                    &.schedule-item1 {
                        top: 30px;
                        left: 100px;
                    }

                    &.schedule-item2 {
                        top: 150px;
                        left: 300px;
                    }

                    &.schedule-item3 {
                        top: 30px;
                        left: 500px;
                    }

                    &.schedule-item4 {
                        top: 150px;
                        left: 700px;
                    }

                    &.schedule-item5 {
                        top: 30px;
                        left: 900px;
                    }

                    &.schedule-item6 {
                        top: 150px;
                        left: 1100px;
                    }

                    &.schedule-item7 {
                        top: 30px;
                        left: 1300px;
                    }

                    &:after {
                        position: absolute;
                        left: 50%;
                        bottom: -33px;
                        transform: translate(-50%, 0);
                        content: '';
                        width: 18px;
                        height: 18px;
                        border-radius: 11px;
                        background: #fff;
                        border: 1px solid #ffebb2;
                    }

                    &.bottom:after {
                        left: 50%;
                        top: -48px;
                        bottom: unset;
                    }

                    &.active:after {
                        background: #e2412e;
                        border: 1px solid #e2412e;
                    }

                    p {
                        line-height: 30px;
                        font-size: 16px;
                        color: #999999;
                        text-align: center;

                        &.active {
                            line-height: 30px;
                            font-size: 18px;
                            color: #e2412e;
                            text-align: center;

                        }
                    }
                }

                .jindu {
                    position: absolute;
                    top: 107px;
                    left: 0;
                    content: '';
                    height: 11px;
                    background: #e2412e;
                }
            }
        }

        .video {
            background-image: linear-gradient(-90deg,
                    #e2412e 0%,
                    #ffc683 100%);
            margin-bottom: 15px;
            overflow: hidden;

            .title {
                width: 150px;
                line-height: 64px;
                margin: 30px auto;
                font-size: 32px;
                text-align: center;
                font-weight: bold;
                letter-spacing: 3px;
                color: #fff;
                border-bottom: 3px solid #f5b400;
            }

            .video-list {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 40px;

                .video-item {
                    display: block;
                    width: 315px;
                    margin-bottom: 20px;

                    img {
                        display: block;
                        width: 315px;
                    }

                    p {
                        line-height: 60px;
                        font-size: 30px;
                        font-weight: bold;
                        text-align: center;
                        color: #fff;
                    }
                }
            }
        }
    }
</style>