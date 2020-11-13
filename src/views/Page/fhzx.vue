<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="warpper">
        <div class="org-logo">
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAnCAYAAABEz7vjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFMDNBNDZFRjYyNjExRUE5NDA1Qzk4MThFRTE4N0NGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFMDNBNDZGRjYyNjExRUE5NDA1Qzk4MThFRTE4N0NGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUwM0E0NkNGNjI2MTFFQTk0MDVDOTgxOEVFMTg3Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUwM0E0NkRGNjI2MTFFQTk0MDVDOTgxOEVFMTg3Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RpxiQAAAHnUlEQVR42sSZe3BU5RnGn81lw6Ww3EwEAq2mFWoHyii9OW2H9o9i2xEZLbbamZo6g9RBx07b0WnFltbyRyzQUnSQoAFEcEAgAkOBqE2MiYChgYDQhBACREi45UJM9pLdbH/f2TNTx0l2z2ZP4pk88yW753zf95z3/d73ed94NARXtEPjGXzAA74DtoMvgfvAj8FYMAnUgovgTdAJbgF54LL53OPTiwnXikat0TPIhCYy/AEsAr0gy/4qAtL7euaj09beAuws1BtVw/UrOlf/odTUKN9Inzqzc9V1/8N6n1szwUlwBMLtQ0LMttDT4AkwzMkz3Tek/Wulad+ScrDThMnO14tE5BcvIT1DxzU6+nPXiUHIWOFX4DnbvVy/ekKYqVr6zyHpTJ104qhUXy+Fw5ZLfIy9GsDJDBdJzWZYB2a5TablvHSwRKp8SzpUzu79li+H4FIFmQrwX8slpbrGaDTsisUgZM7NH23XS3eLzCWsUEEIebdYOs1JChlrSY3gX+x8H8RKT+DBgxI8IHUrwxvgDjfIdLVhEWYrfQ0yNRYRgzpIvQG2vYvnDXpUhNS9DBvAmJReDn5U+470/iaper/kD1rWaQVbILUeo1UnNV8qxCC1xA4QA746W7DOegjxalpbLMv0ggOgCOzZIgUHtLeBEIOQud8kyccGSujCQcgUSsf3sHMYcF6awVpQyMfNKZ/5ARJbY4fzpC5jipP41HurSLQnYtkZIhV8/AK/71wTO07uROdkiUHqTwxLk12oZpv07+XSdUJ2Tw8/EW2D1PLV0rFBEQfJELMDxZvJLHCDc7MbMVVfaRFSKMTZ6dHSfwbUxHwmf6Ix9D0wA0yzE/oo86itDU0ELAW7kUwdrhNjEzfZ4nSc08nPoOT2EFo6rlmEmoJBPbyyWaXM9U2+fgT8FIx2pDSCCp+p0r6S9Vr46+0WYdeIEbuU75TUkV3S2y8TGAIgqD0gf8VhfY2vngQm7125cU2eyxc0JeTX5OypyrhpSuJ5m2rV+/dFeuHcKT1dHEIkp0IMUqZkqHOqKCp2ECB2xFwvENBKSD218rAiRp3gTsEFkzQXTfckucsiCNo9aeq97avKzv+9Zk2/U8PjzX8O4fTMz3Tc36UfFF/t23pOiZlctcSRpcqw1HbL9QyWLCvWsk/fMy9PWbsb+s5PrOWF9NmMDMXV9Rv/Ie3dpmo84hvMFe6PWFqC/d7thBS1kkpRD+HhFlb0Rcpc/ZGy3rBPIUiVJVrrrrmSd7zuyByvhfHuS0TsFifESlDdQeJcyKuyYKYlhgd6TU10w8RcKkziZ7pPD8a7L1HZ0pvQWh+hxK9zrjyKhjxa/Pw6K/8ORKbdzvDtRPdxJpUxEng0PRWL1SZaqJ0M0wP9UEQVBat1KoUC9UUnUbqVCiAtkxsz4u89EbHXEy2Uy1EPm4AR0IUUXLAAzHFyY+1pSEUtNKZCzFTEccuGsRQt+Q9JE0ZpzqMPyJugIO3r82cYfutIc+IZVYhoE4KiAe2P67IO3CSHCFri8Whmons72uX3enVs+AgrR6XZtVo2OAtWEfkO3DtbWbuOKGi73/PgN07NWn1Y2kTy7+pSBEzbUqaGVLXisM4OFWQN0+PerIRWti7yTLjmA10sKVZT9UGZ1bI5+CZPrdparir+NopmnlNSJGUtJ95evWwR21BUqV+6VraUb1HOtWatm3Czfpibp4zRqMcRRKhAN4t1Ukyh4M/XS6fYdt2xmAKxRe3WtDQVbT2rQ7wkI3w3ginJrL0Z21aXS93daoXY9E21uup6Bb1gjHzp6ZrHZueAmbipcTcfc3aCNmBk2HFQxncHN19RGEJT7LLnkWTXK90k7cMF/X6L2PyiJu36TDvBthubdtzvwAN29zapq2qntOO5GCmwdF27/vyZtbghYwiYvvzjTpJuf9cHJJudSyxBbUi9VBhJ3JIYFGJ2r/5RG5NSmesdzlTJ3whC5Eh4rcFgi1+VokNGzM5P99hnZ66D3Bj3CqBkdmCXmr2xNhWkni2U/jok7TebkGmSmpD7UDLVdbyruYbo9wup5ZxFqh3koxB2DUWXaoYdBBbYfQp3XBjZXE6dVVIQa5jyU42lFhTFErv7zRyIjGD4vl2X/chpGZOUlU4QIJ6QGo9aHeAIKIDYXza41TC1O0fGCua/Jl+2o5npVXgHI3L627EQJ6eyyKoMDKljYOErFOOutN8gtJnxK4r9S/RzTie4epGzgL4+hSi9ZxEKZLSz58L4WOVa6W1c70ar1ThtQ6A8C6mXNmpgtVxci1G6bh43TjNnzFLeF2/T8Eg4Vo74kUoRVh5D1ZqLdsijvJvImEmmQvBqaj8nrZctptktoHAwViCaPv3+5YjlFotBgCVWM3UBhK4PScP0VnjwxWz2cjsIr3hFd02arJG+sRp16bw66hFL0bC+MPu7yhuXI+/Nn9ew1mZ5unCvowc4+buxKLr76/OtHmOE2im9mzD+cRuqHr5UH4Vg2asu9Or7d8Vo1PFDiMLFHMTJIAdjNDA2YrhRjPPtz6fz+SXGNl7IXrCTF1QPfsLj70XNuoRxSLUanzMwOjn8ifHTv0c+gV4bUf0/U5/vZ///E2AAcIle1M7yQiIAAAAASUVORK5CYII=">
                <p>北京市社会组织孵化中心</p>
            </div>
        </div>

        <div class="banner">
            <img src="http://gyhfile.shzzfw.com/%E5%9F%BA%E5%9C%B0%E4%BB%8B%E7%BB%8D%E5%9B%BE%E7%89%87.jpg" alt="">
            <div>
                <h3>简介</h3>
                <p>PROFILE</p>
            </div>
        </div>
        <div style="height: 30px;background: #fff;"></div>
        <div class="org-desc">
            <p>
                北京市社会组织孵化中心是由北京市委社会工委市民政局举办，北京市社会组织管理中心具体指导，委托北京公益服务发展促进会整体运营的全市社会组织孵化培育服务平台。中心为社会组织提供“党建引领、业务指导、咨询服务、培育扶持、能力提升、热点沙龙、场地管理”七大服务，多维度、多视角开展社会组织培育扶持工作，并以社会组织人才培育为核心，采用系统化ATS培育模式，为社会组织人才培育与创新发展提供持续性、专业化的支持和保障，从而健全社会组织内部治理，提升社会组织专业服务能力，推动社会组织有效有序参与社会治理并发挥更大作用，助力首都社会组织健康有序发展。
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

        <div class="title-container">
            <div class="title">北京市社会组织孵化中心平台</div>
            <div class="content">
                <p>建立健全管理制度，加强入驻社会组织的规范化管理</p>
                <p>北京市社会组织孵化中心从整合与共享的视角出发，实现发展期社会组织创新加速的“一站式”服务，快速提升组织自身能力和服务水平；从系统与专业的视角出发，建立发展期社会组织能力评估指标体系，系统、规范、专业地开展评估，为加速服务工作提供有效依据；从实效与应用的视角出发，针对发展期社会组织的难点与问题，提供“定制式”的解决方案，提供“陪伴式”督导，使服务更加精准高效；从人才与发展的视角出发，针对发展期社会组织人才匮乏的问题，提供全方位的课程体系和系统化的培训体系，以推动社会组织快速成长。</p>
                <p>（一）建立健全管理制度，加强入驻社会组织的规范化管理</p>
                <p>通过《北京市社会组织孵化中心发展期社会组织创新加速项目管理办法》手册的发布，为入驻的社会组织在场地使用、会议室预约、准入与退出等日常管理工作提出了明确要求，使孵化中心的管理更加规范有序。</p>
                <p>（二）开展阶段性评估，提升孵化中心的精准化服务</p>
                <p>通过评估，孵化中心对社会组织的需求和问题有了更加精准的掌握，所提供的服务与社会组织需求更加匹配，进一步提升了孵化中心的服务品质和服务能力。
                <p>（三）采用多元化形式，提高孵化中心信息化管理水平</p>
                <p>在开通微信公众号平台的基础上，实现在线预约共享会议室、督导服务、资源对接、机构展示等，提高会议室使用率，形成孵化中心信息数据库，增强信息传播力度。</p>
                <p>（四）创新孵化培育模式，加大对社会组织的支持力度</p>
                <p>以全市社会组织发展情况和社会组织需求为导向，科学、合理设计适用于发展期社会组织的孵化培育计划，通过“导师制”等创新孵化方法，解决社会组织发展中遇到的共性问题与个性问题，全方位助力社会组织加速成长，支持与引导社会组织的可持续性发展。</p>
                <p>（五）研发社会组织人才培育的三大体系，助力社会组织健康可持续发展</p>
                <p>以“人”与“实务”为核心，围绕“人才促发展”理念，通过自主研发的三大体系，进一步提升社会组织人才培育的系统化和专业化，有效提高社会组织人才的专业能力和服务水平，从而促进发展期社会组织创新能力和加速发展能力的提升。</p>
                <p>（六）整合社会力量，搭建促进社会组织交流与合作的平台</p>
                <p>通过动员和整合社会力量，建立孵化中心与社会组织、社会组织与社区、社会组织与社会组织以及各级孵化平台，形成良好的“共建共治共享”通道，提高了北京市支持性社会组织的联动意识，完善了北京市发展期社会组织的沟通合作机制，对于发展期社会组织的自身建设与交流合作起到了巨大的推动作用。</p>
                <p>（七）共享创新加速成果，强化对社会组织优秀案例的宣传推广</p>
                <p>通过案例撰写培训和加速组织案例库建立，进一步提高社会组织的总结反思能力和案例撰写能力，同时，对发展期社会组织优秀案例进行宣传与推广，为更多的社会组织提供借鉴与参考。</p>
            </div>
        </div>
        <div class="img-list">
            <div class="img-item"  v-for="(item,index) in img1" :key="index" @click="toPreview(img1,index)"
                 :class="{active:img1.length % 2 ===1 && index === 0}">
                <img class="item-img" :src="item.img"/>
                <div class="item-title ovHide" :class="{active:img1.length % 2 ===1 && index === 0}">{{item.title}}</div>
            </div>
        </div>
        <div class="title-container">
            <div class="title">北京市社会组织孵化中心加速实验室</div>
            <div class="content">
                <p>北京公益服务发展促进会作为市孵中心运营方，2020年携手政府、高校、企业以及其他支持型组织跨界联动，以“人才与发展”为定位打造社会组织“加速实验室”，提供社会组织能力测评、业务咨询、辅导培训、精准督导等服务，提高社会组织专业能力、服务能力与发展能力，将组建由行业专家、实务督导和跨界大咖构成的强悍导师团，通过陪伴式服务帮助社会组织解决创新发展过程中遇到的难题，12个月深度加速赋能，体系化助力社会组织蜕变成长。</p>
                <p>截至目前，加速实验室完成评审工作并进行结果公示，共有6家社会组织（社会团体2家、基金会2家、民办非企业单位2家）进入加速实验室，同时，经评审会专委员建议，另有4家民办非企业单位将获得加速实验室支持；联合中国社会科学院完成优化、论证社会组织发展能力评价指标体系（900分），自评版本指标设计等工作。</p>
            </div>
        </div>
        <div class="img-list">
            <div class="img-item"  v-for="(item,index) in img2" :key="index" @click="toPreview(img2,index)"
                 :class="{active:img2.length % 2 ===1 && index === 0}">
                <img class="item-img" :src="item.img"/>
                <!--<div class="item-title" :class="{active:img2.length % 2 ===1 && index === 0}">{{item.title}}</div>-->
            </div>
        </div>
        <div class="title-container">
            <div class="title">专业支持</div>
            <div class="content">发展期社会组织人才培育体系以“人”与“实务”为核心，围绕“人才促发展”的理念，采用评估－培训－督导的系统式培育模式，通过分层级、分类别的专业化人才培育促进孵化和加速阶段的社会组织能力成长，并力争形成具有示范性、可持续性和可复制性模式。发展期社会组织人才培育体系包括发展期社会组织能力评价体系及发展期社会组织人才能力提升课程体系两个部分。</div>
        </div>
        <div class="org-project" v-if="project_info.length !== 0">
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
        <van-image-preview v-model="show" :startPosition="startPosition" :closeable="true" :images="previews" @change="onChange">
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
        name: "fhzx",
        data() {
            return {
                phone: '010-65396188',
                project_info: [
                    {
                        img: 'http://gyhfile.shzzfw.com/dr8.png',
                        title: '体系建设基础'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/dr9.png',
                        title: '发展期人才培育体系特点'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/dr10.png',
                        title: '发展期人才培育体系组成'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/dr11.png',
                        title: '发展期社会组织能力评价体系'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/dr12.png',
                        title: '发展期社会组织人才能力提升课程体系'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/dr13.png',
                        title: '发展期社会组织人才能力提升课程库'
                    }
                ],
                img1:[
                    {
                        img:'http://gyhfile.shzzfw.com/dr1.jpg',
                        title:'党日活动-理论课合照'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/dr2.jpg',
                        title:'党日活动-模拟实践课合照'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/dr3.jpg',
                        title:'党日活动-线下督导'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/dr4.jpg',
                        title:'党日活动-交流访问'
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/dr5.jpg',
                        title:'党日活动-场地服务'
                    }
                ],
                img2:[
                    {
                        img:'http://gyhfile.shzzfw.com/dr6.JPG',
                        title:''
                    },
                    {
                        img:'http://gyhfile.shzzfw.com/dr7.jpg',
                        title:''
                    }
                ],
                startPosition: 0,
                previewTitle: '',
                show: false,
                showShare: false
            }
        },
        created() {
           share('北京市社会组织孵化中心', '欢迎查看北京市社会组织孵化中心的微店', 'http://shzzpt.org.cn/web/assets/img/jd2.png', window.location.href)
        },
        methods: {
            toPreview(list,index){
                this.curList = list
                this.previews = list.map(item=>{return item.img})
                this.startPosition = index
                this.show = true
                this.previewTitle = list[index].title
            },
            onChange(index) {
                this.previewTitle = this.curList[index].title
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
        .title-container{
            background: #ffffff;
            padding: 20px;
            margin-top: 20px;
            .title{
                width: 100%;
                text-align: center;
                font-size: 32px;
                font-weight: bold;
                margin-top: 20px;
            }
            .content{
                font-size: 26px;
                text-indent: 52px;
                line-height: 39px;
                text-align: justify;
                margin-top: 15px;
                p {
                    font-size: 30px;
                    line-height: 160%;
                    text-indent: 60px;
                    text-align: justify;
                }
            }
        }
        .img-list {
            padding: 0 15px 20px;
            background: #fff;
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            .img-item {
                margin-left: 12px;
                margin-right: 12px;
                margin-top: 24px;
                width: 336px;
                height: 207px;
                position: relative;
                overflow: hidden;
                &.active {
                    width: 100%;
                    height: 359px;
                    margin-right: 20px;
                }
                .item-img {
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
                    background-color: #000000b3;
                    font-size: 26px;
                    color: #ffffff;
                    &.active {
                        height: 58px;
                        line-height: 58px;
                    }
                }
            }
        }
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