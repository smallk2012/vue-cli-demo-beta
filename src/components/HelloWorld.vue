<template>
    <div class="page">
        <div class="demo">{{msg}}</div>
        <input type="text" v-model="keyword" placeholder="测试vuex双向绑定" />
    <div>{{keyWord}}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import tool from '../util/tool'
import __aw__ from '../util/md5.js'

export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: '如何使用vuex，自行看文档'
        }
    },
    computed: {
        ...mapGetters('app', {
            keyWord: 'keyWord',
            loading: 'islogined'
        }),
        keyword: {
            get () {
                return this.keyWord
            },
            set (value) {
                this.$store.dispatch('app/setKeyWord', value)
            }
        }
    },
    methods: {
        demo () {
            this.$api.log(__aw__(tool.kNumFormat(123456)))
            this.$api.log(this.$api.url)
            this.$api.get(
                this.$api.url.ip,
                res => {
                },
                { a: 'xxds' }
            )
            this.$api.get(
                this.$api.url.ip,
                res => {
                },
                { a: 'xxds' }
            )
            this.$api.post(
                '/post',
                res => {
                },
                { a: 'cc' }
            )
        }
    },
    mounted () {
        this.demo()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>
