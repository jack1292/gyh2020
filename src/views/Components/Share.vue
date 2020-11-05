<template>
    <div>
        <van-overlay :show="showShare" @click="hide" :z-index="20">
            <div class="share-container">
                <img src="../../assets/img/img_share_arrow.png"/>
                <div>
                    点击右上角<br>将微店分享至朋友或朋友圈
                </div>
            </div>
        </van-overlay>
    </div>

</template>

<script>
    export default {
        name: "Share",
        props:{
            showShare: {
                type: Boolean,
                default: false
            },
        },
        methods:{
            hide(){
//                this.showShare =false
                this.$emit('setShare',false)
            }
        },
        watch:{
        }
    }
</script>

<style scoped lang="scss">
    .share-container{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: #ffffff;
        font-size: 38px;
        div{
            padding: 50px;
            line-height: 80px;
            text-align: center;
            align-self: center;
        }
    }
</style>