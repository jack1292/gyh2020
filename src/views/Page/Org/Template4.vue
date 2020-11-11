<template>
    <div class="warpper">
        <div class="org-logo">
            <div>
                <img :src="apply_info.logo_url" alt="" v-if="apply_info.logo_url">
                <p>{{ userinfo.name }}</p>
            </div>
        </div>
        <div class="banner">
            <div class="title">
                机构简介
            </div>
            <div class="menu">
                <div class="img">
                    <img :src="organization[0].img_url" alt="">
                </div>
                <div class="BannerBox">
                    <div class="bannerBtn1">
                        <img src="../../../assets/img/wenziqiashang4.png" alt="">文字<br>洽商
                    </div>
                    <a :href="'tel:'+apply_info.phone" class="bannerBtn1">
                        <img src="../../../assets/img/yijiantonghua4.png" alt="">一键<br>通话
                    </a>
                    <div class="bannerBtn1" @click="toShare">
                        <img src="../../../assets/img/yijianzhuanfa4.png" alt="">一键<br>转发
                    </div>
                </div>
            </div>
            <div class="org-desc">
                <p>{{ userinfo.name }} ，
                    {{ userinfo.chengli_time }} 在 {{ userinfo.administration }} 登记成立，
                  <span v-if="userinfo.registered_capital">注册资金 {{ userinfo.registered_capital }} 元，</span>
                    法定代表人/负责人是 {{ userinfo.legal_person }} 。
                    秘书处位于 {{ apply_info.secretariat_address }} ，
                    现有专职 {{ apply_info.major_num }} 人，
                    党员 {{ apply_info.party_num }} 人
                    <span v-if="apply_info.party_name">，成立有 {{ apply_info.party_name }}</span> 。
                    <span v-if="userinfo.examine">经 {{ userinfo.examine }} 评定，评估等级为 {{ userinfo.level
                        }} 级，有效期为{{ userinfo.end_time }}。</span>
                    <span v-for="(item,index) in userinfo.year.length" :key="item">
            <i v-if="userinfo.conclusion[index]">{{ userinfo.year[index] }}年度年检（年报）结论为 {{ userinfo.conclusion[index]
                }} ，</i>
          </span>
                    业务范围包括{{ userinfo.range }}
                    <span v-if="project_info.length>0">高质量完成 {{project_info[0].entry_name}} 等项目；</span>
                    <span v-if="honor.length>0">曾获得 {{ honor[0].honor_name }} 等荣誉表彰。</span>
                    联系人：{{apply_info.contacts}} ，
                    联系电话：{{apply_info.phone}} ，
                    邮箱： {{apply_info.email}}。</p>

            </div>
        </div>


        <div style="height: 10px;background: #f5f5f5;"></div>

        <div class="org-project" v-if="project_info.length !== 0">
            <div class="title">
                项目展示
            </div>
            <div class="org-project-list">
                <router-link :to="'/Content/projectDetail?id='+item.id"  class="org-project-item" :class="{active:project_info.length % 2 ===1 && index === 0}"
                     v-for="(item,index) in project_info" :key="index">
                    <img class="item-image" :class="{active:project_info.length % 2 ===1 && index === 0}"
                         :src="item.xiangmu_kaizhan_img[0]"/>
                    <div class="item-title ovHide" :class="{active:project_info.length % 2 ===1 && index === 0}">
                        {{item.entry_name}}
                    </div>
                    <img class="item-tag" src="../../../assets/img/img_tuijian.png" v-if="item.instructions"/>
                </router-link>
            </div>
        </div>


        <div style="height: 10px;background: #f5f5f5;"></div>

        <div class="mien-project" v-if="organization.length !== 0">
            <div class="title">
                风采展示
            </div>
            <div class="org-project-list">
                <swiper class="swiper" :options="swiperOptionTop" ref="swiperTop">
                    <swiper-slide class="swiper-slide " v-for="(item,index) in organization" :key="index">
                        <div class="org-project-item active">
                            <img class="item-image" :src="item.img_url"/>
                            <div class="item-title ovHide">
                                {{item.title}}
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                </swiper>
                <swiper class="swiper" :options="swiperOptionThumbs" ref="swiperThumbs">
                    <swiper-slide class="swiper-slide active" v-for="(item,index) in organization" :key="index">
                        <div class="org-project-item">
                            <img class="item-image" :src="item.img_url"/>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <div style="height: 10px;background: #f5f5f5;"></div>

        <div class="contact-us">
            <div class="title">
                联系我们
            </div>
            <div class="item-container">
                <img class="item-img" src="../../../assets/img/img_lianxiren4.png"/>
                <div class="item-content">
                    <div class="item-tag">联系人：<span class="item-title">{{apply_info.contacts}}</span></div>
                    <div class="item-tag margin-top-sm">联系电话：<span class="item-title">{{apply_info.phone}}</span></div>
                </div>
            </div>
            <div class="item-container">
                <img class="item-img" src="../../../assets/img/img_address4.png"/>
                <div class="item-content">
                    <div class="item-tag">联系地址</div>
                    <div class="item-title margin-top-sm">{{ apply_info.secretariat_address }}</div>
                </div>
            </div>
        </div>
        <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="srcList"
                           @change="onChange">
            <template class="title" v-slot:cover>{{previewTitle}}</template>
        </van-image-preview>
        <share :showShare="showShare" @setShare="setShare"></share>
    </div>
</template>

<script>
    import {getInstitutionInfo} from '@/api'
    import Share from "../../Components/Share.vue";

    export default {
        components: {Share},
        name: "Template4",
        data() {
            return {
                userinfo: {
                    "phone": '',
                    "name": '',
                    "chengli_time": '',
                    "administration": '',
                    "legal_person": '',
                    "manage_depart": '',
                    "registered_capital": '',
                    "range": '',
                    "level": '',
                    "end_time": '',
                    "examine": '',
                    "conclusion": "",
                    "year": "",
                    "regist_no": "",
                    "unified_code": '',
                    "org_type": '',
                    "business_unit": '',
                    "registration_status": "正常",
                    "address": '',
                    "create_time": '',
                    "shop_id": '',
                },
                apply_info: {
                    "user_id": '',
                    "contacts": '',
                    "website": '',
                    "email": '',
                    "shenbao_phone": '',
                    "assets": '',
                    "expenditure": '',
                    "is_dishonesty": '',
                    "is_punish": '',
                    "is_investigation": '',
                    "legal_person_img": '',
                    "level_img": '',
                    "desc": '',
                    "secretariat_address": '',
                    "major_num": '',
                    "party_num": '',
                    "party_name": '',
                    "logo_url": '',
                },
                project_info: [],
                organization: [],
                honor: [],
                srcList: [],
                startPosition: 0,
                previewTitle: '',
                show: false,
                swiperOptionTop: {
                    loop: false,
                    loopedSlides: 3, // looped slides should be the same
                    spaceBetween: 5,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                },
                swiperOptionThumbs: {
                    loop: false,
                    // 默认选中中间一张
                    centeredSlides: true,
                    //自动轮播
                    autoplay: {
                        delay: 3000,
                        //当用户滑动图片后继续自动轮播
                        disableOnInteraction: false,
                        stopOnLastSlide: false
                    },
                    loopedSlides: 3, // looped slides should be the same
                    spaceBetween: 5,
                    slidesPerView: 'auto',
                    touchRatio: 0.2,
                    slideToClickedSlide: true
                },
                showShare: false
            }
        },
        created() {
            if (this.$route.query.id) {
                this.getInstitutionInfo()
            }

        },
        methods: {
            async getInstitutionInfo() {

                let _data = await getInstitutionInfo(this.$route.query.id)
                this.userinfo = _data.data.userinfo
                this.apply_info = _data.data.apply_info
                this.project_info = _data.data.project_info
                this.organization = _data.data.organization
                this.honor = _data.data.honor

                if (this.organization.length > 0) {
                    this.organization.map(item => {
                        this.srcList.push(item.img_url)
                    })
                }
                this.project_info.map(item => {
                    item.xiangmu_kaizhan_img = item.xiangmu_kaizhan_img.split(',')
                })

                this.userinfo.conclusion = this.userinfo.conclusion ? this.userinfo.conclusion.split(';') : []
                this.userinfo.year = this.userinfo.year ? this.userinfo.year.split(';') : []
                this.$nextTick(() => {
                    console.log(this.$refs)
                    const swiperTop = this.$refs.swiperTop.$swiper
                    const swiperThumbs = this.$refs.swiperThumbs.$swiper
                    swiperTop.controller.control = swiperThumbs
                    swiperThumbs.controller.control = swiperTop
                })

                this.swiperOptionThumbs.loop = this.organization.length > 2
                this.swiperOptionTop.loop = this.organization.length > 2
            },
            toMienPreview(index) {
                this.startPosition = index
                this.show = true
                console.log(this.organization[index])
                this.previewTitle = this.organization[index].title
//          this.toPreview(,index)
            },
            onChange(index) {
                this.previewTitle = this.organization[index].title
                this.startPosition = index;
            },
            toShare() {
                this.showShare = true
            },
            setShare(state){
                this.showShare = state
            }
        },
        mounted() {
            this.$nextTick(() => {
//                console.log(this.$refs)
//                const swiperTop = this.$refs.swiperTop.$swiper
//                const swiperThumbs = this.$refs.swiperThumbs.$swiper
//                swiperTop.controller.control = swiperThumbs
//                swiperThumbs.controller.control = swiperTop
            })
        }
    }
</script>

<style scoped lang="scss">

    .warpper {
        .title {
            text-align: center;
            background: url("../../../assets/img/img_temp_line_4.png") no-repeat;
            background-size: 100%;
            width: 100%;
            height: 90px;
            line-height: 90px;
            font-size: 38px;
            color: #ffffff;
        }
        background: #ffffff;
        min-height: 100vh;
        padding: 1px 0;
        .org-logo {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 120px;
            padding: 0 20px;
            background-color: white;
            div {
                display: flex;
                align-items: center;
                img {
                    width: 100px;
                    height: 100px;
                    margin-right: 20px;
                    border-radius: 100px;
                    border: 1px solid #fff100;
                    object-fit: scale-down;
                }
                p {
                    flex: 1;
                    font-size: 36px;
                    font-weight: bold;
                    color: #333333;
                }
            }
        }
        .banner {
            .org-desc {
                background: #fff;
                padding: 30px;
                margin-bottom: 20px;
                p {
                    font-size: 30px;
                    line-height: 160%;
                }

            }
            .menu {
                width: 100%;
                display: flex;
                padding: 30px;
                .img{
                    width: 458px;
                    height: 343px;
                    background-color: #ffffff;
                    border-radius: 12px;
                    border: solid 3px #ff7200;
                    > img {
                        width: 450px;
                        height: 100%;
                        border-radius: 12px;
                        object-fit: scale-down;
                    }
                }

                .BannerBox {
                    width: 100%;
                    height: 343px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    margin-left: 30px;
                    .bannerBtn1 {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 202px;
                        height: 102px;
                        border-radius: 12px;
                        border: solid 2px #ff7200;
                        cursor: pointer;
                        color: #333333;
                        font-size: 26px;
                        text-align: center;

                        img {
                            margin-right: 12px;
                            display: block;
                            width: 60px;
                            height: 60px;

                        }
                    }
                }
            }
        }

        .contact-us {
            background: #fff;

            .item-container {
                display: flex;
                flex-direction: row;
                height: 200px;
                background-color: #ffffff;
                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.32);
                border-radius: 12px;
                align-items: center;
                margin: 12px 30px 36px;
                .item-img {
                    flex-shrink: 0;
                    margin-left: 40px;
                    margin-right: 22px;
                    width: 89px;
                    height: 89px;
                }
                .item-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .item-tag {
                        font-size: 24px;
                        color: #666666;
                    }
                    .item-title {
                        font-size: 30px;
                        color: #333333;
                    }
                }
            }
            .title {
                margin-bottom: 60px;
                text-align: center;
                img {
                    height: 64px;
                    width: auto;
                }
            }
        }
        .mien-project {
            background: #fff;
            .org-project-list {
                display: flex;
                flex-direction: column;
                padding-right: 30px;
                padding-left: 30px;
                .swiper-button-white {
                    width: 60px;
                    height: 60px;
                    background-color: #00000066;
                    opacity: 0.8;
                    border-radius: 60px;
                }
                .swiper {
                    width: 690px;
                    margin-top: 25px;
                    min-height: 210px;
                    .swiper-slide {
                        width: 226px;
                        height: 150px;
                        width: 100%;
                        height: 461px;
                        &.active {
                            width: 226px;
                            height: 150px;

                            &.swiper-slide {
                                /*box-shadow: 0px 4px 10px 0px rgba(148, 148, 148, 0.35);*/
                            }
                            &.swiper-slide-active {
                                border: solid 3px #ff7200;
                            }
                        }
                        .org-project-item {
                            display: flex;
                            flex-direction: column;
                            position: relative;
                            overflow: hidden;
                            width: 100%;
                            height: 100%;
                            /*&.select{*/
                            /*box-shadow: 0px 4px 10px 0px*/
                            /*rgba(148, 148, 148, 0.35);*/
                            /*}*/

                            .item-image {
                                object-fit: scale-down;
                                width: 100%;
                                height: 100%;
                            }
                            .item-tag {
                                width: 160px;
                                height: 160px;
                                position: absolute;
                                right: -36px;
                                top: -36px;
                            }
                            .item-title {
                                width: 100%;
                                height: 41px;
                                position: absolute;
                                bottom: 0;
                                right: 0;
                                line-height: 41px;
                                text-align: center;
                                background-color: #00000066;
                                font-size: 18px;
                                color: #ffffff;
                                &.active {
                                    height: 68px;
                                    line-height: 68px;
                                    font-size: 24px;
                                }
                            }
                        }
                    }
                }
            }
            .title {
                text-align: center;
                margin-bottom: 30px;
                img {
                    height: 64px;
                    width: auto;
                }
            }
        }
        .org-project {
            .org-project-list {
                padding: 10px 15px;
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                .org-project-item {
                    margin-left: 15px;
                    margin-right: 15px;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    width: 330px;
                    &.active {
                        width: 690px;
                    }
                    .item-image {
                        object-fit: scale-down;
                        height: 225px;
                        &.active {
                            height: 424px;
                        }
                    }
                    .item-tag {
                        width: 160px;
                        height: 160px;
                        position: absolute;
                        right: -36px;
                        top: -36px;
                    }
                    .item-title {
                        width: 100%;
                        height: 62px;
                        padding-left: 12px;
                        padding-right: 12px;
                        line-height: 62px;
                        font-size: 24px;
                        text-align: center;
                        color: #333333;
                        &.active {
                            height: 78px;
                            line-height: 78px;
                        }
                    }
                }

            }
            .title {
                margin-bottom: 30px;
                text-align: center;
                img {
                    height: 64px;
                    width: auto;
                }
            }
        }
    }
</style>