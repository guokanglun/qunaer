<template>
    <div class="swiper-container container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in homeSwiper" :key="index">
                <img :src="item.imgUrl" alt="">
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import {mapState} from  'vuex'
    export default {
        name: "HomeSwiper",
        computed:{
          ...mapState(['homeSwiper'])
        },
        watch:{  // 监视swiperData数据变化
            homeSwiper(value){
                this.$nextTick(()=>{  // dom 更新后创建swiper对象
                    new Swiper('.container', {
                        pagination: {
                            el: '.swiper-pagination',
                        },
                        loop:true,
                        autoplay:{
                            delay: 1500
                        }
                    })
                })
            }
        }


    }
</script>

<style lang="less" scoped>
    @import '../../assets/less/common.less';
    .container{

        width: 100%;
        height: 100 rem /@baseFont;
        img{
            width: 100%;
            height: 100%;
        }
    }
</style>
