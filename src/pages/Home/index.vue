<template>
  <div class="page">
    <div class="demo">{{msg}}</div>
    <input type="text" v-model="keyword" placeholder="测试vuex双向绑定" />
    <div>{{keyWord}}</div>
  </div>
</template>

<script>
// vue 不建议使用jq，如需要，请自行配置jq全局方法，不建议这样的导入操作
// import $ from '../../util/jquery-1.11.1.min'
import tool from '../../util/tool'
export default {
    name: 'Home',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    mounted () {
        let _this = this
        // http://www.runoob.com/jquery/ajax-ajax.html
        /*
        $.ajax({
            type: 'GET',
            url: 'http://httpbin.org/ip',
            data: {
                acc: 'cc',
                psw: '123456'
            },
            success: function (result) {
                _this.log(result)
            }
        })
        */
        // 为什么不直接$log，而是加在$api，只是体现出处,方便维护
        _this.$api.log(tool.bytesToSize(1100, 2))
        _this.$api.log(tool.highlightFormat('我的w 是w你', 'w'))
        _this.$api.log(tool.kNumFormat(null))
        _this.$api.log(tool.numUnitFormat(1234567890))
    }
}

</script>

<style scoped lang="scss">
@import '../../assets/_var.scss';
.demo {
    width: px2rem(100px);
    height: px2rem(50px);
    font-size: px2rem(24px);
}
</style>
