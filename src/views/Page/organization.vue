<template>
    <div class="organization-warpper">
        <img src="../../assets/img/org.jpg" alt="" class="org-banner">
        <div class="type-item" v-for="(item,index) in list" :key="index">
            <div class="type-title">
                <h3>{{ item.name }}</h3>
                <router-link :to="'/Home/orgList?type='+ item.id" class="more">更多</router-link>
            </div>
            <div class="org-list">
                <router-link :to="'/Content/template'+items.shop_id+'?id=' + items.user_id" class="org-item"
                             v-for="(items,j) in item.query" :key="j">
                    <div class="org-info">
                        <div class="org-img">
                            <img :src="items.logo_url" alt="">
                        </div>
                        <div class="org-name">
                            <h3 class="ovHide">{{items.name}}</h3>
                            <span>点击进入</span>
                        </div>

                    </div>
                    <i class="iconfont iconfanhui-copy"></i>
                </router-link>
            </div>
        </div>

        <div class="search-box">
            <input type="text" placeholder="请输入要搜索的内容" v-model="keyword">
            <span @click="toOrgList">搜 索</span>
        </div>

        <div class="org-address">
            <router-link to="/Home/orgList?area=1" class="address-item">东城区</router-link>
            <router-link to="/Home/orgList?area=2" class="address-item">西城区</router-link>
            <router-link to="/Home/orgList?area=3" class="address-item">朝阳区</router-link>
            <router-link to="/Home/orgList?area=4" class="address-item">海淀区</router-link>
            <router-link to="/Home/orgList?area=5" class="address-item">丰台区</router-link>
            <router-link to="/Home/orgList?area=6" class="address-item">石景山区</router-link>
            <router-link to="/Home/orgList?area=7" class="address-item">门头沟区</router-link>
            <router-link to="/Home/orgList?area=8" class="address-item">房山区</router-link>
            <router-link to="/Home/orgList?area=9" class="address-item">通州区</router-link>
            <router-link to="/Home/orgList?area=10" class="address-item">顺义区</router-link>
            <router-link to="/Home/orgList?area=11" class="address-item">昌平区</router-link>
            <router-link to="/Home/orgList?area=12" class="address-item">大兴区</router-link>
            <router-link to="/Home/orgList?area=13" class="address-item">怀柔区</router-link>
            <router-link to="/Home/orgList?area=14" class="address-item">平谷区</router-link>
            <router-link to="/Home/orgList?area=15" class="address-item">密云区</router-link>
            <router-link to="/Home/orgList?area=16" class="address-item">延庆区</router-link>
            <router-link to="/Home/jd" class="address-item big">基地专栏</router-link>
            <router-link to="/Home/orgOtherList" class="address-item big">社区社会组织</router-link>
            <router-link to="/Home/orgOtherList2" class="address-item big">青年社会组织</router-link>
        </div>
    </div>
</template>

<script>
    import {getOrgIndex} from '@/api'
    import {Toast} from "vant";

    export default {
        name: "organization",
        data() {
            return {
                list: [],
                keyword: '',
            }
        },
        created() {
            this.init()
        },
        methods: {
            async init() {
                let _data = await getOrgIndex()
                this.list = _data.data
            },
            toOrgList() {

                if (this.keyword) {
                    this.$router.push('/Home/orgList?keyword=' + this.keyword)
                } else {
                    Toast('请输入要搜索的内容');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .organization-warpper {
        background: #f1f1f1;
        min-height: calc(100vh - 188px);
        .org-banner {
            display: block;
            width: 100%;
        }

        .type-item {
            background: #fff;
            margin-bottom: 20px;

            .type-title {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 90px;
                padding: 0 30px;
                background-color: #ffffff;
                border: solid 2px #eeeeee;

                h3 {
                    position: relative;
                    font-size: 32px;
                    color: #e2412e;
                    padding-left: 30px;
                    line-height: 40px;

                    &:before {
                        position: absolute;
                        top: 0;
                        left: 0;
                        content: '';
                        width: 12px;
                        height: 36px;
                        background-color: #e2412e;
                    }
                }

                .more {
                    width: 114px;
                    height: 53px;
                    text-align: center;
                    line-height: 53px;
                    background-color: #e2412e;
                    border-radius: 27px;
                    font-size: 28px;
                    color: #ffffff;
                }
            }

            .org-list {
                padding: 30px;

                .org-item {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 164px;
                    padding: 20px;
                    margin-bottom: 20px;
                    border-radius: 10px;
                    border: solid 2px #eeeeee;

                    .org-info {
                        display: flex;
                        align-items: center;
                        width: 90%;
                        overflow: hidden;
                        .org-img {
                            display: flex;
                            align-items: center;
                            justify-content: space-around;
                            width: 120px;
                            height: 120px;
                            border: solid 1px #eeeeee;
                            margin-right: 20px;
                            border-radius: 120px;
                            overflow: hidden;
                            img {
                                display: block;
                                width: 120px;

                            }
                        }

                        .org-name {
                            flex: 1;
                            overflow: hidden;

                            h3 {
                                font-size: 30px;
                                line-height: 36px;
                                color: #333333;
                                margin-bottom: 20px;
                            }

                            span {
                                display: block;
                                width: 169px;
                                height: 43px;
                                text-align: center;
                                line-height: 43px;
                                font-size: 26px;
                                color: #ffffff;
                                background-color: #e2412e;
                                border-radius: 22px;
                            }
                        }
                    }

                    i {
                        font-size: 36px;
                        color: #e0e0e0;
                    }
                }
            }

        }

        .search-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 692px;
            height: 90px;
            margin: 40px auto;
            background-color: #e2412e;
            border-radius: 4px;
            padding: 8px;
            input {
                width: 579px;
                height: 78px;
                padding: 15px 20px;
                background-color: #ffffff;
                border-radius: 4px;
                font-size: 24px;
            }
            span {
                display: block;
                flex: 1;
                text-align: center;
                height: 78px;
                line-height: 78px;
                font-size: 28px;
                font-weight: bold;
                color: #fff600;
            }
        }

        .org-address {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            padding: 38px 30px;
            background: url(../../assets/img/orgbg.jpg) no-repeat center;

            .address-item {
                display: flex;
                align-items: center;
                justify-content: space-around;
                width: 156px;
                height: 72px;
                background-color: #ffffff;
                border-radius: 2px;
                font-size: 26px;
                color: #333;
                margin-bottom: 19px;
                &.big {
                    width: 215px;
                }
            }
        }
    }
</style>