<template>
    <div class="warrper">
        <div class="container">
            <video class="video" controls src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"></video>
            <div class="classify-title">
                <div class="chinese">专题介绍</div>
            </div>
            <div class="desc">
                一、参与的机构和人数创新高，截至目前，已有超过3000家社会组织直接或间接参与相关活动； 二、“党建引领”贯穿始终，突出展现社会组织“不忘初心跟党走”、积极开展公益慈善事业的新成效； 三、联合举办突出亮点，配合首都国际交往中心建设，设立“一带一路建设”板块并开展相关活动，增加了“国际化”色彩；同时，市残联、团市委、市科协等单位合办特色展区，充分展示相关领域社会组织发展成果； 四、“拓展空间”线上线下相结合，在北京社会组织众扶平台开设专栏，打造“永不落幕的公益慈善汇展”； 五、资源对接实现全覆盖，从供需两端全方位整合相关资源，搭建精准、务实的交流对接平台。
                本届“汇展”立足北京、辐射津冀，是集中、全面展示北京市社会公益和慈善事业发展成果、对接社会服务资源、引领社会组织有序 参与社会治理的综合性平台。本届“汇展”围绕“公益慈善、汇聚力量，有你有我、共建共享”主题分为“展““洽““品““论“4大内容板块，有现场展览展示、互动交流、观摩体验、资源对接、主题论坛等多种表现。
            </div>
            <div class="classify-title">
                <div class="chinese active">社会组织<span>风采</span></div>
            </div>
            <div class="mine-list">
                <div class="mine-item" v-for="(item,index) in list" :key="index" @click="toMienPreview(index)">
                    <img class="item-image" :src="item.url"/>
                    <div class="item-title">{{item.title}}</div>
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
        name: "special9",
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
        background: url("../../../assets/img/bg_special9.png") no-repeat;
        background-size: 100% auto;
        padding-top: 345px;
        padding-bottom: 60px;
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #ffffff;
            border-radius: 12px;
            margin: 0 30px;
            padding: 30px 12px;
            border: dashed 2px #5e7ed0;
            .video {
                width: 665px;
                height: 441px;
            }
            .classify-title {
                margin-top: 30px;
                .eng {
                    font-size: 41px;
                    color: #ababab;
                }
                .chinese {
                    font-size: 36px;
                    color: #333333;
                    margin-top: 20px;
                    font-weight: bold;
                    position: relative;
                    span{
                        color: #5e7ed0;
                    }
                    &.active{
                        &::before{
                            position: absolute;
                            width: 228px;
                            height: 5px;
                            background-color: #5e7ed0;
                            content: '';
                            top: 50px;
                            left: 50%;
                            transform: translate(-50%,0);
                        }
                    }
                }
            }
            .desc {
                margin: 30px 15px;
                font-size: 28px;
                line-height: 44px;
                color: #333333;
                text-align: justify;
            }
            .mine-list {
                display: flex;
                padding: 10px;
                flex-direction: row;
                flex-wrap: wrap;
                margin-top: 30px;
                .mine-item {
                    display: flex;
                    flex-direction: column;
                    width: 312px;
                    margin: 4px;
                    .item-image {
                        object-fit: scale-down;
                        width: 312px;
                        height: 232px;
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
</style>