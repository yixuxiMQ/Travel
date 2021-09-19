<template>
  <div>
    <div class="list-item" 
         v-for="(item, index) in list" 
         :key="index">
        <div class="list-item-title border-bottom">
            <span class="list-item-icon"></span>
            {{ item.title }}
        </div>
        <div v-if="item.children" class="item-children">
            <detail-list :list="item.children"></detail-list>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
.list-item-title{
    width 100%
    height .8rem
    line-height .8rem
    font-size .32rem
    padding 0 .2rem    
}

.list-item-title .list-item-icon{
    display inline-block
    background-image: linear-gradient(126deg,#00e0ca 0,#00bfd4 100%);
    border-radius: .06rem;
    height: .24rem;
    min-width: .08rem;
    margin-right: .12rem;    
}

.item-children{
    padding 0 .2rem    
}
</style>