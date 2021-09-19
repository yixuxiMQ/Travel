<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1508/ee/eed7c4dadc2dd800.img.jpg_600x330_6a92d5a5.jpg" />
            <div class="banner-info">
                <div class="banner-num">
                    <span class="iconfont">&#xe69b;</span>
                    <span>16</span>
                </div>
                <div class="banner-title">青铜峡黄河大峡谷旅游区(AAAA景区)</div>
            </div>
        </div>
        <common-fade>
            <common-gallery :img-list="imgList" 
                            v-show="isGalleryShow"
                            @closeGallery="handleGalleryClick">
            </common-gallery>
        </common-fade>
    </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery.vue'
import CommonFade from 'common/fade/Fade.vue'
    export default{
        name: 'Banner',
        components: {
            'common-gallery': CommonGallery,
            'common-fade': CommonFade,
        },
        data(){
            return {
                isGalleryShow: false,
                imgList: ['http://img1.qunarzz.com/sight/p0/1508/ee/eed7c4dadc2dd800.img.jpg_600x330_6a92d5a5.jpg',
                'http://img1.qunarzz.com/sight/p0/1508/32/3274d733abbabca5.img.jpg_350x240_e055f358.jpg']
            }
        },
        methods: {
            handleBannerClick(){
                this.isGalleryShow = true;
            },
            handleGalleryClick(){
                this.isGalleryShow = false;
            }
        }
    }
</script>

<style lang="stylus" scoped>
.banner{
    position relative
    width 100%
    height 0
    padding-bottom 55%
    background-color #eee
}

.banner .banner-img{
    width 100%
}

.banner .banner-info{
    position absolute
    bottom 0
    left 0
    right 0
    line-height .6rem
    color #fff
    padding 0 .2rem .2rem
    background linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6))
}

.banner .banner-info .banner-num{
    width 1.2rem
    height .4rem
    line-height .4rem
    text-align center
    border-radius .2rem
    background-color rgba(0, 0, 0, .5)
}

.banner .banner-info .banner-title{
    width 100%
    height .6rem
    line-height .6rem
    font-size .36rem
    text-shadow 0 1px 2px rgb(0 0 0 / 70%)
}
</style>