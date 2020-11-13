<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="warpper">
        <div class="org-logo">
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAnCAYAAABEz7vjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFMDNBNDZFRjYyNjExRUE5NDA1Qzk4MThFRTE4N0NGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFMDNBNDZGRjYyNjExRUE5NDA1Qzk4MThFRTE4N0NGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUwM0E0NkNGNjI2MTFFQTk0MDVDOTgxOEVFMTg3Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUwM0E0NkRGNjI2MTFFQTk0MDVDOTgxOEVFMTg3Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RpxiQAAAHnUlEQVR42sSZe3BU5RnGn81lw6Ww3EwEAq2mFWoHyii9OW2H9o9i2xEZLbbamZo6g9RBx07b0WnFltbyRyzQUnSQoAFEcEAgAkOBqE2MiYChgYDQhBACREi45UJM9pLdbH/f2TNTx0l2z2ZP4pk88yW753zf95z3/d73ed94NARXtEPjGXzAA74DtoMvgfvAj8FYMAnUgovgTdAJbgF54LL53OPTiwnXikat0TPIhCYy/AEsAr0gy/4qAtL7euaj09beAuws1BtVw/UrOlf/odTUKN9Inzqzc9V1/8N6n1szwUlwBMLtQ0LMttDT4AkwzMkz3Tek/Wulad+ScrDThMnO14tE5BcvIT1DxzU6+nPXiUHIWOFX4DnbvVy/ekKYqVr6zyHpTJ104qhUXy+Fw5ZLfIy9GsDJDBdJzWZYB2a5TablvHSwRKp8SzpUzu79li+H4FIFmQrwX8slpbrGaDTsisUgZM7NH23XS3eLzCWsUEEIebdYOs1JChlrSY3gX+x8H8RKT+DBgxI8IHUrwxvgDjfIdLVhEWYrfQ0yNRYRgzpIvQG2vYvnDXpUhNS9DBvAmJReDn5U+470/iaper/kD1rWaQVbILUeo1UnNV8qxCC1xA4QA746W7DOegjxalpbLMv0ggOgCOzZIgUHtLeBEIOQud8kyccGSujCQcgUSsf3sHMYcF6awVpQyMfNKZ/5ARJbY4fzpC5jipP41HurSLQnYtkZIhV8/AK/71wTO07uROdkiUHqTwxLk12oZpv07+XSdUJ2Tw8/EW2D1PLV0rFBEQfJELMDxZvJLHCDc7MbMVVfaRFSKMTZ6dHSfwbUxHwmf6Ix9D0wA0yzE/oo86itDU0ELAW7kUwdrhNjEzfZ4nSc08nPoOT2EFo6rlmEmoJBPbyyWaXM9U2+fgT8FIx2pDSCCp+p0r6S9Vr46+0WYdeIEbuU75TUkV3S2y8TGAIgqD0gf8VhfY2vngQm7125cU2eyxc0JeTX5OypyrhpSuJ5m2rV+/dFeuHcKT1dHEIkp0IMUqZkqHOqKCp2ECB2xFwvENBKSD218rAiRp3gTsEFkzQXTfckucsiCNo9aeq97avKzv+9Zk2/U8PjzX8O4fTMz3Tc36UfFF/t23pOiZlctcSRpcqw1HbL9QyWLCvWsk/fMy9PWbsb+s5PrOWF9NmMDMXV9Rv/Ie3dpmo84hvMFe6PWFqC/d7thBS1kkpRD+HhFlb0Rcpc/ZGy3rBPIUiVJVrrrrmSd7zuyByvhfHuS0TsFifESlDdQeJcyKuyYKYlhgd6TU10w8RcKkziZ7pPD8a7L1HZ0pvQWh+hxK9zrjyKhjxa/Pw6K/8ORKbdzvDtRPdxJpUxEng0PRWL1SZaqJ0M0wP9UEQVBat1KoUC9UUnUbqVCiAtkxsz4u89EbHXEy2Uy1EPm4AR0IUUXLAAzHFyY+1pSEUtNKZCzFTEccuGsRQt+Q9JE0ZpzqMPyJugIO3r82cYfutIc+IZVYhoE4KiAe2P67IO3CSHCFri8Whmons72uX3enVs+AgrR6XZtVo2OAtWEfkO3DtbWbuOKGi73/PgN07NWn1Y2kTy7+pSBEzbUqaGVLXisM4OFWQN0+PerIRWti7yTLjmA10sKVZT9UGZ1bI5+CZPrdparir+NopmnlNSJGUtJ95evWwR21BUqV+6VraUb1HOtWatm3Czfpibp4zRqMcRRKhAN4t1Ukyh4M/XS6fYdt2xmAKxRe3WtDQVbT2rQ7wkI3w3ginJrL0Z21aXS93daoXY9E21uup6Bb1gjHzp6ZrHZueAmbipcTcfc3aCNmBk2HFQxncHN19RGEJT7LLnkWTXK90k7cMF/X6L2PyiJu36TDvBthubdtzvwAN29zapq2qntOO5GCmwdF27/vyZtbghYwiYvvzjTpJuf9cHJJudSyxBbUi9VBhJ3JIYFGJ2r/5RG5NSmesdzlTJ3whC5Eh4rcFgi1+VokNGzM5P99hnZ66D3Bj3CqBkdmCXmr2xNhWkni2U/jok7TebkGmSmpD7UDLVdbyruYbo9wup5ZxFqh3koxB2DUWXaoYdBBbYfQp3XBjZXE6dVVIQa5jyU42lFhTFErv7zRyIjGD4vl2X/chpGZOUlU4QIJ6QGo9aHeAIKIDYXza41TC1O0fGCua/Jl+2o5npVXgHI3L627EQJ6eyyKoMDKljYOErFOOutN8gtJnxK4r9S/RzTie4epGzgL4+hSi9ZxEKZLSz58L4WOVa6W1c70ar1ThtQ6A8C6mXNmpgtVxci1G6bh43TjNnzFLeF2/T8Eg4Vo74kUoRVh5D1ZqLdsijvJvImEmmQvBqaj8nrZctptktoHAwViCaPv3+5YjlFotBgCVWM3UBhK4PScP0VnjwxWz2cjsIr3hFd02arJG+sRp16bw66hFL0bC+MPu7yhuXI+/Nn9ew1mZ5unCvowc4+buxKLr76/OtHmOE2im9mzD+cRuqHr5UH4Vg2asu9Or7d8Vo1PFDiMLFHMTJIAdjNDA2YrhRjPPtz6fz+SXGNl7IXrCTF1QPfsLj70XNuoRxSLUanzMwOjn8ifHTv0c+gV4bUf0/U5/vZ///E2AAcIle1M7yQiIAAAAASUVORK5CYII=">
                <p>北京市社会组织发展服务中心</p>
            </div>
        </div>

        <div class="banner">
            <img src="http://gyhfile.shzzfw.com/%E5%9F%BA%E5%9C%B0%E4%BB%8B%E7%BB%8D%E5%9B%BE%E7%89%87123.jpg" alt="">
            <div>
                <h3>简介</h3>
                <p>PROFILE</p>
            </div>
        </div>
        <div style="height: 30px;background: #fff;"></div>
        <div class="org-desc">
            <p>
                北京市社会组织发展服务中心（以下称中心）是由北京市委社会工委、市民政局主办，委托北京市协作者社会工作发展中心运营的市级社会组织支持平台。<br>
                在北京市社会组织管理中心的指导下，中心确立了“双向支持、多方参与、共建共享”的运营服务理念，构建了行政指导与社会化运营相结合、以6+N服务体系为抓手、以社会组织资源联合体与市区街三级体系为支撑、以信息化为手段，以资源配置为主要功能、以标准化运营作为系统管理方式的运营机制；打造了协作者课堂、助力计划、公益1+1资助行动等系列品牌服务。5年来，为全市4000多家社会组织提供了近40000次咨询辅导、举办专题培训与资源对接等各种活动500余场，受益社会组织从业者超过20000人次。中心的运营经验被广东省民政厅、海南省民政厅、湖南省民政厅、江西省民政厅、陕西省民政厅和天津滨海新区民政局等地借鉴，引进到当地的平台建设工作中。2018年，中心的运营案例被写入中央党校（国家行政学院）教学案例；2019年，被收录到社会组织蓝皮书《中国社会组织报告（2019年）》。
            </p>
            <div class="BannerBox">
                <a :href="'tel:'+phone" class="bannerBtn2">
                    <img src="../../assets/img/yijiantonghua.png" alt="">一键通话
                </a>
                <div class="bannerBtn3" @click="toShare">
                    <img src="../../assets/img/yijianzhuanfa.png" alt="">一键转发
                </div>
            </div>
        </div>

        <div class="org-project" v-if="project_info.length !== 0">
            <div class="title">
                <h3>基地风采</h3>
            </div>
            <div class="org-project-list">
                <div class="org-project-item"
                     v-for="(item,index) in project_info" :key="index">
                    <img class="item-image" :src="item.img"/>
                    <div class="item-title">
                        {{item.title}}
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-us">
            <div class="title">
                <h3>联系我们</h3>
                <p>CONTACT US</p>
            </div>
            <div class="item-container">
                <img class="item-img" src="../../assets/img/img_lianxiren1.png"/>
                <div class="item-content">
                    <div class="item-tag">联系电话</div>
                    <div class="item-title margin-top-sm">{{phone}}</div>
                </div>
            </div>
            <div class="item-container">
                <img class="item-img" src="../../assets/img/img_address1.png"/>
                <div class="item-content">
                    <div class="item-tag">基地地址</div>
                    <div class="item-title margin-top-sm">北京市工人体育场东路20号百富国际大厦B座西门6F</div>
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
       import {share} from '@/tools/share'
    import Share from "../Components/Share.vue";

    export default {
        components: {Share},
        name: "fwzx",
        data() {
            return {
                phone: '010-65396188',
                project_info: [
                    {
                        img: 'http://gyhfile.shzzfw.com/fw1.png',
                        title: '中心运营机制图'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fw2.JPG',
                        title: '北京市委社工委书记、市民政局局长李万钧莅临中心指导工作。'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fw3.JPG',
                        title: '2018年，广东省民政厅党组书记、厅长卓志强到访北京市社会组织发展服务中心，中心运营方北京协作者主任李涛为其介绍运营情况，卓厅长对北京市民政局委托社会组织运营中心的模式给予高度评价。'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fw4.jpg',
                        title: '公益1+1资助行动“首个资助项目发布会暨疫情下的困境儿童发展论坛'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fw5.JPG',
                        title: '北京市社会组织管理中心党委书记许伟、主任温育梁听取北京市5家市级社会组织培育扶持基地的工作汇报，并对下一步工作提出指导性意见。'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fw6.JPG',
                        title: '2020年北京支持性社会组织年会暨发展论坛'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fw7.jpg',
                        title: '中心服务空间：综合服务区'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/fw8.jpg',
                        title: '中心服务空间：资源配置区'
                    }
                ],
                startPosition: 0,
                previewTitle: '',
                show: false,
                showShare: false
            }
        },
        created() {
            this.srcList = this.project_info.map(item => {
                return item.img
            })
            share('北京市社会组织发展服务中心', '欢迎查看北京市社会组织发展服务中心的微店', 'http://shzzpt.org.cn/web/assets/img/jd1.png', window.location.href)
//            share(this.userinfo.name, '欢迎查看' + this.userinfo.name + '的微店', this.apply_info.logo_url ? this.apply_info.logo_url : this.organization[0].img_url, window.location.href)
        },
        methods: {
            toMienPreview(index) {
                this.startPosition = index
                this.show = true
                console.log(this.project_info[index])
                this.previewTitle = this.project_info[index].title
//          this.toPreview(,index)
            },
            onChange(index) {
                this.previewTitle = this.project_info[index].title
                this.startPosition = index;
            },
            toShare() {
                this.showShare = true
            },
            setShare(state) {
                this.showShare = state
            }
        }
    }
</script>

<style scoped lang="scss">

    .warpper {
        background: #f5f5f5;
        min-height: 100vh;
        padding: 1px 0;
        .org-logo {
            display: flex;
            align-items: center;
            justify-content: space-around;
            height: 100px;
            margin: 20px;
            padding: 0 20px;
            background: #fff;
            border-radius: 10px;
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
                    font-size: 30px;
                    font-weight: bold;
                    color: #555555;
                }
            }
        }
        .banner {
            position: relative;
            height: 570px;
            background: #fff;
            img {
                width: 100%;
                height: 100%;
                object-fit: scale-down;
            }
            div {
                position: absolute;
                left: 65px;
                right: 65px;
                bottom: -50px;
                height: 100px;
                background-color: #ffffff;
                box-shadow: 0px 3px 27px 0px rgba(0, 0, 0, 0.12);
                border-radius: 10px;
                padding: 10px 0;
                h3 {
                    font-size: 38px;
                    text-align: center;
                    line-height: 50px;
                }
                p {
                    font-size: 20px;
                    text-align: center;
                    line-height: 40px;
                    font-weight: lighter;
                    color: #999;
                }
            }
        }
        .org-desc {
            background: #fff;
            padding: 20px;
            margin-bottom: 20px;
            p {
                font-size: 30px;
                line-height: 160%;
                text-indent: 60px;
                text-align: justify;
            }
            .BannerBox {
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 20px;

                .bannerBtn1 {
                    width: 215px;
                    height: 130px;
                    background-color: #c70005;
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
                    object-fit: scale-down;
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
                h3 {
                    font-size: 38px;
                    text-align: center;
                    line-height: 50px;
                }
                p {
                    font-size: 20px;
                    text-align: center;
                    line-height: 40px;
                    font-weight: lighter;
                    color: #999;
                }
            }
        }
        .org-project {
            padding: 40px 20px;
            background: #fff;
            .title {
                h3 {
                    font-size: 38px;
                    text-align: center;
                    line-height: 50px;
                }
                p {
                    font-size: 20px;
                    text-align: center;
                    line-height: 40px;
                    font-weight: lighter;
                    color: #999;
                }
            }
            .org-project-list {
                display: flex;
                flex-direction: column;
                width: 100%;


                .org-project-item {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    margin-top: 20px;
                    .item-image {
                        width: 100%;
                    }
                    .item-title {
                        margin-top: 10px;
                        font-size: 26px;
                        text-align: center;
                        font-weight: bold;
                    }
                }
            }
        }

    }
</style>