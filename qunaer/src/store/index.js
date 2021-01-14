import Vue from 'vue'
import Vuex from 'vuex'
import {reqHomeData, reqCity} from '../api'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    homeSwiper:[],  // 首页轮播
    homeiconsList:[],  // 首页轮播
    homehotList:[],  // 首页热门
    homelikeList:[],  // 首页like

    cities:{},  // 所有城市
    hotCities:[], // 热门城市
      currentCity: localStorage.getItem('city') || '上海'  // 默认显示上海
  },
  mutations: {
    getHomeData(state, v){
        state.homeSwiper = v.swiperList;
        state.homeiconsList = v.iconsList;
        state.homehotList = v.hotList;
        state.homelikeList = v.likeList;
    },
    getCity(state, city){
      state.cities = city.cities;
      state.hotCities = city.hotCities
    },
      getCurrentCity(state,city){
          state.currentCity = city
      }
  },
  actions: {
    async reqHomeData({commit}, city){
      const result = await reqHomeData();
      const {data} = result.data;
      data.forEach(v=>{
        if(v['city'] == city){
          commit('getHomeData', v)
        }
      })

    },
    async reqCity({commit}, callback){
      const result = await reqCity();
      const {data} = result.data;
      commit('getCity', data);
      callback()
    },

      // 同步获取当前city
      reqCurrentCity({commit}, city){
        commit('getCurrentCity', city)
      }
  },
  modules: {
  }
})
