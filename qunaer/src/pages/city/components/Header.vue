<template>
    <div class="header">
        <router-link to="/">
            <span class="iconfont city-back">&#xe624;</span>
        </router-link>
        城市选择
    </div>
</template>

<script>
    export default{
        name: 'CityHeader'
    }
</script>

<style lang="stylus" scopoed>
@import '~styles/variables.styl'

.header{
    position relative
    width 100%
    height .88rem
    line-height .88rem
    text-align center  
    background-color $bgColor  
    color #fff
}

.header .city-back{
    position absolute
    top 0
    left 0
    width .8rem
    height .88rem
    line-height .88rem
    color #fff    
}
</style>