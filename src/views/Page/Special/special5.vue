<template>
    <div class="warrper">


        <div class="desc">
            <img src="../../../assets/img/special_desc5.png"/>
            新冠肺炎疫情发生以来，北京市社会组织认真学习习近
            平总书记重要指示精神，发挥资源动员、行业引领、专业技
            术、志愿服务等特长，积极有序参与疫情防控工作，以实际
            行动体现社会组织“服务国家、服务首都、服务社会、服务
            居民”的责任和担当，展现出社会组织独特优势，充分彰显
            了首都社会组织的责任担当和大爱情怀。在抗击新冠肺炎的
            斗争中，北京市社会组织立足基层需求、结合自身优势，用
            实际行动履行社会责任，成为疫情防控阻击战中一支不可或
            缺的重要力量。
        </div>
        <div class="desc-container">
            <img src="../../../assets/img/special_desc5.png"/>
            <div class="video-container">
                <video class="video" controls src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"></video>
            </div>
        </div>
        <div  class="classify-title">
            <img src="../../../assets/img/special_mine5.png"/>
        </div>
        <div class="mine-list">
            <div class="mine-item" :class="{active:index===0}" v-for="(item,index) in list" :key="index"
                 @click="toMienPreview(index)">
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
        name: "special5",
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
                }, {
                    title: '北京社会组织党建',
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603426606284&di=52e1e500c7e9a856d2076b89687818d5&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
                }, {
                    title: '北京社会组织党建',
                    url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603426606284&di=52e1e500c7e9a856d2076b89687818d5&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F64%2F52%2F01300000407527124482522224765.jpg'
                }, {
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
        background: url("../../../assets/img/bg_special5.png") no-repeat;
        background-size: 100% auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 388px;
        padding-bottom: 60px;

        .classify-title {
            width: 690px;
            height: 97px;
            margin-top: 65px;
            margin-left: 30px;
            margin-right: 30px;
            background-color: #55b0fd;
            border-radius: 8px 8px 0px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 459px;
                height: auto;
            }
        }
        .desc {
            width: 689px;
            background-color: #ffffff;
            border-radius: 12px;
            border: dashed 2px #5e7ed0;
            font-size: 28px;
            line-height: 44px;
            color: #333333;
            text-align: justify;
            padding: 30px;
            img{
                float: left;
                width: 254px;
                height: 266px;
                margin-right: 30px;
                margin-bottom: 30px;
            }
        }

        .desc-container {
            display: flex;
            width: 100%;
            flex-direction: row;
            align-items: center;
            padding: 30px;
            img{
                height: 255px;
                width: auto;
            }
            .video-container {
                width: 482px;
                height: 339px;
                margin-left: 30px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                background: url("../../../assets/img/bg_special_video5.png") no-repeat;
                background-size: cover;
                .video {
                    width: 430px;
                    height: 285px;
                }
            }
        }
        .mine-list {
            display: flex;
            margin: 0 30px;
            flex-direction: row;
            flex-wrap: wrap;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
            border: solid 2px #55b0fd;
            .mine-item {
                display: flex;
                flex-direction: column;
                width: 316px;
                margin: 13px;
                .item-image {
                    object-fit: scale-down;
                    width: 316px;
                    height: 238px;
                }
                .item-title {
                    text-align: center;
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