<template>
    <div class="warrper">

        <div class="desc-container">
            <div class="video-container">
                <video class="video" controls src="https://www.runoob.com/try/demo_source/mov_bbb.mp4"></video>
            </div>
            <div class="desc">
                社会组织是现代文明社会的标志和不可或缺的细胞，是
                北京建设国际一流和谐宜居之都的重要节拍器。党的十九大
                报告对新时代的社会组织工作、志愿服务工作和公益慈善事
                业提出了新的期待和要求。在北京市委市政府的领导下，北
                京市社会组织以习近平新时代中国特色社会主义思想为指
                导，在北京公益事业发展中，起到了巨大的推动作用。
                近年来，北京围绕“五个慈善”（即全民慈善、效能慈
                善、惠民慈善、诚信慈善、创新慈善）建设，立足实际、突
                出重点，全面提升“慈善北京”发展水平，不断开创以法促
                善、守法行善、依法兴善的新局面。
                一直以来，北京市慈善组织在服务困难群众，弘扬德行
                善举、促进社会和谐稳定等方面都发挥着积极作用，尤其是
                在精准扶贫、脱贫攻坚中表现突出。截至2020年7月，全
                市登记认定市级慈善组织778家。市级慈善组织和红十字会
                中具有公开募捐资格的有51家，包括49家基金会和北京市
                慈善协会、北京市红十字会。
                “有困难找志愿者、有时间做志愿者”“我为人人、人
                人为我”已经成为许多市民日常生活方式和首都精神文明
                建设的亮丽风景。截至2020年9月，全市通过全国志愿服
                务信息系统实名注册的志愿者已达441.8万人，注册的志愿
                服务团体有7.67万个、法人组织899个，累计发布志愿服
                务项目超过41.8万个，记录服务时间超过4.7亿小时。
                北京市公益慈善与志愿服务事业的健康持续发展，离不
                开规范有序的管理和监督。未来，北京市社会组织将紧密团
                结在以习近平同志为核心的党中央周围，在习近平新时代中
                国特色社会主义思想的指引下，牢记使命、凝心聚力、担当
                实干，切实担负推进新时代公益慈善与志愿服务事业的职责
                使命。
            </div>
        </div>

        <img class="classify-title" src="../../../assets/img/special_mine4.png"/>
        <div class="mine-list">
            <div class="mine-item active" @click="toMienPreview(0)">
                <img class="item-image"  :src="list[0].url"/>
                <div class="item-title">{{list[0].title}}</div>
            </div>
            <div>
                <div class="mine-item" @click="toMienPreview(1)">
                    <img class="item-image"  :src="list[1].url"/>
                    <!--<div class="item-title">{{list[1].title}}</div>-->
                </div>
                <div class="mine-item" @click="toMienPreview(2)">
                    <img class="item-image"  :src="list[2].url"/>
                    <!--<div class="item-title">{{list[2].title}}</div>-->
                </div>
            </div>
            <div class="mine-item" v-for="(item,index) in list.slice(3)" :key="index" @click="toMienPreview(index)">
                <img class="item-image"  :src="item.url"/>
                <!--<div class="item-title">{{item.title}}</div>-->
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
        name: "special4",
        data() {
            return {
                list: [{
                    title: '北京社会组织党建',
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3443714613,873961460&fm=26&gp=0.jpg'
                }, {
                    title: '北京社会组织党建',
                    url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1900339476,2516985817&fm=26&gp=0.jpg'
                }, {
                    title: '北京社会组织党建',
                    url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2346282507,2171850944&fm=26&gp=0.jpg'
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
        background: url("../../../assets/img/bg_special4.png") no-repeat;
        background-size: 100% auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 377px;
        padding-bottom: 60px;

        .classify-title {
            width: 692px;
            height: auto;
            margin-top: 65px;
        }
        .desc-container {
            width: 692px;
            background-color: #ffffff;
            border-radius: 12px;
            border: dotted 2px #e63f5d;
            padding: 20px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            .desc {
                font-size: 28px;
                line-height: 44px;
                color: #333333;
                margin: 50px 30px;
                text-align: justify;
            }
            .video-container{
                width: 100%;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 2px;
                background: url("../../../assets/img/bg_special_video4.png") no-repeat;
                background-size: 100% 100%;
                .video {
                    width: 503px;
                    height: 334px;
                }
            }
        }

        .mine-list {
            display: flex;
            padding: 26px;
            margin-top: 50px;
            flex-direction: row;
            flex-wrap: wrap;
            .mine-item {
                width: 224px;
                height: 168px;
                position: relative;
                margin: 4px;
                &.active{
                    width: 456px;
                    height: 340px;
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
                    text-align: left;
                    padding-left: 12px;
                    font-size: 26px;
                    color: #ffffff;
                    width: 100%;
                    height: 49px;
                    line-height: 49px;
                    background-color: #00000088;
                }
            }
        }
    }
</style>