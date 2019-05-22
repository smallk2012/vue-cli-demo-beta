<template>
    <div class="page">
        <div class="demo">{{msg}}</div>
        <button @click="clickLoginEvt">登录</button>
        <div style="margin-top: 20px;">flex常用示范</div>
        <div class="box">
            <div class="item">
                <p>自动</p>
            </div>
            <div class="item">自动</div>
            <div class="item">自动</div>
            <div class="item" style="width:100px;background-color: #ccc;">固定100</div>
        </div>
        <div class="box" style="flex-wrap: nowrap;align-items: flex-start">
            <div class="item">
                <p>自动</p>
            </div>
            <div class="item">自动</div>
            <div class="item">自动</div>
            <div class="item" style="width:100px;background-color: #ccc;">固定100</div>
        </div>
        <div class="box" style="flex-wrap: nowrap;align-items: flex-start">
            <div class="item" style="flex-shrink: 1;">
                <p>自动</p>
            </div>
            <div class="item" style="flex-shrink: 1;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">自动自动</div>
            <div class="item" style="flex-shrink: 1;">自动</div>
            <div class="item" style="width:100px;background-color: #ccc;">固定100</div>
        </div>
        <div class="sss">
            <div class="ss">自动</div>
            <div class="s">固定100</div>
        </div>
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
            this.$api.get(
                this.$api.url.login,
                res => {
                    this.$session.set('token', 'cC')
                    this.$router.push({ path: '/home', query: { a: 'aaa' } })
                    // this.$router.push({name:"home",params:{a:'aaa'}})
                }
            )
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
.box {
    width: 200px;
    height: 120px;
    background-color: #58a;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: flex-start;
    flex-wrap: wrap;
}
.item {
    width: 50px;
    height: 50px;
    line-height: 50px;
    background-color: #fb3;
    flex-shrink: 0;
}
.sss {
    display: -webkit-box;
    margin-top: 10px;
    .ss {
        -webkit-box-flex: 1;
        background-color: #58a;
    }
    .s {
        width: 100px;
        background-color: #fb3;
    }
}
</style>
