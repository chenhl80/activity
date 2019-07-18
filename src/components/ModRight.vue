<template>
    <div class="pp-right pos-abs pos-abs-tr">
        <div class="xl-tabs">
            <div class="tab-title">
                <a class="xl-title-a">属性</a>
            </div>
            <div class="tab-content">
                <div class="tab-content-scroll">
                    <transition>
                        <keep-alive>
                            <component :is="curview" :vindex="curindex"></component>
                        </keep-alive>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import '@/components/props/_props'
export default {
    name:"ModRight",
    props: ["vindex", "vnature"],
    components:{
        //ModCenter
    },
    data(){
        return {
            curview: 'ModBodyProp',
            curindex: 0
        }
    },
    mounted() {
        this.$root.$on("clickPropCurFun", (result) => {
            console.log('clickPropCurFun',result);
            this.curindex = result.index;
            this.curview = result.temp;
        });
    }
}
</script>
<style>

</style>
