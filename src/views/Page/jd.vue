<template>
    <div class="jd-container">
        <router-link to="fwzx"><img class="jd-img" src="http://shzzpt.org.cn/web/assets/img/jd1.png"/></router-link>
        <router-link to="fhzx"><img class="jd-img" src="http://shzzpt.org.cn/web/assets/img/jd2.png"/></router-link>
        <router-link to="bbjd"><img class="jd-img" src="http://shzzpt.org.cn/web/assets/img/jd3.png"/></router-link>
        <router-link to="dbjd"><img class="jd-img" src="http://shzzpt.org.cn/web/assets/img/jd4.png"/></router-link>
    </div>
</template>

<script>
    export default {
        name: "jd"
    }
</script>

<style scoped lang="scss">
    .jd-container{
        padding: 26px;
        .jd-img{
            width: 100%;
            margin-bottom: 20px;
        }
    }
</style>