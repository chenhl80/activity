<template>
    <div class="global-content">
        <mod-left></mod-left>
        <!-- <mod-center></mod-center> -->
        <mod-right></mod-right>
    </div>  
</template>
<script>
import ModLeft from '@/components/ModLeft.vue'
import ModCenter from '@/components/ModCenter.vue'
import ModRight from '@/components/ModRight.vue'
export default {
    name:"VipCenter",
    components:{
        ModLeft,
        ModCenter,
        ModRight
    },
    data(){
        return {

        }
    }
}
</script>
<style scoped>
.global-content {
    width: 100%;
    height: calc(100% - 75px);
    margin-bottom: 2px;
    overflow: hidden;
    position: relative;
    background: #101010
}
</style>


