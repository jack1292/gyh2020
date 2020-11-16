<template>
    <div class="charitable-warpper">
        <div class="charitable-video" v-if="videos.length > 0">
            <video class="video-content" :src="videos[curIndex].url" controls :poster="videos[curIndex].img"
                   v-if="videos[curIndex].url"></video>
            <img class="video-content" src="../../assets/img/cishan.jpg" v-else>
            <div class="charitable-title">{{videos[curIndex].title}}</div>
            <div class="video-preview">
                <img class="preview-image" :class="{active:curIndex === index}" v-for="(item,index) in videos"
                     :key="index" :src="item.img" @click="curIndex = index"/>
            </div>
        </div>

        <!--<video-->
                <!--src="http://gyhfile.shzzfw.com/%E6%85%88%E5%96%84%E7%BB%BC%E5%90%88%E7%89%8720201027.mp4"-->
                <!--type="video/mp4"-->
                <!--controls poster="" class="charitable-video"></video>-->

        <div class="charitable-other">
            <router-link to="scl" class="charitable-other-item">
                <img src="../../assets/img/csbj.png" alt="">
            </router-link>
            <router-link to="fl" class="charitable-other-item">
                <img src="../../assets/img/fnlhh.png" alt="">
            </router-link>
            <!--<router-link to="/Contentn/shizihui" class="charitable-other-item">-->
            <!--<img src="../../assets/img/hongshizihui.png" alt="">-->
            <!--</router-link>-->
        </div>

        <div class="organization">
            <div class="title">慈善组织奖</div>
            <div class="organization-list">
                <router-link :to="'charitableDetail?id='+item.id" v-for="(item,index) in organization" :key="index"
                             class="organization-item" :class="{active:index>2}">
                    <img :src="item.thumb" alt="">
                    <p class="ovHide">{{ item.title }}</p>
                </router-link>
            </div>
        </div>
        <div class="enterprise">
            <div class="title">爱心企业奖</div>
            <div class="enterprise-list">
                <router-link :to="'charitableDetail?id='+item.id" v-for="(item,index) in enterprise" :key="index"
                             class="enterprise-item" :class="{active:index>2}">
                    <img :src="item.thumb" alt="">
                    <p class="ovHide">{{ item.title }}</p>
                </router-link>
            </div>
        </div>
        <div class="personal">
            <div class="title">慈善个人奖</div>
            <div class="personal-list">
                <router-link :to="'charitableDetail?id='+item.id" v-for="(item,index) in personal" :key="index"
                             class="personal-item">
                    <img :src="item.thumb" alt="">
                    <p class="ovHide">{{ item.title }}</p>
                </router-link>
            </div>
        </div>
        <router-link to="csf" class="img-link">
            <img src="../../assets/img/a2.png" alt="">
        </router-link>
        <a href="http://www.bca.org.cn/web/article/402881225914c395015914c4e7f00000/402881225914c395015914f441180029/0/index.html"
           target="_blank" class="img-link active">
            <img src="../../assets/img/a1.png" alt="">
        </a>

        <van-overlay :show="show">
            <video
                    :src="videos"
                    controls poster="../../assets/img/cishan.jpg" class="mode-video"></video>
            <van-button class="close-btn" @click="hideVideo">关闭</van-button>
        </van-overlay>

    </div>
</template>

<script>
    import {getCharitable} from "@/api";
    import config from '@/config'

    export default {
        name: "charitable",
        data() {
            return {
                organization: [],
                enterprise: [],
                personal: [],
                videos: [
                    {
                        title: '2020年首都慈善奖宣传片',
                        img:'http://shzzpt.org.cn/web/assets/img/csFeng.png',
                        url: 'http://gyhfile.shzzfw.com/%E6%85%88%E5%96%84%E7%BB%BC%E5%90%88%E7%89%8720201027.mp4'
                    },
                    {
                        title: '各区慈善工作亮点巡礼',
                        img:'http://shzzpt.org.cn/web/assets/img/xuli.jpg',
                        url: 'http://gyhfile.shzzfw.com/16%E5%90%84%E5%8C%BA%E6%85%88%E5%96%84%E5%B7%A5%E4%BD%9C%E4%BA%AE%E7%82%B9%E5%B7%A1%E7%A4%BC.mp4'
                    },
                    {
                        title: '慈善无界 大爱长存',
                        img:'http://shzzpt.org.cn/web/assets/img/daai.jpg',
                        url: 'http://gyhfile.shzzfw.com/991d9ff405b5fc8f205c7e33c50666517b472d815f001b9073cc428c4543006a51d384d639adf6c66e45a6f398857230d1507630c019d3ab828c4e34321f69be.mp4'
                    }
                ],
                curIndex: 0,
                show: false
            }
        },
        created() {
            this.init()
        },
        methods: {
            async init() {
                let _data = await getCharitable()
                this.organization = _data.data.first
                this.enterprise = _data.data.second
                this.personal = _data.data.third
                this.organization.map(item => {
                    item.thumb = config.baseURL + item.thumb
                })
                this.enterprise.map(item => {
                    item.thumb = config.baseURL + item.thumb
                })
                this.personal.map(item => {
                    item.thumb = config.baseURL + item.thumb
                })
            },
            showVideo(str) {
                this.videos = config.baseURL + str
                this.show = true
            },
            hideVideo() {
                this.videos = '';
                this.show = false
            }
        }
    }
</script>

<style scoped lang="scss">
    .charitable-warpper {
        background: #f1f1f1;
        min-height: calc(100vh - 188px);

        .charitable-video {
            display: flex;
            flex-direction: column;
            .video-content {
                width: 100%;
            }
            .charitable-title {
                width: 750px;
                height: 89px;
                text-align: center;
                line-height: 89px;
                font-size: 28px;
                background-color: #ffffff;
                margin-bottom: 20px;
            }
            .video-preview {
                margin-top: 12px;
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                overflow-y: scroll;
                .preview-image {
                    width: 267px;
                    height: 155px;
                    margin-left: 12px;
                    &:first-child {
                        margin-left: 0;
                    }
                    &.active {
                        border: 4px solid #d50000;
                    }
                }
            }
        }
        .charitable-video {
            display: block;
            width: 100%;
        }

        .charitable-other {
            padding: 30px;
            background: #fff;
            margin-bottom: 20px;

            .charitable-other-item {
                display: block;
                margin-bottom: 20px;

                &:last-child {
                    margin-bottom: 0;
                }

                img {
                    display: block;
                    width: 100%;
                }
            }
        }

        .organization {
            background: #fff;
            margin-bottom: 20px;

            .title {
                padding: 20px 0;
                font-size: 36px;
                line-height: 50px;
                letter-spacing: 2px;
                color: #e2412e;
                text-align: center;
            }

            .organization-list {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 0 30px;

                .organization-item {
                    width: 224px;
                    margin-bottom: 20px;

                    &.active {
                        width: 336px;

                        img {
                            width: 336px;
                            height: 220px;
                        }
                    }

                    img {
                        width: 224px;
                        height: 147px;
                    }

                    p {
                        text-align: center;
                        padding: 0 10px;
                        font-size: 24px;
                        height: 63px;
                        line-height: 63px;
                    }
                }
            }
        }

        .enterprise {
            background: #fff;
            margin-bottom: 20px;

            .title {
                padding: 20px 0;
                font-size: 36px;
                line-height: 50px;
                letter-spacing: 2px;
                color: #e2412e;
                text-align: center;
            }
            .enterprise-list {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 0 30px;

                .enterprise-item {
                    width: 224px;
                    margin-bottom: 20px;

                    &.active {
                        width: 336px;

                        img {
                            width: 336px;
                            height: 220px;
                        }
                    }

                    img {
                        width: 224px;
                        height: 147px;
                    }

                    p {
                        text-align: center;
                        padding: 0 10px;
                        font-size: 24px;
                        height: 63px;
                        line-height: 63px;
                    }
                }
            }
        }

        .personal {
            background: #fff;
            margin-bottom: 20px;

            .title {
                padding: 20px 0;
                font-size: 36px;
                line-height: 50px;
                letter-spacing: 2px;
                color: #e2412e;
                text-align: center;
            }
            .personal-list {
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-wrap: wrap;
                padding: 0 30px;

                .personal-item {
                    width: 333px;
                    margin-bottom: 20px;
                    border: solid 1px #eeeeee;
                    overflow: hidden;

                    img {
                        width: 333px;
                        height: 333px;
                    }

                    p {
                        text-align: center;
                        padding: 0 10px;
                        font-size: 24px;
                        height: 63px;
                        background-color: #fdf6f6;
                        line-height: 63px;
                    }
                }
            }
        }

        .img-link {
            position: fixed;
            bottom: 120px;
            right: 0;
            &.active {
                bottom: 280px;
            }
            img {
                display: block;
                width: 180px;
                height: 180px;

            }
        }
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
    }
</style>