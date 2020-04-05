<template>
    <div class="page">
        <div v-for="(item,index) in flexs" :key="index">
            <p>{{item}}</p>
            <div class="flex-group" :class="`${item}`">
                <div class="flex-item item-1">
                    <span>1</span>
                </div>
                <div class="flex-item item-2">
                    <span>2</span>
                </div>
                <div class="flex-item item-3">
                    <span>3</span>
                </div>
                <div class="flex-item item-4">
                    <span>4</span>
                </div>
                <div class="flex-item item-5">
                    <span>5</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data () {
        return {
            flexs: ['block','flex','inline-flex']
        }
    },
    mounted () {

    }
}

</script>

<style scoped lang="scss">
.flex-group {
    display: block;
    padding: 10px;
    background-color: #ccc;
    &.flex{
        display: flex;
    }
    &.inline-flex{
        display: inline-flex;
    }
    .flex-item {
        text-align: center;
        color: #fff;
        &.item-1 {
            background-color: #fb3;
        }
        &.item-2 {
            background-color: #58a;
        }
        &.item-3 {
            background-color: crimson;
        }
        &.item-4 {
            background-color: blueviolet;
        }
        &.item-5 {
            background-color: grey;
        }
    }
}
</style>
