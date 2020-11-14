<template>
    <div class="warpper">
        <headernav></headernav>
        <router-view/>
    </div>
</template>

<script>

    import headernav from './Components/HeaderNav'
import {share} from '@/tools/share'
    export default {
        name: 'Content',
        components: {
            headernav
        },
        data() {
            return {}
        },
        created(){
            share('2020北京公益慈善汇展', '欢迎观看2020北京公益慈善汇展', 'http://cshadmin.shzzpt.org.cn/defaultLogo/default_logo.png', window.location.href,'')
        }
    }
</script>

<style scoped lang="scss">
    .warpper {
        padding-top: 88px;
    }
</style>
