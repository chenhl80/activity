<template>
    <div id="main-layout" class="main-layout-relv">
        <keep-alive v-for="(item,index) in actdata" :key="'layout'+index">
            <component :is="item.tempname" :vindex="index" ></component>
        </keep-alive>
        <keep-alive v-for="(rect,index) in rects" :key="'rect'+index">
            <component :is="rect.tempname" :vindex="index" ></component>
        </keep-alive>
    </div>
</template>

<script>
// @ is an alias to /src
import '@/components/_globals'
import {ismobile} from '@/base'
export default {
    name: 'Activity',
    components:{
        // ModBannerTemp:resolve=>require(['@/components/templete/ModBannerTemp.vue'],resolve),
        // ModBtnComTemp:resolve=>require(['@/components/templete/ModBtnComTemp.vue'],resolve),
        // ModPicComTemp:resolve=>require(['@/components/templete/ModPicComTemp.vue'],resolve) 
    },
    data(){
        return {

        }
    },
    created(){
        let cid = this.$route.query.actid+this.$route.query.id;
        axios.get('/posts/'+cid+'.json').then((data)=>{
            if(data.data != null){
                this.$store.replaceState(data.data);
            }
        });   
    },
    mounted(){
        console.log(ismobile())
        console.log(this.$store);
    },
    computed: {
        actdata() {
            //console.log('list', this.list);
            console.log('actdata:', this.$store.getters.actdata);
            let actdata = this.$store.getters.actdata;
            let filactdata = actdata.filter(item => { if (item) { return true; } });
            return filactdata;
        },
        rects() {
            console.log('fixeddata:', this.$store.getters.fixeddata);
            let fixeddata = this.$store.getters.fixeddata;
            let filfixeddata = fixeddata.filter(item => { if (item) { return true; } });
            return filfixeddata;
        }
    },
}
</script>
<style scoped>
.main-layout-relv{
    max-width: 750px;
    margin: 0 auto;
    position: relative;
}
.fixed_module{
    position: absolute;
    z-index: 100;
}
</style>