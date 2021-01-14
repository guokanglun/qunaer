<template>
    <div class="swiper-container container2">
        <div class="swiper-wrapper">
            <div class="swiper-slide  icon-list" v-for="(item, index) in icons" :key="index">
                <div class="icon-item" v-for="(icon, index) in item" :key="index">
                    <img :src="icon.imgUrl" alt="">
                    <span>{{ icon.title }}</span>
                </div>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>


</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/dist/css/swiper.min.css'
    import {mapState}  from 'vuex'
    export default {
        name: "HomeIcon",

        computed:{
            ...mapState(['homeiconsList']),
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
        },


        watch: {
            icons(value){
                this.$nextTick(()=>{
                    new Swiper('.container2', {
                        pagination: {
                            el: '.swiper-pagination',
                        },
                    })
                })

            }

        },
    }
</script>

<style lang="less" scoped>
    @import '../../assets/less/common.less';
    .icon-list{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        .icon-item{
            width: 25%;
            height: 80rem / @baseFont;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img{
                width: 55rem / @baseFont;
                height: 55rem / @baseFont;
            }
            span{
                font-size: 14rem / @baseFont;
                text-align: center;
            }
        }
    }
</style>
