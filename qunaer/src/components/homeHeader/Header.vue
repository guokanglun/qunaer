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
        <div class='header-right' @click="$router.push('/city')">

                <span>{{ currentCity }}</span> <span class='iconfont'>&#xe6aa;</span>

        </div>


    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: 'Header',
        computed:{
            ...mapState(['currentCity'])
        }
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
