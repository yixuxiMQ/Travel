<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <div class="content-box">
            <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner.vue'
import Header from './components/Header.vue'
import List from './components/List.vue'
    export default{
        name: 'Detail',
        components: {
            'detail-banner': Banner,
            'detail-header': Header,
            'detail-list': List
        },
        data () {
            return {
                list: [
                    {
                        title: '促销',
                        children: [
                            {
                                title: '峨眉山一日游',
                                children: [
                                    {
                                        title: '峨眉山一日游 -- 精品'
                                    }
                                ]
                            },{
                                title: '船游乐山大佛'
                            },{
                                title: '峨眉山直通车'
                            }
                        ]
                    },{
                        title: '门票'
                    },{
                        title: '金顶索道'
                    },{
                        title: '万年寺索道'
                    },{
                        title: '观光车'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
.content-box{
    height 50rem    
}
</style>