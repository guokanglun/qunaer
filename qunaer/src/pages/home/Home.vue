<template>
    <div>
        <Header></Header>
        <HomeSwiper></HomeSwiper>
        <HomeIcon></HomeIcon>
        <HomeLocation></HomeLocation>
        <HomeActive></HomeActive>
        <HomeHot></HomeHot>
        <HomeLike></HomeLike>
    </div>
</template>

<script>
    import Header from "../../components/homeHeader/Header";
    import HomeSwiper from "../../components/homeSwiper/HomeSwiper";
    import HomeIcon from "../../components/homeIcon/HomeIcon";
    import HomeLocation from "../../components/homeLocation/HomeLocation";
    import HomeActive from "../../components/homeActive/HomeActive";
    import HomeHot from "../../components/homeHot/HomeHot";
    import HomeLike from "../../components/homeLike/HomeLike";
    import {mapState} from 'vuex'
    export default {
        name: "Home",
        components:{
            Header, HomeSwiper, HomeIcon, HomeLocation,HomeActive, HomeHot,HomeLike
        },
        computed:{
            ...mapState(['currentCity'])
        },
        mounted(){
            this.$store.dispatch('reqHomeData', this.currentCity)
        }
    }
</script>

<style less>
    .swiper-pagination-bullet-active{
        background-color: white;
    }
</style>
