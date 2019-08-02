<template>
    <div :id="'layout'+vindex" class="layout" :class="'layout'+vindex" >
        <div class="wrapper" :style="{'width':w*fz+'px','overflow':'hidden'}">
            <swiper :options="swiperOption" class="swiper-container" ref="mySwiper">
                <!-- slides -->
                <swiper-slide class="swiper-item" v-for="(item,index) of list" :style="{'background':item.bgcolor,'height':h*fz+'px'}" :key="'banner'+index">
                    <img class='swiper-img' :src='item.img' :style="{'width':item.imgw*fz+'px'}">
                </swiper-slide>
                <!-- Optional controls ,显示小点-->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { ismobile } from "@/base"
export default {
    name:'ModBannerTemp',
    props:['vindex'],
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            filmsarr: [],
            clearSwiper :null,
            pindx: 0,
            fz:ismobile(),
            swiperOption:{
                autoplay: {
                    delay:3000,
                    stopOnLastSlide: false,
                    disableOnInteraction: false,
                },
                width: 750 > window.innerWidth ? window.innerWidth : 750,
                speed: 500,
                loop: true,
                updateOnImagesReady: true,
                on: {
                    resize: function() {
                        //窗口变化了
                        this.params.width = 750 > window.innerWidth ? window.innerWidth : 750;
                        this.update();
                    },
                },
                pagination: {
                    el: '.swiper-pagination',
                }
            },
        }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      //console.log('this is current swiper instance object', this.swiper)
      //this.swiper.slideTo(3, 1000, false)
    },
    updated() {
        console.log('updated banner');
        // let mySwiper = this.myswiper;
        // mySwiper.params.autoplay.delay = this.resp.time;
        // mySwiper.removeAllSlides(); //移除全部
        // let arr = [];
        // this.resp.list.forEach((el, index) => {
        //     arr.push('<div class="swiper-slide" style="height:100%"><a class="abanner" style="height:100%;background:' + el.bgcolor + '"><img src="' + el.img + '" class="loading"></a></div>');
        // });
        // arr = arr.sort(function sortby(a, b) { return b.sort - a.sort; })
        // mySwiper.addSlide(0, arr);
        // mySwiper.update();
    },
    computed: {
        resp() {
            return this.$store.getters.actdata[this.vindex];
        },
        list() {
            if(this.resp){
                let list = [];
                let banlist = this.resp.tempcont.list;
                if(Array.isArray(banlist)){
                    for(let k in banlist){
                        list.push(banlist[k]);
                    }
                }else{
                    list = banlist;
                }
                list.sort(function sortby(a, b) { return b.sort - a.sort; });
                return list;
            }
        },
        w(){
            if(this.resp){
                return this.resp.tempcont.width;
            }
        },
        h(){
            if(this.resp){
                return this.resp.tempcont.height;
            } 
        },
        inx() {
            if(this.resp){
                this.pindx = this.resp.tempcont.pinx;
            }  
        },  
        swiper() {
            return this.$refs.mySwiper.swiper
        }
    },
    watch: {

    }
}
</script>
<style scoped>

.wrapper{
    width: 100%;
    height: auto;
    overflow: hidden;
    max-width: 750px;
}
.swiper-item{
    width: 100%;
}
.swiper-img{
    width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;
}
</style>