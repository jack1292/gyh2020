<template>
    <div class="bank-container">
        <div class="bank-item" v-if="type == 1">
            <img class="bank-logo" src="../../assets/img/sr.png">
            <div class="bank-content">
                中国建设银行始终贯彻落实党中央、国务院扶贫要求，以帮助和田地区经济社会发展和贫困群众脱贫为己任。中国建设银行根据2018年10月北京市分行与北京市扶贫支援办、北京市支援合作促进会、首农食品集团有限公司签署的《消费扶贫电商平台(双创中心)战略合作协议》约定，建行在善融商务电商平台搭建双创中心线下扶贫主体--北京消费扶贫特色产品馆，线上建设银行善融商务扶贫特色产品馆也同步开馆营业。线上线下相互配合将金融科技与互联网思维充分融合，拓宽扶贫之路。
            </div>
            <img class="bank-img" src="../../assets/img/sr1.png">
            <img class="bank-img" src="../../assets/img/sr2.png">
        </div>
        <div class="bank-item" v-if="type == 2">
            <img class="bank-logo big" src="../../assets/img/dp.png">
            <div class="bank-content">
                德朴农业将在重庆市扶贫办，重庆市人民政府驻北京办事处
                ，北京重庆企业商会等有关领导的指导和支持下，
                社会各界爱心扶贫志愿者的共同参与和帮助下，以消费扶贫、
                扶贫专柜为切入点，以展销重庆优质扶贫产品为核心业务，
                立足北京，辐射周边及全国，全面融入“脱贫攻坚”和“乡村振兴”国家战略，
                依托首都的独特优势，努力发展为重庆扶贫产品综合服务品牌企业。
                同时抓好北京重庆扶贫产品展销中心的品牌运营，把展销中心打造成为展示重庆扶贫成就
                ，展销重庆扶贫产品，展现重庆农业龙头企业形象，
                展示重庆旅游资源特别是贫困地区旅游资源的重要平台。
            </div>
            <img class="bank-img" src="../../assets/img/dp1.png">
            <img class="bank-img" src="../../assets/img/dp2.png">
        </div>
    </div>
</template>

<script>

    export default {
        name: "bank",
        data() {
            return {
                type:1
            }
        },
        created() {
            this.type = this.$route.query.type
        },
    }
</script>

<style scoped lang="scss">
    .bank-container{
        background: #ffffff;
        padding: 24px;
        .bank-item{
            display: flex;
            flex-direction: column;
            align-items: center;
            .bank-content{
                color: #333333;
                font-size: 26px;
                line-height: 36px;
                text-indent: 52px;
                padding: 40px 0px;
            }
            .bank-logo{
                height: 80px;
                &.big{
                    height: 180px;
                }
            }
            .bank-img{
                width: 100%;
                margin-bottom: 20px;
            }
        }
    }
</style>