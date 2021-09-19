<template>
    <div class="icons-wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon-box" v-for="item in page" :key="item.id">
                    <div class="icon-img-box">
                        <img class="icons-img" :src="item.imgUrl" />
                    </div>
                    <p class="icon-desc"> {{item.desc}} </p>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>  
        
    </div>
</template>

<script>
    export default {
        name: 'HomeIcon',
        data () {
            return {
                swiperOption: {
                    pagination : '.swiper-pagination'
                },
                iconsList: [{
                    id: '001',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
                    desc: '故宫'
                },{
                    id: '002',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
                    desc: '故宫'
                },{
                    id: '003',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
                    desc: '故宫'
                },{
                    id: '004',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
                    desc: '故宫'
                },{
                    id: '005',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
                    desc: '故宫'
                },{
                    id: '006',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
                    desc: '故宫'
                },{
                    id: '007',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
                    desc: '故宫'
                },{
                    id: '008',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
                    desc: '故宫'
                },{
                    id: '009',
                    imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
                    desc: '故宫'
                }]
            }
        },
        computed: {
            pages () {
                let pages = [];
                this.iconsList.forEach((item, index) =>{
                    let page = Math.floor(index / 8);
                    if(!pages[page]){
                        pages[page] = [];
                    }
                    pages[page].push(item);
                })
                return pages;            
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'

.icons-wrapper{
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    // background-color: #eee;
    margin: .2rem 0;
}

.icons-wrapper .icon-box{
    position: relative;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
}

.icons-wrapper .icon-box .icon-img-box{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: .44rem;
}

.icons-wrapper .icon-box .icon-img-box img{
    display: block;
    height: 100%;
    margin: 0 auto;
}

.icons-wrapper .icon-box .icon-desc{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: .44rem;
    text-align: center;  
    color: $darkTextColor;  
    line-height .44rem
    ellipsis()
}
</style>
