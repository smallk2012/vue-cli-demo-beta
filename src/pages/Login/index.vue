<template>
    <div class="page">
        <div class="demo">{{msg}}</div>
        <button @click="clickLoginEvt">登录</button>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data () {
        return {
            msg: 'Welcome Login'
        }
    },
    methods: {
        clickLoginEvt () {
            this.$session.set('token', 'cC')
            this.$router.push({ path: '/home', query: { a: 'aaa' } })
            // this.$router.push({name:"home",params:{a:'aaa'}})
        }
    },
    mounted () {

    }
}

</script>

<style scoped lang="scss">
.demo {
    width: 200px;
    height: 50px;
    font-size: 12px;
}
</style>
