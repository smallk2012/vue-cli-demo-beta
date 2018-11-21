<template>
    <div class="page">
        <div class="demo" v-highlightFmt="key">{{msg}}</div>
        <p>{{num | kNumFmt | nullFmt}}</p>
        <p>{{num | nullFmt('元')}}</p>
        <p>{{num | bytesToSize}}</p>
        <input type="text" v-model="key" />
    </div>
</template>

<script>
// vue 不建议使用jq，如需要，请自行配置jq全局方法，不建议这样的导入操作
// import $ from '../../../static/js/jquery-1.11.1.min'
// import MD5 from '../../util/md5.js'

export default {
    name: 'Home',
    data () {
        return {
            num: 1234567.5850,
            key: 'come',
            msg: 'Welcome'
        }
    },
    mounted () {
        this.$api.log('重写后的toFixed:', this.num.toFixed(2))
    }
}

</script>

<style scoped lang="scss">
@import '../../assets/_var.scss';
.demo /deep/ {
    width: px2rem(100px);
    height: px2rem(50px);
    font-size: px2rem(24px);
    i {
        color: #ff0000;
    }
}
</style>
