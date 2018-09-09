# vue-cli-demo-beta

> 统一开发环境

```
//目前本人的开发环境。为了减低维护风险和各种报错，强烈建议团队开发保持统一环境
localhost:~ cc$ node -v
v10.1.0
localhost:~ cc$ npm -v
5.6.0
localhost:~ cc$ webpack -v
3.9.1
localhost:~ cc$ vue -V
2.9.6
```
>第一步：安装[nodejs](https://nodejs.org/zh-cn/download/releases/ "点击安装地址，已安装跳过")<font color=#eeeeee size=1>~~已安装跳过~~</font>

>第二步：安装vue-cli
```
win系统：任何空白处，按住Shift键不放，点击鼠标右键，打开命令框
mac os系统：打开终端
输入npm install -g vue-cli@2.9.6 [已安跳过]
```
>第三步：安装webpack
```
win系统：任何空白处，按住Shift键不放，点击鼠标右键，打开命令框
mac os系统：打开终端
输入npm install -g webpack@3.9.1 [已安跳过]
```
>第四步：下载本git，终端执行 npm install
```
1.兼容到IE9
2.已经处理了打包背景路径问题
3.已经处理了打包路径问题
4.实现动态加载路由
5.封装了请求方法
6.实现mock数据调用
7.css使用的是sass编写<style scoped lang="scss">
8.支持vuex，需要使用的话，在main.js里修改注释，使用方法在HelloWorld.vue文件
9.默认使用Eslint，可以在config/index.js里设置useEslint = false
```
>第五步：扩展其他插件
```
脚手架不带任何样式处理
需要什么UI框架，可以自行npm install，然后参照官方文档使用
在static/css目录有默认的重置rest.css，需要的话可以在index.html或main.js引入
移动端使用rem开发，只需在index.html里head加入
<script type="text/javascript">
	!function (e, t) {
		function n() {
			var n = l.getBoundingClientRect().width;
			t = t || 540, n > t && (n = t);
			var i = 100 * n / e;
			r.innerHTML = "html{font-size:" + i + "px;}"
		}
		var i, d = document, o = window, l = d.documentElement, r = document.createElement("style");
		if (l.firstElementChild) l.firstElementChild.appendChild(r);
		else {
		var a = d.createElement("div");
			a.appendChild(r), d.write(a.innerHTML), a = null
		} n(), o.addEventListener("resize", function () {
			clearTimeout(i), i = setTimeout(n, 300)
		}, !1), o.addEventListener("pageshow", function (e) {
			e.persisted && (clearTimeout(i), i = setTimeout(n, 300))
		}, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function (e {
			d.body.style.fontSize = "16px"
		}, !1)
	}(750, 750);
</script>
```