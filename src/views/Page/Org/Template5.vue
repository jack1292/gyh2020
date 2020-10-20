<template>
    <div class="warpper">
        <div class="org-logo">
            <div>
                <img :src="apply_info.logo_url" alt="" v-if="apply_info.logo_url">
                <p>{{ userinfo.name }}</p>
            </div>
        </div>
        <img class="line" src="../../../assets/img/img_temp_line_5.png"/>
        <div class="banner">
            <div class="title">
                <h3>机构简介</h3>
                <p>ORGANIZATION PROFILE</p>
            </div>
            <div class="bg">
                <img :src="organization[0].img_url" alt="">
            </div>

            <div class="org-desc">
                <p>{{ userinfo.name }} ，
                    于 {{ userinfo.chengli_time }} 在 {{ userinfo.administration }} 登记成立，
                    注册资金 {{ userinfo.registered_capital }} 元，
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
            <div class="BannerBox">
                <div class="bannerBtn1">
                    <img src="../../../assets/img/wenziqiashang5.png" alt="">文字<br>洽商
                </div>
                <div class="bannerBtn1">
                    <img src="../../../assets/img/yijiantonghua5.png" alt="">一键<br>通话
                </div>
                <div class="bannerBtn1">
                    <img src="../../../assets/img/yijianzhuanfa5.png" alt="">一键<br>转发
                </div>
            </div>
        </div>
        <div style="height: 5px;background: #f5f5f5;"></div>
        <img class="line" src="../../../assets/img/img_temp_line_5.png"/>

        <div class="org-project" v-if="project_info.length !== 0">

            <div class="org-project-list">
                <div class="org-project-tag" :class="{active:project_info.length % 2 === 0}">
                    <h3>项目展示</h3>
                    <p>PROJECT PRESENTATION</p>
                </div>
                <div class="org-project-item" v-for="(item,index) in project_info" :key="index">
                    <img class="item-image" :src="item.xiangmu_kaizhan_img[0]"/>
                    <div class="item-title ovHide">{{item.entry_name}}</div>
                    <img class="item-tag" src="../../../assets/img/img_tuijian.png" v-if="item.instructions"/>
                </div>
            </div>
        </div>
        <div style="height: 5px;background: #f5f5f5;"></div>
        <img class="line" src="../../../assets/img/img_temp_line_5.png"/>

        <div class="mien-project" v-if="organization.length !== 0">
            <div class="title">
                <h3>风采展示</h3>
                <p>STYLE DISPLAY</p>
            </div>
            <div class="org-project-list">
                <swiper :options="swiperOption" ref="mySwiper">
                    <swiper-slide class="swiper-slide" v-for="(item,index) in organization" :key="index">
                        <div class="org-project-item">
                            <img class="item-image" :src="item.img_url"/>
                        </div>
                    </swiper-slide>

                    <div class="swiper-button-next swiper-button" slot="button-next"></div>
                    <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
                </swiper>
                <div class="item-title">{{mineTitle}}</div>
            </div>
        </div>
        <div style="height: 5px;background: #f5f5f5;"></div>
        <img class="line" src="../../../assets/img/img_temp_line_5.png"/>

        <div class="contact-us">
            <div class="title">
                <h3>联系我们</h3>
                <p>CONTACT US</p>
            </div>
            <div class="item-container">
                <img class="item-img" src="../../../assets/img/img_lianxiren5.png"/>
                <div class="item-content">
                    <div class="item-tag">联系人：<span class="item-title">{{apply_info.contacts}}</span></div>
                    <div class="item-tag margin-top-sm">联系电话：<span class="item-title active">{{apply_info.phone}}</span>
                    </div>
                </div>
            </div>
            <div class="item-container">
                <img class="item-img" src="../../../assets/img/img_address5.png"/>
                <div class="item-content">
                    <div class="item-tag">联系地址</div>
                    <div class="item-title margin-top-sm active">{{ apply_info.secretariat_address }}</div>
                </div>
            </div>
        </div>
        <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="srcList"
                           @change="onChange">
            <template class="title" v-slot:cover>{{previewTitle}}</template>
        </van-image-preview>
    </div>
</template>

<script>
    import {getInstitutionInfo} from '@/api'

    export default {
        name: "Template5",
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
                mineTitle: '',
                show: false,
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
                }
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
                this.mineTitle = this.organization[0].title
                let that = this
                that.swiperOption.on = {
                    slideChange() {
                        let swiper = that.$refs.mySwiper.$swiper;
                        that.mineTitle = that.organization[swiper.realIndex].title
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
    .swiper-slide-active, .swiper-slide-duplicate-active {
        transform: scale(1.3);
        z-index: 1000;
    }

    .warpper {
        background: #ffffff;
        min-height: 100vh;
        padding: 1px 0;
        .line {
            width: 100%;
            height: auto;
        }
        .org-logo {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 120px;
            padding: 0 20px;
            div {
                display: flex;
                align-items: center;
                img {
                    display: block;
                    width: 100px;
                    margin-right: 20px;
                }
                p {
                    flex: 1;
                    font-size: 30px;
                    font-weight: bold;
                    color: #333333;
                }
            }
        }
        .banner {
            padding: 20px 0 0;
            .title {
                h3 {
                    font-size: 38px;
                    text-align: center;
                    line-height: 50px;
                    color: #2361b2;
                }
                p {
                    font-size: 20px;
                    text-align: center;
                    line-height: 40px;
                    font-weight: lighter;
                    color: #2361b2;
                    opacity: 0.4
                }
            }
            .bg {
                margin-top: 25px;
                background-image: url("../../../assets/img/img_temp_desc_bg_5.png");
                padding: 0 35px;
                height: 480px;
                > img {
                    width: 100%;
                    height: 516px;
                    margin-top: 30px;
                    object-fit: scale-down;
                    bbox-shadow: 0px 0px 10px 0px #2361b2;
                    border-radius: 12px;
                    border: solid 2px #dcebff;

                }
            }
            .org-desc {
                background: #fff;
                padding: 20px 40px;
                margin-top: 80px;
                p {
                    font-size: 30px;
                    line-height: 160%;
                }

            }
            .BannerBox {
                width: 690px;
                height: 164px;
                margin: 30px;
                display: flex;
                background: url("../../../assets/img/img_temp_bg_menu_5.png") no-repeat;
                background-size: 100% 100%;
                .bannerBtn1 {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex: 1;
                    cursor: pointer;
                    color: #333333;
                    font-size: 30px;
                    text-align: center;

                    img {
                        width: 90px;
                        height: 90px;
                        margin-right: 12px;
                        display: block;
                    }
                }

                .bannerBtn2 {
                    width: 215px;
                    height: 130px;
                    background-color: #007ac7;
                    border-radius: 10px;
                    cursor: pointer;
                    color: #ffffff;
                    font-size: 30px;
                    text-align: center;

                    img {
                        display: block;
                        margin: 20px auto;
                    }
                }

                .bannerBtn3 {
                    width: 215px;
                    height: 130px;
                    background-color: #e5580b;
                    border-radius: 10px;
                    //display: flex;
                    //justify-content: center;
                    //align-items: center;
                    cursor: pointer;
                    color: #ffffff;
                    font-size: 30px;
                    text-align: center;

                    img {
                        display: block;
                        margin: 22px auto;
                    }
                }
            }
        }

        .contact-us {
            padding: 40px 20px;
            background: #fff;
            .item-container {
                display: flex;
                flex-direction: row;
                height: 169px;
                background-color: #ffffff;
                box-shadow: 0px 3px 24px 0px rgba(0, 0, 0, 0.11);
                border-radius: 10px;
                align-items: center;
                margin-top: 24px;
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
                        font-size: 20px;
                        color: #666666;
                    }
                    .item-title {
                        font-size: 28px;
                        color: #333333;
                        font-weight: bold;
                        &.active {
                            color: #2361b2;
                        }
                    }
                }
            }
            .title {
                h3 {
                    font-size: 38px;
                    text-align: center;
                    line-height: 50px;
                    color: #2361b2;
                }
                p {
                    font-size: 20px;
                    text-align: center;
                    line-height: 40px;
                    font-weight: lighter;
                    color: #2361b2;
                    opacity: 0.4
                }
            }
        }
        .mien-project {
            padding: 40px 24px;
            background: #fff;
            .org-project-list {
                .item-title {
                    text-align: center;
                    font-size: 28px;
                    color: #333333;
                    margin-top: 24px;
                }
                .swiper-button {
                    width: 60px;
                    height: 60px;
                    background-color: #f5f5f5;
                    opacity: 0.8;
                    border-radius: 60px;
                }
                .swiper-slide {
                    /*justify-content: center;*/
                    /*align-items: center;*/
                    display: flex;
                    .org-project-item {
                        display: flex;
                        justify-content: center;
                        height: 380px;
                        width: 533px;
                        .item-image {
                            object-fit: scale-down;
                            width: 90%;
                            height: 90%;
                        }

                    }
                }
            }
            .title {
                h3 {
                    font-size: 38px;
                    text-align: center;
                    line-height: 50px;
                    color: #2361b2;
                }
                p {
                    font-size: 20px;
                    text-align: center;
                    line-height: 40px;
                    font-weight: lighter;
                    color: #2361b2;
                    opacity: 0.4
                }
            }
        }
        .org-project {
            padding: 40px 12px;
            background: #ffffff;
            .org-project-list {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                .org-project-tag {
                    width: 330px;
                    height: 275px;
                    background-color: #2361b2;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin: 16px 16px;
                    &.active {
                        width: 100%;
                        height: 167px;
                    }
                    h3 {
                        font-size: 38px;
                        line-height: 50px;
                        color: #ffffff;
                    }
                    p {
                        font-size: 20px;
                        text-align: center;
                        line-height: 40px;
                        font-weight: lighter;
                        color: #ffffff;
                        opacity: 0.4
                    }
                }
                .org-project-item {
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    margin: 12px 16px;
                    width: 330px;
                    .item-image {
                        object-fit: scale-down;
                        width: 330px;
                        height: 207px;
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
                        height: 68px;
                        line-height: 68px;
                        text-align: center;
                        background-color: #2361b2;
                        font-size: 24px;
                        color: #ffffff;
                    }
                }
            }
            .title {
                h3 {
                    font-size: 38px;
                    text-align: center;
                    line-height: 50px;
                    color: #2361b2;
                }
                p {
                    font-size: 20px;
                    text-align: center;
                    line-height: 40px;
                    font-weight: lighter;
                    color: #2361b2;
                    opacity: 0.4
                }
            }
        }
    }
</style>