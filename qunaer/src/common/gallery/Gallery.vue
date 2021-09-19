<template>
    <div class="gallery-container" @click="handleGalleryClick">
        <div class="img-wrapper">
            <swiper :options="swiperOption">
                <!-- slides -->
                <swiper-slide v-for="(img,index) in imgList" 
                              :key="index">
                    <img class="swiper-img" :src="img" />
                </swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'CommonGallery',
        props: {
            imgList: {
                type: Array,
                default(){
                    return [];
                }
            }
        },
        data(){
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationType: 'fraction',
                    observer: true,
                    observeParents: true
                }
            }
        },
        methods: {
            handleGalleryClick(){
                this.$emit('closeGallery')
            }
        }
    }
</script>

<style lang="stylus" scoped>
.gallery-container{
    position relative
    display flex
    flex-direction column
    // align-items center
    justify-content center
    width 100%
    height 100%
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    z-index 99
    background-color #000
}

.gallery-container .img-wrapper{
    width 100%
    height 0
    padding-bottom 100%
}

.gallery-container .img-wrapper img{
    width 100%
}

.gallery-container .img-wrapper .swiper-pagination{
    color #fff
} 
</style>