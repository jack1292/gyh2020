<template>
    <div class="detail-container">
        <div class="detail-title">{{detail.title}}</div>
        <div class="detail-time">发布时间：{{detail.create_time}}</div>
        <video class="detail-video" :src="detail.video_url" controls :poster="detail.images"
               v-if="detail.video_url" type="video/mp4"></video>
        <img class="detail-video" :src="detail.images" v-else/>
        <div class="detail-content" v-html="detail.content"></div>
    </div>
</template>

<script>
    import {getCharitableDetail} from "@/api";
    import config from '@/config'
    export default {
        name: "charitableDetail",
        data() {
            return {
                id: '',
                detail:{}
            }
        },
        created() {
            this.id = this.$route.query.id
            console.log(this.$route.query.id)
            this.init()
        },
        methods: {
            async init() {
                let _data = await getCharitableDetail(this.id)
                this.detail = _data.data
                this.detail.images=config.baseURL + this.detail.images
            },
        }
    }
</script>

<style scoped lang="scss">
    .detail-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        .detail-title{
            margin: 32px;
            text-align: center;
            font-size: 32px;
            color: #333333;
            font-weight: bold;
        }
        .detail-time{
            font-size: 16px;
            color: #999999;
        }
        .detail-video{
            width: 97%;
            object-fit: contain;
            margin-top: 20px;
        }
        .detail-content{
            text-indent: 52px;
            padding: 30px;
            font-size: 26px;
            color: #333333;
            line-height: 46px;
        }
    }
</style>