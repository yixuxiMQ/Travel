<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-middle">
            <span class="iconfont search">&#xe632;</span>
            <div class="kw">输入城市/景点/游玩主题</div>
            <input class="header-input" type="text" />
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{ this.city }}
                <span class="iconfont">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'HomeHeader',
    computed: {
        ...mapState(['city'])
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';

.header{
    width: 100%;
    height: .88rem
    display: flex;
    color: #fff;
    background-color: $bgColor;
}

.header .header-left{
    width: .8rem;
    height: 100%;
    text-align: center;
    line-height: .88rem;
}

.header .header-middle{
    flex: 1;
    position: relative;
    margin: .14rem 0;
}

.header .header-middle .search{
    position: absolute;
    top: .18rem;
    left: .1rem;
    color: #e4e7ea;
}

.header .header-middle .kw{
    position: absolute;
    top: .18rem;
    left: .46rem;
    color: #e4e7ea;
}

.header .header-middle .header-input{
    width: 100%;
    height: 100%;
    border-radius: .06rem;
}

.header .header-right{
    width: 1.32rem;
    height: 100%;
    text-align: center;
    line-height: .88rem;
    color: #fff;
}
</style>