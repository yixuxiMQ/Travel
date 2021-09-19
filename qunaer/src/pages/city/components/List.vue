<template>
    <div class="list" ref="listWrapper">
        <div>
            <div class="hot-cities">
                <div class="hot-cts-title">热门城市</div>
                <ul class="clearfix">
                    <li class="border-top" @click="handleCityClick()">北京</li>
                    <li class="border-topleft">上海</li>
                    <li class="border-topleft">三亚</li>
                    <li class="border-top">香港</li>
                    <li class="border-topleft">杭州</li>
                    <li class="border-topleft">广州</li>
                    <li class="border-top">成都</li>
                    <li class="border-topleft">深圳</li>
                    <li class="border-topleft">苏州</li>
                    <li class="border-top">桂林</li>
                    <li class="border-topleft">西安</li>
                    <li class="border-topleft">厦门</li>
                </ul>
            </div>
            <div class="alphabet-menu">
                <div class="alphabet-menu-title">字母排序</div>
                <ul class="clearfix">
                    <li v-for="(letter, index) in cities" :key="index" @click="handleLetterClick">{{letter.title}}</li>
                </ul>
            </div>
            <div class="alphabet-list" v-for="(letter, index) in cities" :key="index" ref="BScroll">
                <div class="alphabet-list-title">{{letter.title}}</div>
                <ul class="clearfix">
                    <li 
                        v-for="(city, index) in letter.lists" 
                        :key="index"
                        @click="handleCityClick(city)">
                        {{city}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
    export default{
        name: 'CityList',
        props: {
            cities: Array
        },
        data(){
            return {
                letter: '',
                hotCities: ['北京', '上海', '三亚', '香港', '杭州', '广州', '成都', '深圳', '苏州', '桂林', '西安', '厦门']
            }
        },
        methods: {
            handleLetterClick(e){
                let cityArr = this.getCity;
                this.letter = cityArr.indexOf(e.target.innerText);
            },
            handleCityClick(city){
                this.$store.dispatch('changeCityName', city);
                this.$router.push('/');
            }
        },
        updated(){
            this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.listWrapper);
            })
        },
        watch: {
            letter(){
                let elem = this.$refs.BScroll[this.letter]
                this.scroll.scrollToElement(elem);
            }
        },
        computed: {
            getCity(){
                let cityArr = [];

                for(let i = 0; i < this.cities.length; i++){
                    cityArr.push(this.cities[i].title)
                }
                return cityArr;
            }
        }
    }
</script>

<style lang="stylus" scopoed>
@import '~styles/variables.styl'
div{
    box-sizing border-box
}

.clearfix::after{
    display block
    content ''    
    clear both
}

.list{
    position absolute
    // width 100%
    top .88rem
    left 0
    right 0
    bottom 0 
    overflow hidden   
}

.hot-cities{
    width 100%
    height 4.32rem
}

.hot-cities .hot-cts-title,
.alphabet-menu .alphabet-menu-title,
.alphabet-list .alphabet-list-title{
    width 100%
    height .72rem
    line-height .72rem
    padding 0 .2rem
    background-color #f5f5f5    
    color $darkTextColor
    font-size .28rem
}


.hot-cities ul li{
    float left
    width 33.33%
    height .9rem
    line-height .9rem
    text-align center
}

.alphabet-menu ul{
    height 4.2rem
    margin .3rem 0    
}

.alphabet-menu ul li{
    float left
    width 16.67%
    height .9rem
    line-height .9rem
    text-align center    
}

.alphabet-list ul li{
    float left
    width 25%
    height .9rem
    line-height .9rem
    text-align center
}

</style>