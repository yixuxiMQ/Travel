<template>
    <div>
        <div class="recommend-title">
            周末去哪儿
        </div>
        <ul>
            <router-link to="/detail" tag="li" class="list-item" v-for="item in recommendList" :key="item.id">
                <div class="item-img">
                    <img :src="item.imgUrl" />
                </div>
                <div class="item-info">
                    <div class="info-title">{{item.title}}</div>
                    <div class="info-comment">{{item.comment}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HomeWeekend',
        data(){
            return {
                recommendList: [
                    {
                        id: '001',
                        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/73/a71cd6f8ea9dcb.jpg_r_640x214_1065f1e3.jpg',
                        title: '探神秘古国',
                        comment: '苍茫的贺兰山下静卧着一座陵墓，这里诉说着千年前西夏王朝文化和党项民族曾经的辉煌，在这可以让你来一次穿越之旅'
                    },{
                        id: '002',
                        imgUrl: 'https://imgs.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
                        title: '长城',
                        comment: '苍茫的贺兰山下静卧着一座陵墓，这里诉说着千年前西夏王朝文化和党项民族曾经的辉煌，在这可以让你来一次穿越之旅'
                    },{
                        id: '003',
                        imgUrl: 'https://imgs.qunarzz.com/sight/source/1606/9c/d601bd634c8d50.jpg_r_640x214_909d1d4a.jpg',
                        title: '天坛',
                        comment: '苍茫的贺兰山下静卧着一座陵墓，这里诉说着千年前西夏王朝文化和党项民族曾经的辉煌，在这可以让你来一次穿越之旅'
                    },{
                        id: '004',
                        imgUrl: 'https://imgs.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
                        title: '大栅栏',
                        comment: '苍茫的贺兰山下静卧着一座陵墓，这里诉说着千年前西夏王朝文化和党项民族曾经的辉煌，在这可以让你来一次穿越之旅'
                    },{
                        id: '005',
                        imgUrl: 'https://imgs.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
                        title: '西单',
                        comment: '苍茫的贺兰山下静卧着一座陵墓，这里诉说着千年前西夏王朝文化和党项民族曾经的辉煌，在这可以让你来一次穿越之旅'
                    },{
                        id: '006',
                        imgUrl: 'https://imgs.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
                        title: '东单',
                        comment: '苍茫的贺兰山下静卧着一座陵墓，这里诉说着千年前西夏王朝文化和党项民族曾经的辉煌，在这可以让你来一次穿越之旅'
                    },{
                        id: '007',
                        imgUrl: 'https://imgs.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
                        title: '清华大学',
                        comment: '苍茫的贺兰山下静卧着一座陵墓，这里诉说着千年前西夏王朝文化和党项民族曾经的辉煌，在这可以让你来一次穿越之旅'
                    },{
                        id: '008',
                        imgUrl: 'https://imgs.qunarzz.com/sight/source/1511/14/1cf5dc2ecbfc16.jpg_r_640x214_b4b3a58a.jpg',
                        title: '北京大学',
                        comment: '苍茫的贺兰山下静卧着一座陵墓，这里诉说着千年前西夏王朝文化和党项民族曾经的辉煌，在这可以让你来一次穿越之旅'
                    }
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'

div{
    box-sizing border-box
}

.recommend-title{
    background-color #eee
    width 100%;
    height .8rem
    line-height .8rem
    font-size .24rem
    padding 0 .2rem    
}

.list-item .item-img{
    width 100%
    height 0
    padding-bottom 37.1%
}

.list-item .item-img img{
    width 100%
}

.list-item .item-info{
    min-width 0
    padding .14rem .2rem .2rem
}


.list-item .item-info .info-title{
    width 100%
    height .4rem
    line-height .4rem
    font-size .28rem
    ellipsis()
}

.list-item .item-info .info-comment{
    width 100%
    height .42rem
    line-height .42rem
    font-size .24rem
    ellipsis()
    color $lightTxtColor
}
</style>

