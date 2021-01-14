<template>
    <div class="like">
        <div class="like-top">
            <img src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="">
            <span>猜你喜欢</span>
        </div>
        <div class="like-list">
            <div class="like-item" v-for="(item, index) in homelikeList" :key="index">
                <div class="left">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="right">
                    <p class="title">{{ item.title }}</p>
                    <p class="comment"> {{ item.msg }} 条评论 </p>
                    <p class="price-wrap">
                        <span class="price"> ￥<span>{{ item.pre }}</span> 起 </span>
                        <span class="position"> {{ item.map }} </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "HomeLike",
        computed:{
            ...mapState(['homelikeList'])
        }
    }
</script>

<style lang="less">
    @import '../../assets/less/common.less';
    .like{
        border-top: 10rem/@baseFont solid #ddd;
        .like-top{
            width: 100%;
            height: 47rem/@baseFont;
            margin: 5rem/@baseFont;
            img{
                width: 15rem/@baseFont;
                height: 15rem/@baseFont;
            }
            span{
                font-size: 16rem/@baseFont;
            }
        }
        .like-list{
            .like-item{
                width: 100%;
                height: 128rem/@baseFont;
                /*background-color: #00bcd4;*/
                display: flex;
                .left{
                    flex:1;
                    padding: 10rem/@baseFont;
                    img{
                        width: 100rem/@baseFont;
                        height: 100rem/@baseFont;
                    }
                }
                .right{
                    flex:3;
                    display: flex;
                    height: 100rem/@baseFont;
                    flex-direction: column;
                    justify-content: space-around;
                    margin-top: 10rem/@baseFont;
                    .title{
                        font-size: 16rem/@baseFont;
                    }
                    .comment{
                        font-size: 12rem/@baseFont;
                    }

                    .price-wrap{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .price{
                            font-size: 12rem/@baseFont;
                            span{
                                color: #ff8300;
                                font-size: 20rem/@baseFont;
                            }
                        }
                        .position{
                            font-size: 12rem/@baseFont;
                            margin-right: 20rem/@baseFont;
                        }

                    }

                }
            }
        }
    }
</style>
