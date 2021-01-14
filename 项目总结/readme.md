### 1. 初始化项目

 1. 创建项目

```
vue create qunaer
```

2. 修改package.json

   个人习惯

```json
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "start": "npm  run serve"
  }
```

3. 项目运行，引入reset.css

`npm start`

mian.js 导入  `import './assets/reset.css'`



### 2. 移动端适配问题

##### 1. 引入flexible.js 文件

结合rem 适配使用



##### 2. 定义less通用样式

设计稿为750的时候，也就是在iPhone6/7/8 下，flexible 定义html的字体大小为 37.5

common.less

```less
@bgColor : #00bcd4;
@textColor : #fff;
@baseFont: 37.5; 
```



##### 3. header 布局

```vue
<template>
    <div class='header'>
        <div class='header-left'>
			<span class='iconfont'>
				&#xe624;
			</span>
        </div>
        <div class='header-search'>
			<span class='iconfont'>
				&#xe632;
			</span>
            <span>输入城市/景点/游玩主题</span>
        </div>
        <div class='header-right'>
            <span>北京</span> <span class='iconfont'>&#xe6aa;</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped lang='less'>
    @import '../../assets/less/common.less';
    .header{
        display: flex;
        height: 33rem / @baseFont;
        line-height: 33rem / @baseFont ;
        font-size: 14rem / @baseFont;
        background-color: @bgColor;
        color:@textColor;
        .header-left{
            width: 20rem / @baseFont;
            text-align: center;
            line-height:20rem / @baseFont ;
            margin: 5rem/@baseFont 5rem/@baseFont;
            span{
                font-size:  14rem / @baseFont;
            }
        }
        .header-search{
            flex: 1;
            background-color: @textColor;
            margin: 5rem/@baseFont 0;
            line-height: 23rem/@baseFont;
            padding-left: 10rem/@baseFont;
            color:#ccc;
            border-radius: 10rem/@baseFont;
            span{
                font-size:  14rem / @baseFont;
            }
        }
        .header-right{
            width: 30 / @baseFont;
            margin: 0 5rem/@baseFont;
            span{
                font-size:  14rem / @baseFont;
            }
        }
    }
</style>

```



### 3. 首页swiper

##### 1. 用法

`npm i --save swiper@4`

```js
// https://www.swiper.com.cn/demo/030-pagination.html
mounted() {
    new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
        },
        loop:true
    })
}
```



### 4. 首页icon轮播布局

```js
icons(){
    const {homeiconsList} = this;
    let iconss = [];
    homeiconsList.forEach((icon, index)=>{
        const ids = Math.floor(index / 8); // 0/1
        if(!iconss[ids]) iconss[ids] = [];
        iconss[ids].push(icon)
    });
    return iconss
}
```



### 5. mock数据

模块： mockjs  axios

只有北京，上海数据







### 遇到的问题

1. 一个页面多处使用swiper 污染问题

添加不同的类区分



2. 组件拆分

不能盲目拆分组件，引起不必要的麻烦



3. 致命问题

使用better-scroll 时，wrapper 里只能有一个div， 如果出现多个div，可以在外层用一个div将这些div包裹起来；

否则better-scroll 不会起作用

这个bug花了不少时间

