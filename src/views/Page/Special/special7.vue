<template>
    <div class="warrper">
        <video class="video" controls src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"></video>
        <div class="classify-title">
            <div class="eng">SPECIAL INTRODUCTION</div>
            <div class="chinese">专题介绍</div>
        </div>
        <div class="desc">
            社会组织在促进和谐稳定、参与社会管理、提供公共服
            务等方面，都发挥着重要的作用。近年来，北京市社会组织
            稳步发展，秉持非营利性、公益性和公共性原则，在教育科
            技、健康卫生、文化体育、社会福利、社会治理等公共服务
            领域发挥了重要作用，已成为社会治理和社会事业的重要主
            体，充分发挥了社会组织在公共服务供给中的独特功能和积
            极作用，有效地激发了社会活力、促进社会和谐稳定。
            未来，北京市社会组织将继续以习近平新时代中国特色
            社会主义思想为指导，全面贯彻中共中央办公厅、国务院办
            公厅颁布的《行业协会商会与行政机关脱钩总体方案》，通
            过深化改革，发挥社会组织专业性、自治性、独立性等优势，
            实现政府治理和社会调解、居民自治良性互动。
        </div>
        <div class="classify-title">
            <div class="eng">ORGANIZATIONAL STYLE</div>
            <div class="chinese">社会组织风采</div>
        </div>
        <div class="mine-list">
            <div class="mine-item" v-for="(item,index) in list" :key="index" @click="toMienPreview(index)">
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
        name: "special7",
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
        background: url("../../../assets/img/bg_special7.png") no-repeat;
        background-size: 100% auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 309px;
        padding-bottom: 60px;
        .video {
            width: 707px;
            height: 447px;
            background-color: #1f3d7b;
            box-shadow: 0px 0px 12px 0px
            #c0c0c0;
            border-radius: 12px;
            border: solid 3px #ffffff;
            margin-top: 52px;
            margin-bottom: 40px;
        }
        .classify-title {
            align-self: flex-start;
            margin-top: 30px;
            margin-left: 30px;
            .eng {
                font-size: 41px;
                color: #ababab;
            }
            .chinese{
                font-size: 42px;
                font-weight: bold;
                color: #333333;
                margin-top: 20px;
            }
        }
        .desc {
            margin: 30px;
            font-size: 28px;
            line-height: 44px;
            color: #333333;
            text-align: justify;
        }
        .mine-list {
            display: flex;
            padding: 20px;
            flex-direction: row;
            flex-wrap: wrap;
            .mine-item {
                display: flex;
                flex-direction: column;
                width: 352px;
                margin-top: 16px;
                /*margin: 2px;*/
                .item-image {
                    object-fit: scale-down;
                    width: 352px;
                    height: 254px;
                }
                .item-title {
                    padding-left: 9px;
                    font-size: 26px;
                    color: #000000;
                    width: 100%;
                    height: 49px;
                    line-height: 49px;
                }
            }
        }
    }
</style>