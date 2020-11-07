<template>
    <div class="alleviation-warpper">
        <div class="classify-name">{{data.add_id}}</div>
        <div class="goods-list">
            <a :href="items.url" v-for="(items,index) in data.data" :key="index" class="alleviation-item"
               target="_blank">
                <div>
                    <img :src="items.image" alt="">
                </div>
                <p class="ovHide"><b>¥{{items.price}}</b>{{items.title}}</p>
            </a>
        </div>
    </div>
</template>

<script>
    import {queryGoodsList} from "@/api";

    export default {
        name: "goods",
        data() {
            return {
                id: '',
                data: [],
            }
        },
        created() {
            this.id = this.$route.query.id
            this.init()
        },
        methods: {
            async init() {
                let _data = await queryGoodsList(this.id, 1, 10000)
                this.data = _data.data
            },
        }
    }
</script>

<style scoped lang="scss">
    .alleviation-warpper {
        background: #ffffff;
        padding: 24px;
        .classify-name {
            font-size: 32px;
            line-height: 54px;
            font-weight: bold;
            color: #333333;
            padding-bottom: 30px;
        }
        .goods-list {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            .alleviation-item {
                display: block;
                width: 334px;
                margin: 30px 0;
                background-color: #f8f0f0;
                div {
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    width: 334px;
                    height: 224px;
                    overflow: hidden;
                    img {
                        display: block;
                        width: 334px;
                    }
                }
                p {
                    height: 58px;
                    padding: 0 15px;
                    line-height: 58px;
                    font-size: 24px;
                    b {
                        color: #e2412e;
                        margin-right: 10px;
                    }
                }
            }
        }
    }
</style>