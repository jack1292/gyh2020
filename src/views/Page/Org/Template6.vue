<template>
    <div class="warpper">
        <div class="org-logo">
            <div>
                <img :src="apply_info.logo_url" alt="" v-if="apply_info.logo_url">
                <p>{{ userinfo.name }}</p>
            </div>
        </div>
        <div class="banner">
            <div>
                <img src="../../../assets/img/img_temp_desc_6.png"/>
            </div>
            <img :src="organization[0].img_url" alt="">
            <div class="BannerBox">
                <div class="bannerBtn1" @click="showMessage = true">
                    <img src="../../../assets/img/wenziqiashang6.png" alt="">文字<br>洽商
                </div>
                <a :href="'tel:'+apply_info.phone" class="bannerBtn1">
                    <img src="../../../assets/img/yijiantonghua6.png" alt="">一键<br>通话
                </a>
                <div class="bannerBtn1" @click="toShare">
                    <img src="../../../assets/img/yijianzhuanfa6.png" alt="">一键<br>转发
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
                <img src="../../../assets/img/img_temp_project_6.png"/>
            </div>
            <div class="org-project-list">
                <router-link :to="'/Content/projectDetail?id='+item.id" class="org-project-item" :class="{active:project_info.length % 2 ===1 && index === 0}"
                     v-for="(item,index) in project_info" :key="index">
                    <img class="item-image" :class="{active:project_info.length % 2 ===1 && index === 0}" :src="item.xiangmu_kaizhan_img[0]"/>
                    <div class="item-title ovHide" :class="{active:project_info.length % 2 ===1 && index === 0}">
                        {{item.entry_name}}
                    </div>
                    <img class="item-tag" src="../../../assets/img/img_tuijian.png" v-if="item.instructions"/>
                </router-link>
            </div>
        </div>


        <div style="height: 10px;background: #f5f5f5;"></div>

        <div class="mien-project">
            <div class="title">
                <img src="../../../assets/img/img_temp_mien_6.png"/>
            </div>
            <div class="org-project-list">
                <div class="org-project-item" :class="{active:organization.length % 2 ===1 && index === 0}"
                     v-for="(item,index) in organization" :key="index" @click="toMienPreview(index)">
                    <img class="item-image" :src="item.img_url"/>
                    <div class="item-title ovHide" :class="{active:organization.length % 2 ===1 && index === 0}">
                        {{item.title}}
                    </div>
                </div>
            </div>
        </div>

        <div style="height: 10px;background: #f5f5f5;"></div>

        <div class="contact-us">
            <div class="title">
                <img src="../../../assets/img/img_temp_about_6.png"/>
            </div>
            <div class="flex justify-between">
                <div class="item-container">
                    <img class="item-img" src="../../../assets/img/img_lianxiren6.png"/>
                    <div class="item-content margin-top-sm">
                        <div class="item-tag">联系人</div>
                        <div class="item-title">{{apply_info.contacts}}</div>
                        <div class="item-phone">{{apply_info.phone}}</div>
                    </div>
                </div>
                <div class="item-container">
                    <img class="item-img" src="../../../assets/img/img_address6.png"/>
                    <div class="item-content  margin-top-sm">
                        <div class="item-tag">秘书处地址</div>
                        <div class="item-phone">{{ apply_info.secretariat_address }}</div>
                    </div>
                </div>
            </div>
        </div>
        <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="srcList"
                           @change="onChange">
            <template class="title" v-slot:cover>{{previewTitle}}</template>
        </van-image-preview>
        <share :showShare="showShare" @setShare="setShare"></share>
        <message :show="showMessage" :id="id" @setMessage="setMessage"></message>
    </div>
</template>

<script>
    import {getInstitutionInfo} from '@/api'
     import {share} from '@/tools/share'
    import Share from "../../Components/Share.vue";
    import Message from "../../Components/Message.vue";

    export default {
        components: {
            Message,
            Share},
        name: "Template6",
        data() {
            return {
                id:'',
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
                showShare: false,
                showMessage: false
            }
        },
        created() {
            if (this.$route.query.id) {
                this.id = this.$route.query.id
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
                share(this.userinfo.name, '欢迎查看' + this.userinfo.name + '的微店', this.apply_info.logo_url ? this.apply_info.logo_url : this.organization[0].img_url, window.location.href)

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
            },
            setMessage(state){
                this.showMessage = state
            }
        }
    }
</script>

<style scoped lang="scss">

    .warpper {
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
                    display: block;
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
            padding: 20px 34px 0;
            > div {
                margin-bottom: 20px;
                text-align: center;
                >img {
                    height: auto;
                    width: 100%;
                }
            }
            > img {
                width: 100%;
                height: 520px;
                margin-top: 20px;
                object-fit: scale-down;
                border-radius: 10px;
                border: 2px solid #c70005;
            }
            .org-desc {
                background: #fff;
                padding: 20px 20px 60px;
                margin-bottom: 20px;
                p {
                    font-size: 30px;
                    line-height: 160%;
                }

            }
            .BannerBox {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 20px;

                .bannerBtn1 {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 213px;
                    height: 108px;
                    background-image: linear-gradient(90deg,
                            #c70005 0%,
                            #d63815 100%);
                    border-radius: 12px;
                    cursor: pointer;
                    color: #ffffff;
                    font-size: 26px;

                    img {
                        display: block;
                        width: 82px;
                        height: 82px;
                    }
                }
            }
        }

        .contact-us {
            padding: 40px 34px 60px;
            background-image: url("../../../assets/img/img_bg_about_6.png");
            background-size: 100%;
            .item-container {
                display: flex;
                flex-direction: column;
                width: 325px;
                height: 320px;
                background-color: #ffffff;
                box-shadow: 0px 0px 10px 0px
                rgba(199, 0, 5, 0.3);
                align-items: center;
                /*justify-content: center;*/
                .item-img {
                    flex-shrink: 0;
                    width: 92px;
                    height: 92px;
                    margin-top: 44px;
                }
                .item-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .item-tag {
                        font-size: 22px;
                        color: #333333;
                    }
                    .item-title {
                        font-size: 24px;
                        color: #333333;
                        font-weight: bold;
                        margin-top: 6px;
                    }
                    .item-phone{
                       font-size: 24px;
                        color: #c70005;
                        font-weight: bold;
                        margin-top: 6px;
                    }
                }
            }
            .title {
                margin-bottom: 30px;
                text-align: center;
                img {
                    height: auto;
                    width: 100%;
                }
            }
        }
        .mien-project {
            padding: 40px 12px;
            background: #fff;
            .org-project-list {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                .org-project-item {
                    margin-left: 12px;
                    margin-right: 12px;
                    margin-top: 24px;
                    width: 336px;
                    height: 207px;
                    position: relative;
                    overflow: hidden;
                    &.active {
                        width: 700px;
                        height: 459px;
                        margin-right: 20px;
                    }
                    .item-image {
                        object-fit: scale-down;
                        width: 100%;
                        height: 100%;
                    }
                    .item-title {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 49px;
                        line-height: 49px;
                        text-align: center;
                        background-color: rgba(255,9,19,.7);
                        font-size: 26px;
                        color: #ffffff;
                        &.active {
                            height: 58px;
                            line-height: 58px;
                        }
                    }
                }
            }
            .title {
                text-align: center;
                margin-bottom: 30px;
                padding: 0 24px;
                img {
                    height: auto;
                    width: 100%;
                }
            }
        }
        .org-project {
            padding: 40px 12px;
            background: #fff;
            .org-project-list {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                .org-project-item {
                    margin-left: 12px;
                    margin-right: 12px;
                    margin-top: 24px;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    overflow: hidden;
                    width: 336px;
                    &.active {
                        width: 689px;
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
                        background-color: #eeeeee;
                        font-size: 24px;
                        color: #000000;
                        &.active {
                            height: 78px;
                            line-height: 78px;
                            font-size: 24px;
                        }
                    }
                }

            }
            .title {
                margin-bottom: 30px;
                text-align: center;
                padding: 0 24px;
                img {
                    height: auto;
                    width: 100%;
                }
            }
        }
    }
</style>