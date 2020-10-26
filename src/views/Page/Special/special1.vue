<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="warrper">
        <video class="video" controls src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"></video>
        <div class="classify-title">专题简介</div>
        <div class="desc">
            社会组织是社会主义现代化建设的重要力量，是党的工
            作和群众工作的重要阵地。习近平总书记视察北京时强调，
            “看北京首先从政治上看”。加强社会组织党建是深入贯彻
            落实中央全面从严治党战略布局的重要政治任务。
            经过不断探索，北京市初步建成以市行业协会商会综合
            党委为领导核心，以联合党委为四梁八柱，以社会组织党支
            部为基层基础，以党建支持力量和各项保障机制为辅助的党
            建工作体系，基本实现了综合党委系统社会组织党的组织和
            工作全覆盖，社会组织党建“北京方案”取得显著成效。市
            行业协会商会综合党委成立以来，成立联合党委52个，覆
            盖市级社会组织2973家，管理服务党员5937名。全面加强
            制度建设，结合新时代北京社会组织党组织特点，制定20
            余项工作制度，从党委工作规则、党组织和党员管理、行业
            协会商会负责人审核、队伍建设、经费使用、教育培训、主
            题活动等方面加强规范，促成党建与业务融合的新局面。
            要继续强化党建基础保障，让北京社会组织党建“亮起
            来”。打造社会组织党组织坚强战斗堡垒，推动社会组织党
            组织和党员积极参与脱贫攻坚、疫情防控等行动，不断强化
            社会组织党建工作引领作用，不断完善党建扶持保障机制，
            积极营造社会组织党建氛围。让社会组织党组织党建工作有
            亮点，党员作用发挥有亮点，党建文化有亮点，真正使社会
            组织党建发挥政治引领作用，成为服务国家、服务首都、服
            务社会、服务居民的骨干力量。
        </div>
        <div class="classify-title">社会组织风采</div>
        <swiper class="swiper" :options="swiperOption" ref="mySwiper">
            <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
                <div class="mine-item">
                    <img class="item-image" :src="item.url"/>
                    <div class="item-title">{{item.title}}</div>
                </div>
            </swiper-slide>

            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <div class="mine-list">
            <div class="mine-item"  v-for="(item,index) in list" :key="index" @click="toMienPreview(index)">
                <img class="item-image" :src="item.url"/>
                <div class="item-title">{{item.title}}</div>
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
        name: "special1",
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
                srcList:[],
                swiperOption: {
                    //可见图片张数
                    slidesPerView: 2,
                    // 默认选中中间一张
                    centeredSlides: true,
                    //自动轮播
                    autoplay: {
                        delay: 3000,
                        //当用户滑动图片后继续自动轮播
                        disableOnInteraction: false,
                        stopOnLastSlide: false
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    //开启循环模式
                    loop: true,
                    on: {}
                },
                startPosition: 0,
                previewTitle: '',
                mineTitle: '',
                show: false,
            }
        },
        created() {
            let that = this
            this.srcList = this.list.map(item=>{
                return item.url
            })
            that.swiperOption.on = {
                click(e) {
                    console.log(e)
                    if (e.target.className === 'item-image') {
                        let swiper = that.$refs.mySwiper.$swiper;
                        that.toMienPreview(swiper.realIndex)
                    }
                }
            }
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
    .swiper-slide-active, .swiper-slide-duplicate-active {
        transform: scale(1.1);
        z-index: 1000;
    }

    .warrper {
        background: url("../../../assets/img/bg_special1.png") no-repeat;
        background-size: 100% auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        .preview-title{
            margin-top: 10px;
        }
        .video {
            width: 689px;
            height: 459px;
            border-radius: 12px;
            border: 5px solid #ffffff;
            margin-top: 327px;
        }
        .classify-title {
            font-size: 38px;
            -webkit-text-fill-color: #e11e15; /*文字的填充色*/
            -webkit-text-stroke: 1.5px #fff;
            font-weight: bold;
            margin-top: 50px;
        }
        .desc {
            width: 690px;
            background-color: #ffffff;
            font-size: 28px;
            line-height: 44px;
            color: #333333;
            border-radius: 12px;
            border: solid 2px #e11d14;
            padding: 61px 39px;
            margin-top: 33px;
            text-align: justify;
        }
        .mine-list {
            display: flex;
            padding: 20px;
            flex-direction: row;
            flex-wrap: wrap;
            .mine-item {
                width: 337px;
                height: 252px;
                position: relative;
                margin: 9px;
                .item-image {
                    object-fit: scale-down;
                    width: 337px;
                    height: 252px;
                }
                .item-title {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    text-align: center;
                    font-size: 26px;
                    color: #ffffff;
                    width: 100%;
                    height: 49px;
                    line-height: 49px;
                    background-color: #00000055;
                }
            }
        }

        .swiper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            min-height: 500px;
            margin-top: 10px;

            .swiper-button-prev,.swiper-button-next{
                width: 60px;
                height: 60px;
                background-color: #f5f5f555;
                border-radius: 60px;
            }
            .swiper-slide {
                display: flex;
                align-items: center;
                justify-content: center;
                .mine-item {
                    width: 535px;
                    height: 400px;
                    position: relative;
                    .item-image {
                        object-fit: scale-down;
                        width: 535px;
                        height: 400px;
                    }
                    .item-title {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        text-align: center;
                        font-size: 28px;
                        color: #ffffff;
                        width: 100%;
                        height: 52px;
                        line-height: 52px;
                        background-color: #00000055;
                    }
                }
            }
        }

    }
</style>