<template>
    <div class="warrper">
        <div class="container">
            <div class="desc-container">
                <div class="classify-title">
                    <div class="chinese">专题介绍///</div>
                    <div class="eng">SPECIAL INTRODUCTION</div>
                </div>
                <div class="desc">
                    北京是中国的首都，是与世界交流的窗口。在北京市委
                    的坚强领导下，全市文化类社会组织高举中国特色社会主义
                    伟大旗帜，深入学习贯彻习近平新时代中国特色社会主义思
                    想，认真贯彻落实党的十九大精神，坚持党的基本路线、基
                    本纲领、基本经验，坚持社会主义先进文化前进方向，坚持
                    文艺为人民服务、为社会主义服务的方向和“百花齐放、百
                    家争鸣”的方针，积极参与北京全国文化中心建设，扎实推
                    进基层公共文化服务工作，努力为群众提供丰富多彩的文化
                    生活，共同建设人民的精神家园，为推进全国文化中心建设、
                    实现中华民族伟大复兴的中国梦作出积极的贡献。               </div>
            </div>
            <div class="video-container">
                <img src="../../../assets/img/special_video10.png"/>
                <video class="video" controls src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"></video>
            </div>

            <div class="mine-container">
                <div class="classify-title">
                    <div class="chinese">社会组织风采///</div>
                    <div class="eng">SOCIAL ORGANIZATION STYLE</div>
                </div>
                <div class="mine-list">
                    <div class="mine-item" :class="{active:index===0}" v-for="(item,index) in list" :key="index" @click="toMienPreview(index)">
                        <img class="item-image" :class="{active:index===0}" :src="item.url"/>
                        <!--<div class="item-title">{{item.title}}</div>-->
                    </div>
                </div>
            </div>
        </div>
        <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="srcList"
                           @change="onChange">
            <template class="preview-title" v-slot:cover>{{previewTitle}}</template>
        </van-image-preview>
    </div>
</template>

<script>
    export default {
        name: "special10",
        data() {
            return {
                list: [{
                    title: '北京社会组织党建',
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603426606284&di=52e1e500c7e9a856d2076b89687818d5&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
                }, {
                    title: '北京社会组织党建',
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603426606284&di=52e1e500c7e9a856d2076b89687818d5&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
                }, {
                    title: '北京社会组织党建',
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603426606284&di=52e1e500c7e9a856d2076b89687818d5&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
                }],
                srcList: [],
                startPosition: 0,
                previewTitle: '',
                mineTitle: '',
                show: false,
            }
        },
        created() {
            this.srcList = this.list.map(item => {
                return item.url
            })
        },
        methods: {
            toMienPreview(index) {
                this.startPosition = index
                this.show = true
                this.previewTitle = this.list[index].title
            },
        }
    }
</script>

<style scoped lang="scss">
    .warrper {
        background: url("../../../assets/img/bg_special10.png") no-repeat;
        background-size: 100% auto;
        padding-top: 345px;
        padding-bottom: 60px;
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #ffffff55;
            border-radius: 12px;
            margin: 0 30px;
            padding: 30px 12px;
            .video-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                background-color: #0c9f77;
                margin-top: 36px;
                img {
                    width: 274px;
                    height: 130px;
                    margin-top: 50px;
                }
                .video {
                    width: 100%;
                    height: 425px;
                }
            }

            .classify-title {
                margin-top: 55px;
                margin-left: 31px;
                .eng {
                    font-size: 24px;
                    color: #ffffff;
                    margin-top: 20px;
                }
                .chinese {
                    font-size: 42px;
                    color: #ffffff;
                    font-weight: bold;
                }
            }
            .desc-container {
                background-color: #0c6c9fdd;
                .desc {
                    margin: 30px;
                    font-size: 28px;
                    line-height: 44px;
                    color: #ffffff;
                    text-align: justify;
                }
            }
            .mine-container {
                background-color: #b69308dd;
                margin-top: 36px;
                .mine-list {
                    display: flex;
                    padding: 10px;
                    flex-direction: row;
                    flex-wrap: wrap;
                    margin-top: 30px;
                    .mine-item {
                        display: flex;
                        flex-direction: column;
                        width: 303px;
                        margin: 10px;
                        &.active{
                            width: 621px;
                        }
                        .item-image {
                            object-fit: scale-down;
                            width: 303px;
                            height: 214px;
                            &.active{
                                width: 621px;
                                height: 459px;
                            }
                        }
                        .item-title {
                            padding-left: 9px;
                            font-size: 26px;
                            color: #000000;
                            width: 100%;
                            height: 49px;
                            text-align: center;
                            line-height: 49px;
                        }
                    }
                }
            }

        }

    }
</style>