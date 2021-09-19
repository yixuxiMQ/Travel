<template>
    <div class="sw-wrapper">  
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" v-bind:src="item.imgUrl" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        data () {
            return {
                swiperOption: {
                    pagination : '.swiper-pagination',
                    loop: true,
                    autoplay: 3000
                },
                //模拟图片数据
                swiperList: [
                    {
                        id: '001',
                        imgUrl: 'https://dimg04.c-ctrip.com/images/0zg22120008vxcstu343F.jpg'
                    },{
                        id: '002',
                        imgUrl: 'https://dimg04.c-ctrip.com/images/0zg1x120008n3pi836E66.jpg'
                    },{
                        id: '003',
                        imgUrl: 'https://dimg04.c-ctrip.com/images/0zg22120008vxcstu343F.jpg'
                    },{
                        id: '004',
                        imgUrl: 'https://dimg04.c-ctrip.com/images/0zg22120008vxcstu343F.jpg'
                    },{
                        id: '005',
                        imgUrl: 'https://dimg04.c-ctrip.com/images/0zg22120008vxcstu343F.jpg'
                    },{
                        id: '006',
                        imgUrl: 'https://dimg04.c-ctrip.com/images/0zg22120008vxcstu343F.jpg'
                    },
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
.sw-wrapper >>> .swiper-pagination-bullet-active{
    background-color: #fff !important;
}
.sw-wrapper{
    width: 100%;
    height: 0;
    padding-bottom: 26.67%;
    background-color: #eee;    
}

.sw-wrapper .swiper-img{
    width: 100%;
    height: 2rem;    
}
</style>
