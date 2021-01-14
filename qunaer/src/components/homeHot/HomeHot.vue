<template>
    <div class="hot">
        <div class="hot-header">
            <div class="left">
                <img src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
                <span>本周热门榜单</span>
            </div>
            <div class="right">
                <span>全部榜单</span>
                <div></div>
            </div>
        </div>
        <div class="hot-content">
            <div class="hot-item" v-for="(item, index) in homehotList">
                <img :src="item.imgUrl" alt="">
                <p>{{ item.title }}</p>
                <p><span>￥{{ item.mark }}</span>起</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "HomeHot",
        computed:{
            ...mapState(['homehotList'])
        }
    }
</script>

<style lang="less">
    @import '../../assets/less/common.less';
    .hot{
        border-top: .3rem solid #ddd;
        .hot-header{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 47rem/@baseFont;
            .left{
                margin: .1rem;
                span{
                  font-size: 16rem/@baseFont;
                }
                img{
                    width: 15rem/@baseFont;
                    height: 15rem/@baseFont;
                }
            }
            .right{
                display: flex;
                justify-content: center;
                width: 62rem/@baseFont;
                height: 15rem/@baseFont;
                align-content: center;
                margin-right: .5rem;
                span{
                    font-size: 12rem/@baseFont;
                }
                div{
                    width: 6rem/@baseFont;
                    height: 6rem/@baseFont;
                    border-top: 1rem/@baseFont solid black;
                    border-right: 1rem/@baseFont solid black;
                    transform: rotate(45deg);
                    margin-top: 0.05rem;
                    margin-left: .1rem;
                }
            }
        }
        .hot-content{
            overflow-x: scroll;
            white-space: nowrap;
            overflow-y: hidden;
            height: 161rem/@baseFont;
            .hot-item{
                width: 100rem/@baseFont;
                height: 141rem/@baseFont;
                /*background-color: red;*/
                display: inline-block;
                margin-left: 10rem/@baseFont;
                padding-bottom: 5rem/@baseFont;
                img{
                    width: 100rem/@baseFont;
                    width: 100rem/@baseFont;
                }
                p{
                    font-size: 12rem/@baseFont;
                    text-align: center;
                    margin-top: 5rem/@baseFont;
                    span{
                        color:#ff8300
                    }
                }
            }
        }
    }
    ::-webkit-scrollbar{
        height: 5rem/@baseFont !important;
    }
    ::-webkit-scrollbar-track-piece{
        background-color: white !important;
    }
</style>
