<template>
    <div class="location">
        <div class="left">
            <span class='iconfont'>&#xe63f;</span>
            <span> 定位失败 </span>
        </div>
        <div class="right">
            <span class='iconfont'>&#xe689;</span>
            <span> 必游榜单 </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeLocation"
    }
</script>

<style lang="less">
    @import '../../assets/less/common.less';
    .location{
        display: flex;
        height: 49rem/@baseFont;
        font-size: 16rem/@baseFont;
        line-height: 49rem/@baseFont;
        border-top: 1rem/@baseFont solid #ddd;
        margin-top: 20rem/@baseFont;
        .left{
            width: 50%;
            text-align: center;
        }
        .right{
            width: 50%;
            text-align: center;
            border-left: 1rem/@baseFont solid #ddd;
        }
    }
</style>
