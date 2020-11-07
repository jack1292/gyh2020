<template>
    <div class="detail-continer">
        <div class="detail-title">慈善法宣讲</div>
        <img class="detail-img" src="../../assets/img/2.jpeg" @click="toPreview(0)">
        <img class="detail-img" src="../../assets/img/1.jpeg" @click="toPreview(1)">
    </div>
</template>

<script>

    import {ImagePreview} from "vant";

    export default {
        name: "csf",
        components: {
            [ImagePreview.Component.name]: ImagePreview.Component,
        },
        methods:{
            toPreview(position){
                ImagePreview({
                    images: [
                        'http://shzzpt.org.cn/web/assets/img/2.jpeg',
                        'http://shzzpt.org.cn/web/assets/img/1.jpeg',
                    ],
                    startPosition: position,
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .detail-continer{
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #ffffff;
        .detail-title{
            margin: 32px;
            font-size: 32px;
            color: #333333;
            font-weight: bold;
        }
        .detail-img{
            width: 97%;
            margin-top: 20px;
        }
    }
</style>