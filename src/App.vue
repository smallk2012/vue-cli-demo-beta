<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style lang="scss">
//这里写的是自己的一些全局样式
* {
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,body,#app{
  position: relative;
  display: block;
  width: 100%;
  min-height: 100%;
}

html,
body {
    font-family: 'PingFang SC','Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
