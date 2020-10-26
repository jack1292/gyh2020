<template>
    <div class="warrper">
        <div class="video-container">
            <div class="video-title">
                <div class="chinese">宣传片</div>
                <div class="eng">ADVERTISING<br/>VIDEO</div>
            </div>
            <video class="video" controls src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"></video>
        </div>
        <div class="desc">
            党的十九大报告中先后5次提到了社会组织，指出要推
            动社会治理重心向基层下移，发挥社会组织作用，实现政府
            治理和社会调节、居民自治良性互动，这为社会组织的发展
            指明了新的方向，提出了新的要求。社会组织已成为新时期
            国家治理体系和治理能力现代化的重要主体之一，是我国经
            济、社会发展过程中承上启下、不可缺失的“黏合层”，其
            作用不可忽视。
            科技类社会组织是从事与科技发展相关的工作与活动，
            能够促进科技与经济结合、助力自主创新的社会组织。科技
            类社会组织所具备的“专业性”和“社会性”特征，使其在
            科技创新中心建设过程中能够填补政府和市场能力空缺，成
            为科技创新中心建设的重要参与者和创新体系的重要组成
            部分。
            作为政策的传递者、科学知识的普及者、社会服务的提
            供者，北京市科技类社会组织秉持围绕中心、发挥优势、突
            出主题、服务民众的宗旨，在传播教育健康科普知识、满足
            居民多元教育健康需求、助力建设国际一流的和谐宜居之都
            等方面，发挥积极作用。将其内化为居民的自我健康意识，
            自我防范意识，唤起自我管理的主动性。
            北京社会组织将继续在更大范围、以更多频次、用更新
            形式普及科技创新知识，聚焦居民急需关注、忧心担心，举
            办更多公益慈善活动。        </div>
        <div class="classify-title">
            社会组织风采
        </div>
        <img class="mine-img" :src="curImg" />
        <swiper class="swiper" :options="swiperOption" ref="mySwiper">
            <swiper-slide class="swiper-slide" v-for="(item,index) in list" :key="index">
                <div class="mine-item">
                    <img class="item-image" :src="item.url"/>
                </div>
            </swiper-slide>

            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
        </swiper>
        <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="srcList"
                           @change="onChange">
            <template class="preview-title" v-slot:cover>{{previewTitle}}</template>
        </van-image-preview>
    </div>
</template>

<script>
    export default {
        name: "special7",
        data() {
            return {
                list: [{
                    title: '北京社会组织党建',
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3443714613,873961460&fm=26&gp=0.jpg'
                }, {
                    title: '北京社会组织党建',
                    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1900339476,2516985817&fm=26&gp=0.jpg'
                }, {
                    title: '北京社会组织党建',
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2346282507,2171850944&fm=26&gp=0.jpg'
                },{
                    title: '北京社会组织党建',
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603426606284&di=52e1e500c7e9a856d2076b89687818d5&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
                }],
                srcList: [],
                startPosition: 0,
                previewTitle: '',
                mineTitle: '',
                show: false,
                curImg:'',
                swiperOption: {
                    //可见图片张数
                    slidesPerView:4,
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
            }
        },
        created() {
            this.srcList = this.list.map(item => {
                return item.url
            })
            let that = this
            that.curImg = that.list[0].url
            that.swiperOption.on = {
                slideChange() {
                    let swiper = that.$refs.mySwiper.$swiper;
                    that.curImg = that.list[swiper.realIndex].url
                },
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
    .warrper {
        background: url("../../../assets/img/bg_special8.png") no-repeat;
        background-size: 100% auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 279px;
        padding-bottom: 60px;
        .video-container {
            width: 701px;
            height: 645px;
            background-image: linear-gradient(108deg,
                    #011a8b 0%,
                    #0065b6 100%);
            border-radius: 12px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .video-title {
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 190px;
                padding-left: 62px;
                align-items: center;
                .eng {
                    font-size: 28px;
                    color: #ebebeb;
                    opacity: 0.18;
                    margin-left: 20px;
                }
                .chinese {
                    font-size: 67px;
                    font-weight: bold;
                    color: #ffffff;
                }
            }
            .video {
                width: 673px;
                height: 448px;
                background-color: #1f3d7b;
                border-radius: 8px;
                margin-bottom: 20px;
            }
        }

        .classify-title {
            font-size: 38px;
            font-weight: bold;
            color: #333333;
            margin-top: 20px;
        }
        .desc {
            background: url("../../../assets/img/special_desc8.png") no-repeat;
            background-size: 100% 100%;
            margin: 60px 20px;
            padding: 95px 65px;
            font-size: 28px;
            line-height: 44px;
            color: #333333;
            text-align: justify;
        }
        .mine-img{
            width: 585px;
            height: 343px;
            background-color: #1f3d7b;
            border-radius: 12px;
            margin-top: 50px;
        }
        .swiper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 80%;
            padding: 30px;
            margin: 0 30px;
            .swiper-button-prev,.swiper-button-next{
                width: 56px;
                height: 56px;
                background-color: #000000;
                opacity: 0.8;
                border-radius: 60px;
            }
            .swiper-slide {
                width: 133px;
                height: 100px;
                .mine-item {
                    width: 133px;
                    height: 100px;
                    .item-image {
                        object-fit: scale-down;
                        width: 133px;
                        height: 100px;
                    }
                }
            }
        }
    }
</style>