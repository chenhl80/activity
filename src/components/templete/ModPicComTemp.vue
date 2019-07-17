<template>
    <div :id="'layout'+vindex" class="layout" :class="'layout'+vindex" >
        <div class="pic-comm tempcomm" :style="styles" :index="vindex"><!--<img :src="resp.maximg" class="imgwh">--></div>
    </div>  
</template>
<script>
export default {
    props:['vindex'],
    computed: {
        resp() {
            return this.$store.getters.actdata[this.vindex].tempcont;
        },
        styles() {
            return {
                'height': this.resp.height + 'px',
                'background-image': 'url(' + this.resp.maximg + ')',
                'background-repeat': 'no-repeat',
                'background-position': '50% 0'
            }
        }
    }
}
</script>
<style scoped>

</style>