<template>
    <div class="warpper">
        <headernav></headernav>
        <router-view/>
    </div>
</template>

<script>

    import headernav from './Components/HeaderNav'

    export default {
        name: 'Content',
        components: {
            headernav
        },
        data() {
            return {}
        }
    }
</script>

<style scoped lang="scss">
    .warpper {
        padding-top: 88px;
    }
</style>
