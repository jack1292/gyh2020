<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="warpper">
        <div class="org-logo">
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAnCAYAAABEz7vjAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjZFMDNBNDZFRjYyNjExRUE5NDA1Qzk4MThFRTE4N0NGIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjZFMDNBNDZGRjYyNjExRUE5NDA1Qzk4MThFRTE4N0NGIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NkUwM0E0NkNGNjI2MTFFQTk0MDVDOTgxOEVFMTg3Q0YiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NkUwM0E0NkRGNjI2MTFFQTk0MDVDOTgxOEVFMTg3Q0YiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5RpxiQAAAHnUlEQVR42sSZ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">
                <p>社会组织孵化基地北部基地</p>
            </div>
        </div>

        <div class="banner">
            <img src="http://gyhfile.shzzfw.com/bb0.jpg" alt="">
            <div>
                <h3>简介</h3>
                <p>PROFILE</p>
            </div>
        </div>
        <div style="height: 30px;background: #fff;"></div>
        <div class="org-desc">
            <p>
                北京市昌平区社会组织发展服务中心于2018年5月正式注册成立，承接昌平区社会组织孵化基地运维项目并正式对外开放，9月被确立为“北京市社会组织孵化中心北部基地”，2019年3月启动回天社会创新学院，并为入驻的85家机构提供孵化服务，截止2020年9月30日，共孵化社会组织112家。2019年4月，北京市回天社区公益基金会成立，初始资金200万元，目前整体投资近800万元，2019年10月，回天政府采购平台上线，吸引和带动众多社会组织来到回天地区参与社会服务实践。
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
                    <div class="item-name">{{item.name}}</div>
                    <div class="item-content" v-html="item.content"></div>
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
                    <div class="item-tag">联系人：<span class="item-title">{{contacts}}</span></div>
                    <div class="item-tag margin-top-sm">联系电话：<span class="item-title">{{phone}}</span></div>

                </div>
            </div>
            <div class="item-container">
                <img class="item-img" src="../../assets/img/img_address1.png"/>
                <div class="item-content">
                    <div class="item-tag">基地地址</div>
                    <div class="item-title margin-top-sm">北京市昌平区回龙观东大街318号首开广场4层</div>
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
    //    import {share} from '@/tools/share'
    import Share from "../Components/Share.vue";

    export default {
        components: {Share},
        name: "bbjd",
        data() {
            return {
                contacts:'桂如新',
                phone: '18701220806',
                project_info: [
                    {
                        img: 'http://gyhfile.shzzfw.com/bb1.jpg',
                        title: '昌平-区街镇社区三级孵化',
                        name: '一、区、街镇、社区三级孵化',
                        content: '<p>为了探索和实践中国超大型城市基层社会创新，提升社区治理的水平，输出优质的社会服务，营造美好社区，我们在党建引领下尝试打造一个区级、镇街级和社区级相互联动的一个孵化平台，为此，我们提供人才孵化、组织孵化、服务孵化、机制孵化方面的服务和产品包。</p>' +
                        ' <p> 2020年10月27日下午，为助力各镇街社区社会组织依托联合会承接政府购买社会组织服务，提升社区社会组织进行项目化方式开展活动的能力，昌平区社会组织发展服务中心于开展了“镇街社区社会组织承接政府购买社会组织服务沟通说明会”，来自各镇街社区社会组织联合会负责人及财务工作人员约20人参与了此次活动。</p>'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/bb2.png',
                        title: '昌平-三位一体孵化体系',
                        name: '二、三位一体孵化体系',
                        content: '<p>本中心的孵化职能由三大体系支撑，分别是社会组织孵化基地、回天社会创新学院、回天社会服务设计创新中心，其中，社会组织孵化基地为入孵机构提供办公空间和共享活动空间，创新学院为社会组织、社会企业提供组织孵化服务，为社区社工、志愿者提供人才孵化服务，社会服务设计创新中心为社会组织提供服务孵化和机制孵化。</p>'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/bb3.jpg',
                        title: '昌平-回天社会创新学院',
                        name: '三、回天社会创新学院',
                        content: ' <p>2019年3月，回天社会创新学院正式启动，为社会组织、社会企业、志愿者、社会工作者提供能力支持，2020年，新增了回天环保学院和回天物业管理创新学院，回应目前基层社会治理当中面对的两个突出问题。</p>\n' +
                        '          <p> 2019年8月的回天地区基层治理能力提升培训班，面向昌平区基层社区工作者，以参与式学习的组织方式，开展“如何设计和落实社区服务项目”、“社区议事协商过程中的主持人技术”、“社区志愿者动员与管理”、“如何培育社区自组织”等内容，为基层社区工作者带去好理解、可运用的能力提升服务。</p>\n' +
                        ''
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/bb4.jpg',
                        name: '四、回天社会服务设计创新中心',
                        content: '   <p>打造回天社会服务设计创新中心，培养多元社会创新力量,依托回天人才资源，创建回天社会服务设计创新中心，打造资源与智慧共享的众创平台。服务对象涵盖新一代互联网等科技人才、小创业人群、全职妈妈、独立职业人员等多元社会力量，孵化产业包括物业创新、社区环保、社区养老、社区文化、社区环境与秩序、社区商业、社区公益、社区党建等社会服务产业。</p>\n' +
                        '          <p> 针对回天地区社会经济发展需求进行分析梳理，建立专项问题解决实验室，以项目为导向，实现一对一导师辅导及项目孵化，为不同培养对象提供有效的针对性的问题解决方案。通过项目设计工作坊打磨符合回天地区特色的项目解决方案并进行落地试点、推广服务，运用科技手段提升社区公共服务。</p>\n'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/bb5.jpg',
                        title: '昌平-综合党委',
                        name: '五、综合党委',
                        content: ' <p>2020年回天地区社会组织综合党委按照党的十九大对社会组织在协商民主、社会治理、环境治理、基层党组织建设、发展党员等方面都明确的阐明论点并提出要求，结合以上围绕“共建共享、共同发展”的工作原则，以深入开展创先争优活动为载体，紧紧围绕服务中心工作，增强党建工作的有效性。</p>\n' +
                        '          <p> 回天地区综合党委成立于2019年7月，我们按照“成熟一个、建立一个、巩固一个、提高一个”的思路，采取“独立式”、“联合式”等模式，因地制宜，灵活设置党组织，加快了新社会党组织的组建步伐。目前共有十个党支部，其中社会组织8个，非公企业1个，联合支部1个，涉及养老、体育、文化、社会服务等多领域。截止2020年8月，共有党员32人，其中流动党员18人。</p>\n'
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/bb6.jpg',
                        title: '昌平-综合党委',
                    },
                    {
                        img: 'http://gyhfile.shzzfw.com/bb7.png',
                        title: '昌平-社会企业',
                        name: '六、社会企业',
                        content: '  <p>社会企业是社会治理的多元主体之一，昌平区依据《昌平区回天地区社会企业认证与扶持试点办法（试行）》昌社委发〔2019〕12号）的文件要求，挖掘一批具有一定规模、一定影响力和辐射力的社会企业，培养社会企业并促进其在创新社会管理、参与社会治理、改善社会服务等方面发挥积极作用，着力构建共建共治共享的社会治理新格局。本中心为做好回天地区社会企业认证工作，成立回天地区社会企业认证工作组，在区委社会工委的指导下，按照“组织申报、资质初评、尽职调查、信用核查、专家中评、专家终审、审核公示、结果发布”共8项具体流程，开展回天地区社会企业认证工作。</p>\n' +
                        '          <p> 回天地区社会企业是指登记注册、税务解缴、统计关系在昌平区，服务区域包含回天地区，以协助解决社会问题、改善社会治理、服务于弱势和特殊群体或社区利益为宗旨，以优先追求社会效益为根本目标，以创新商业模式、市场化运作为主要手段，所得盈利按照其社会目标再投入解决社会问题、创新公共服务供给，且社会目标持续稳定的企业。</p>\n' +
                        '  '
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
                    .item-name {
                        font-size: 30px;
                        font-weight: bold;
                    }
                    .item-content {
                        font-size: 28px;
                        line-height: 160%;
                        text-indent: 60px;
                        text-align: justify;
                    }
                    .item-image {
                        width: 100%;
                        margin-top: 10px;
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