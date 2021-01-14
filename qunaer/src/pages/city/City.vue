<template>
    <div class="city">
        <div class="header">
            <div class="city-header">
            <span class='iconfont' @click="$router.replace('/home')">
				&#xe624;
			</span>
                <p> 城市选择 </p>
            </div>
        </div>
        <div class="content" ref="content">
            <div>
                <div class="hot-city">
                    <div class="desc">热门城市</div>
                    <div class="city-list">
                        <div class="city-item" v-for="(item, index) in hotCities"
                             :key="index" @click="changeCity(item.name)"
                        >{{ item.name }}</div>

                    </div>
                </div>
                <div class="order-city">
                    <div class="desc">字母排序</div>
                    <div class="city-list">
                        <div class="city-item" @click="handleItem(key)"
                             v-for="(value, key) in cities"
                             :key="key"
                        >{{ key }}</div>
                    </div>
                </div>
                <div class="all-city" v-for="(value, key) in cities"
                     :key="key" :ref="key"
                >
                    <div class="desc">{{key}}</div>
                    <div class="city-list">
                        <div class="city-item" v-for="(item, index) in value"
                             :key="index" @click="changeCity(item.name)">
                            {{item.name}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState} from 'vuex'
    export default {
        name: "City",
        computed:{
            ...mapState(['hotCities', 'cities'])
        },
        mounted(){
            this.$store.dispatch('reqCity', ()=>{
                this.$nextTick(()=>{
                    this.scroll = new BScroll(this.$refs.content, {
                        click:true
                    })
                });
            });


        },
        methods:{
            handleItem(key){
                // console.log(this.$refs[key][0]);
                // console.log(this.scroll)
                // debugger
                this.scroll.scrollToElement(this.$refs[key][0], 0, 0)
            },
            changeCity(city){
                // console.log(city)
                localStorage.setItem('city', city);
                this.$store.dispatch('reqCurrentCity', city);
                this.$router.back()
            }
        }
    }
</script>

<style lang="less" scoped>
    @import '../../assets/less/common.less';
    .header{
        .city-header{
            width: 100%;
            height: 44rem/@baseFont;
            background-color: #00bcd4;
            display: flex;
            color:white;
            span{
                width: 40rem/@baseFont;
                height: 44rem/@baseFont;
                text-align: center;
                line-height: 44rem/@baseFont;
            }
            p{
                flex: 1;
                text-align: center;
                line-height: 44rem/@baseFont;
                transform: translateX(-22rem/@baseFont);
                font-size: 16rem/@baseFont;
            }
        }
    }
    .content{
        height: 623rem/@baseFont ;
        overflow: hidden;
        .hot-city{
            .desc{
                height: 12rem/@baseFont;
                background-color: #eee;
                font-size: 12rem/@baseFont;
                padding: 10rem/@baseFont;
            }
            .city-list{
                display: flex;
                flex-wrap: wrap;
                .city-item{
                    width: 33%;
                    height: 45rem/@baseFont;
                    font-size: 14rem/@baseFont;
                    text-align: center;
                    line-height:45rem/@baseFont ;
                    border-right: 1px solid #eee;
                    border-bottom: 1px solid #eee;
                }
            }
        }
        .order-city{
            .desc{
                height: 12rem/@baseFont;
                background-color: #eee;
                font-size: 12rem/@baseFont;
                padding: 10rem/@baseFont;
            }
            .city-list{
                display: flex;
                flex-wrap: wrap;
                .city-item{
                    width: 100% / 6;
                    height: 45rem/@baseFont;
                    font-size: 14rem/@baseFont;
                    text-align: center;
                    line-height:45rem/@baseFont ;
                }
            }
        }
        .all-city{
            .desc{
                height: 12rem/@baseFont;
                background-color: #eee;
                font-size: 12rem/@baseFont;
                padding: 10rem/@baseFont;
            }
            .city-list{
                display: flex;
                flex-wrap: wrap;
                .city-item{
                    width: 24.7%;
                    height: 45rem/@baseFont;
                    font-size: 14rem/@baseFont;
                    text-align: center;
                    line-height:45rem/@baseFont ;
                    border-right: 1px solid #eee;
                    border-bottom: 1px solid #eee;
                }
            }
        }
    }
</style>
