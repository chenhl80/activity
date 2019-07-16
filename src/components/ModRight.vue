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
                            <component :is="curview"></component>
                        </keep-alive>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//import ModCenter from "@/components/ModCenter";
export default {
    name:"ModRight",
    components:{
        //ModCenter
    },
    data(){
        return {
            curview: 'CompBtnsProp',
            curindex: 0
        }
    }
}
</script>
<style>

</style>
