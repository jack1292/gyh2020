<template>
    <div class="alleviation-warpper">

        <div class="alleviation-video" v-if="videos.length > 0">
            <video class="video-content" :src="videos[curIndex].url" controls :poster="videos[curIndex].image"
                   v-if="videos[curIndex].url"></video>
            <img class="video-content" :src="videos[curIndex].image" v-else>
            <div class="video-preview">
                <img class="preview-image" :class="{active:curIndex === index}" v-for="(item,index) in videos"
                     :key="index" :src="item.image" @click="curIndex = index"/>
            </div>
        </div>

        <div class="bank-container">
            <router-link to="bank?type=1" class="bank-item">
                <img class="bank-img" src="../../assets/img/sr.png">
                <div class="bank-content">
                    中国建设银行始终贯彻落实党中央、国务院扶贫要求，以帮助和田地区经济社会发展和贫困群众脱贫为己任。
                </div>
                <div  class="bank-more">查看更多</div>
            </router-link>
            <router-link to="bank?type=2" class="bank-item">
                <img class="bank-img" src="../../assets/img/dp.png">
                <div class="bank-content">
                    德朴农业将在重庆市扶贫办，重庆市人民政府驻北京办事处，北京重庆企业商会等有关领导的指导和支持下，社会各界爱心扶贫志愿者的共同参与和帮助下
                </div>
                <div class="bank-more">查看更多</div>
            </router-link>
        </div>

        <div class="area-list">
            <router-link :to="'goods?id='+(index+1)" class="area-item" v-for="(item,index) in areas" :key="index">
                <img class="area-img" :src="item.image"/>
                <div class="area-title">{{item.title}}</div>
            </router-link>
        </div>

        <div class="alleviation-box">
            <div class="alleviation-title">公益产品</div>
            <div class="alleviation-list">
                <div class="item-classify" v-for="(item,index) in list" :key="index">
                    <div class="classify" v-if="item.list.length>0" :style="'background-image: url(http://shzzpt.org.cn/web/assets/images/q'+ (index+12) +'.jpg);background-size: 150%;'">
                        <div class="classify-name">{{item.name}}
                        </div>
                        <router-link :to="'goods?id='+item.id" class="classify-more">查看更多</router-link>
                    </div>
                    <div class="goods-list">
                        <a :href="items.url" v-for="(items,indexs) in item.list" :key="indexs" class="alleviation-item"
                           target="_blank">
                            <div>
                                <img :src="items.image" alt="">
                            </div>
                            <p class="ovHide"><b>¥{{items.price}}</b>{{items.title}}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import {imageList, goodsList} from "@/api";

    export default {
        name: "alleviation",
        data() {
            return {
                list: [],
                videos: [],
                curIndex: 0,
                areas: [
                    {
                        title: '西藏拉萨馆',
                        image: 'http://shzzpt.org.cn/web/assets/images/q2.jpg'
                    },
                    {
                        title: '新疆馆',
                        image: 'http://shzzpt.org.cn/web/assets/images/q3.jpg'
                    },
                    {
                        title: '青海玉树馆',
                        image: ' http://shzzpt.org.cn/web/assets/images/q4.jpg'
                    },
                    {
                        title: '内蒙古馆',
                        image: ' http://shzzpt.org.cn/web/assets/images/q5.jpg'
                    },
                    {
                        title: '河南馆',
                        image: ' http://shzzpt.org.cn/web/assets/images/q6.jpg'
                    },
                    {
                        title: '河北保定馆',
                        image: 'http://shzzpt.org.cn/web/assets/images/q7.jpg'
                    },
                    {
                        title: '河北承德馆',
                        image: 'http://shzzpt.org.cn/web/assets/images/q8.jpg'
                    },
                    {
                        title: '河北张家口馆',
                        image: 'http://shzzpt.org.cn/web/assets/images/q9.jpg'
                    },
                    {
                        title: '湖北馆',
                        image: 'http://shzzpt.org.cn/web/assets/images/q10.jpg'
                    },
                    {
                        title: '湖北巴东馆',
                        image: 'http://shzzpt.org.cn/web/assets/images/q11.jpg'
                    }]
            }
        },
        created() {
            this.init()
        },
        methods: {
            async init() {
                let _data_video = await imageList()
                this.videos = _data_video.data

                let _data = await goodsList()
                this.list = _data.data
                console.log(this.list)
            },
        }
    }
</script>

<style scoped lang="scss">
    .alleviation-warpper {
        background: #f1f1f1;
        .alleviation-video {
            display: flex;
            flex-direction: column;
            .video-content {
                width: 100%;
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
        .bank-container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-top: 20px;
            width: 100%;
            .bank-item {
                width: 49%;
                display: flex;
                flex-direction: column;
                background: #ffffff;
                padding: 24px;
                .bank-more {
                    color: #e2412e;
                    font-size: 26px;
                    margin-top: 12px;
                    align-self: flex-end;
                }
                .bank-img {
                    height: 100px;
                    object-fit: scale-down;
                }
                .bank-content {
                    color: #666666;
                    font-size: 26px;
                    width: 100%;
                    margin-top: 15px;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
            }
        }
        .area-list {
            background: #ffffff;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            margin-top: 20px;
            .area-item {
                display: flex;
                width: 20%;
                height: 180px;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .area-img {
                    height: 100px;
                    object-fit: scale-down;
                }
                .area-title {
                    text-align: center;
                    font-size: 22px;
                    color: #666666;
                }
            }
        }
        .alleviation-box {
            background: #fff;
            margin-top: 20px;
            padding: 30px;
            .alleviation-title {
                font-size: 32px;
                line-height: 54px;
                font-weight: bold;
                color: #333333;
                padding-bottom: 30px;
            }
            .alleviation-list {
                display: flex;
                flex-direction: column;
                .item-classify {
                    display: flex;
                    flex-direction: column;
                    .classify {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        justify-content: space-between;
                        > img {
                            height: 40px;
                            object-fit: scale-down;
                        }
                        .classify-name {
                            background: #ffffff;
                            color: #e63520;
                            font-size: 26px;
                            font-weight: bold;
                            height: 40px;
                            margin-left: 30px;

                        }
                        .classify-more {
                            color: #e2412e;
                            font-size: 26px;
                            background: #ffffff;
                        }
                    }
                    .goods-list {
                        display: flex;
                        flex-direction: row;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        .alleviation-item {
                            display: block;
                            width: 334px;
                            margin: 30px 0;
                            background-color: #f8f0f0;
                            div {
                                display: flex;
                                align-items: center;
                                justify-content: space-around;
                                width: 334px;
                                height: 224px;
                                overflow: hidden;
                                img {
                                    display: block;
                                    width: 334px;
                                }
                            }
                            p {
                                height: 58px;
                                padding: 0 15px;
                                line-height: 58px;
                                font-size: 24px;
                                b {
                                    color: #e2412e;
                                    margin-right: 10px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>