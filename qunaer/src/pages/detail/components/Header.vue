<template>
    <div>
        <router-link to="/" tag="div" 
                     class="header-back"
                     v-show="headerBackShow">
            <span class="iconfont icon-back">&#xe624;</span>
        </router-link>
        <div class="header"
             :style="opacityOption"
             v-show="!headerBackShow">
            <router-link 
                to="/" 
                class="header-left">
                <span class="iconfont icon-left-back">&#xe624;</span>
            </router-link>
            青铜峡黄河大峡谷
        </div>
    </div>
</template>

<script>
export default{
    name: 'Header',
    data(){
        return {
            headerBackShow: true,
            opacityOption: {
                opacity: 0
            }
        }
    },
    methods: {
        scrollHandle(){
            let top = document.documentElement.scrollTop;
            if (top > 50) {
                this.headerBackShow = false;
                let opacity = top / 100;
                opacity = opacity > 1 ? 1 : opacity;
                this.opacityOption.opacity = opacity;
            } else {
                this.headerBackShow = true;
            }
        }
    },
    activated(){
        window.addEventListener('scroll', this.scrollHandle);
    },
    deactivated(){
        window.removeEventListener('scroll', this.scrollHandle);
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header-back{
    position absolute
    top .2rem
    left .2rem
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius 50%
    background rgba(0, 0, 0, .8)
}

.header-back .icon-back{
    color #fff
    font-size .4rem
}

.header{
    position fixed
    top 0
    left 0
    right 0
    height .88rem
    line-height .88rem
    text-align center
    font-size .32rem
    color #fff
    z-index 2
    background-color $bgColor
}

.header .header-left{
    position absolute
    display inline-block
    top 0
    left 0
    height 100%
    width .8rem
    color #fff
    font-size .4rem    
}
</style>