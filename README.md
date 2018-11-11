# vue-cli-demo-beta

```
//[*]为本脚手架每次新项目中必动地方，反之建议不需要动。

├── build/                      
│   └── ...
├── config/                     
│   ├── index.js                # 跨域配置[*]
│   └── ...
├── src/
│   ├── api/                    
│   │   ├── config/             
│   │   │   └── index.js        # 请求配置[*]
│   │   ├── interceptors/             
│   │   │   └── index.js        # 请求拦截器
│   │   ├── lib/       
│   │   │   └── ...             # 封装常用方法库
│   │   ├── url/                
│   │   │   └── index.js        # 请求链接[*]
│   │   └── index.js            # 请求方法
│   ├── assets/                 
│   │   ├── _var.scss           # css配置
│   │   └── ...                 # 存放webpack打包处理的资源，如需要压缩的图片。
│   ├── components/             
│   │   └── ...                 # 项目组件
│   ├── modules/                
│   │   └── ...                 # 页面模块组件
│   ├── pages/                  
│   │   └── ...                 # 页面[*]
│   ├── router/                 
│   │   ├── config              # 路由页面配置[*]
│   │   └── index.js            # 路由页面逻辑处理[*]
│   ├── util/                   # util下存放的都是用户的自定义方法
│   │   ├── md5.js              # md5加密方法
│   │   └── tool.js             # 用户自定义的方法
│   ├── vuex/                 
│   │   ├── modules/
│   │   │   └── ...             # 数据文件
│   │   └── store.js            # 使用配置
│   ├── App.vue                 # 页面入口,可以把全局样式放这里[*]
│   └── main.js                 # 全局插件引入入口[*]
├── static/                     
│   ├── css/                 
│   │   └── ...                 # 一般都是静态css，不需要压缩的
│   ├── img/ 
│   │   └── ...                 # 整个项目图片资源
│   ├── js/ 
│   │   └── ...                 # 不需求npm i 就可以直接使用的js
│   └── mock/                   
│       └── ...                 # 存放所有mock数据的json
├── .babelrc                    # babel config
├── .editorconfig.js            # editor config
├── .eslintrc.js                # eslint config
├── index.html                  # index.html template
└── package.json                # build scripts and dependencies
```

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
6.实现mock数据调用，默认开启
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
https://www.cnblogs.com/Mrs-pao/p/7932207.html
<script>
    //designWidth:设计稿的实际宽度值，需要根据实际设置
    //maxWidth:制作稿的最大宽度值，需要根据实际设置
    //这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
    ; (function (designWidth, maxWidth) {
        var doc = document,
            win = window,
            docEl = doc.documentElement,
            remStyle = document.createElement("style"),
            tid;

        function refreshRem() {
            var width = docEl.getBoundingClientRect().width;
            maxWidth = maxWidth || 540;
            width > maxWidth && (width = maxWidth);
            var rem = width * 100 / designWidth;
            remStyle.innerHTML = 'html{font-size:' + rem + 'px !important;}';
        }

        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(remStyle);
        } else {
            var wrap = doc.createElement("div");
            wrap.appendChild(remStyle);
            doc.write(wrap.innerHTML);
            wrap = null;
        }
        //要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
        refreshRem();

        win.addEventListener("resize", function () {
            clearTimeout(tid); //防止执行两次
            tid = setTimeout(refreshRem, 300);
        }, false);

        win.addEventListener("pageshow", function (e) {
            if (e.persisted) { // 浏览器后退的时候重新计算
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        }, false);

        if (doc.readyState === "complete") {
            doc.body.style.fontSize = "16px";
        } else {
            doc.addEventListener("DOMContentLoaded", function (e) {
                doc.body.style.fontSize = "16px";
            }, false);
        }
    })(750, 750);
</script>
//压缩以后的
<script type="text/javascript">
    //引入该flexible.min.js
    !function (e, t) { function n() { var n = l.getBoundingClientRect().width; t = t || 540, n > t && (n = t); var i = 100 * n / e; r.innerHTML = "html{font-size:" + i + "px !important;}" } var i, d = document, o = window, l = d.documentElement, r = document.createElement("style"); if (l.firstElementChild) l.firstElementChild.appendChild(r); else { var a = d.createElement("div"); a.appendChild(r), d.write(a.innerHTML), a = null } n(), o.addEventListener("resize", function () { clearTimeout(i), i = setTimeout(n, 300) }, !1), o.addEventListener("pageshow", function (e) { e.persisted && (clearTimeout(i), i = setTimeout(n, 300)) }, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener("DOMContentLoaded", function (e) { d.body.style.fontSize = "16px" }, !1) }(750, 750);
</script>
```