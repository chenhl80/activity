<template>
    <a :style="btnstyle" :index="vindex" class="fixed_module btncom animated infinite" :class="btnanimate" :name="resp.statistics">
        <span v-html="btntext" v-if="btntext"></span>
    </a>
</template>
<script>
import { ismobile } from "@/base"
export default {
    name:'ModBtnComTemp',
    props: ["vindex"],
    data(){
        return {
            fz:ismobile()
        }
    },
    computed: {
        resp() {
            return this.$store.getters.fixeddata[this.vindex].tempcont;
        },
        btnimg(){
            return this.resp.maximg;
        },
        btntext(){
            return this.resp.text;
        },
        btnanimate(){
            return this.resp.animate;
        },
        btnstyle(){
            let styles = {
                "width": this.resp.width *this.fz + 'px',
                "height": this.resp.height*this.fz  + 'px',
                "line-height": this.resp.height *this.fz + 'px',
                "top": this.resp.top *this.fz  + 'px',
                "left": this.resp.left *this.fz+'px',
                "color": this.resp.color,
                "border-radius": this.resp.radius*this.fz + 'px'
            };
            if(this.resp.bgcolor){
                styles['background-color'] = this.resp.bgcolor;
            }
            if(this.btnimg){
                styles['background-image'] = 'url('+this.resp.maximg+')';
                styles['background-position'] = 'center top';
                styles['background-size'] = '100% auto';
                styles['background-repeat'] = 'no-repeat';
            }
            return styles;
        }
    }
}
</script>
<style scoped>
.btncom{
    text-decoration: none;
    text-align: center;
    overflow: hidden;
}
</style>