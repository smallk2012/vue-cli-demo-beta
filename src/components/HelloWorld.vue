<template>
    <div class="page">
        <div class="demo">{{msg}}</div>
        <input type="text" v-model="keyword" placeholder="测试vuex双向绑定" />
        <div>{{keyWord}}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'HelloWorld',
    data () {
        return {
            msg: 'demo如何使用vuex，自行看文档'
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
            this.$log(this.$api.url)
            this.$api.get(
                this.$api.url.login,
                res => {
                    this.$log('123', '32es', res)
                },
                { acc: 'cC' }
            )
            this.$api.get(
                this.$api.url.login,
                res => {
                },
                { acc: 'cC' }
            )
            this.$local.set('cC', '2018')
            this.$log(this.$local.get('cC'))
            this.$session.set('cC', 2018)
            this.$log(this.$session.get('cC'))
        }
    },
    mounted () {
        this.demo()
    }
}
</script>

<style scoped lang="scss">
</style>
