<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icon></home-icon>
        <home-recommend></home-recommend>
        <home-weekend></home-weekend>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcon from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        'home-header': HomeHeader,
        'home-swiper': HomeSwiper,
        'home-icon': HomeIcon,
        'home-recommend': HomeRecommend,
        'home-weekend': HomeWeekend
    },
    methods: {
      getHomeInfo(){
        //   axios.get('/api/index.json')
        //     .then(this.getHomeInfoSuccess)
      },
      getHomeInfoSuccess(res){
          console.log(res);
      }
    },
    mounted(){
        this.getHomeInfo();
    }
}    
</script>

<style scoped>

</style>