<template>
    <div class="pp-right pos-abs pos-abs-tr">
        <div class="tabprops">
            <vuescroll :ops="ops">
                <transition>
                    <keep-alive>
                        <component :is="curview" :vindex="curindex"></component>
                    </keep-alive>
                </transition>
            </vuescroll>
        </div>
    </div>
</template>
<script>
import '@/components/props/_props'
import {ops} from '@/base'
import Vue from 'vue'
import vuescroll from 'vuescroll/dist/vuescroll-native'
Vue.use(vuescroll)
export default {
    name:"ModRight",
    props: ["vindex", "vnature"],
    components:{
        //ModCenter
        vuescroll
    },
    data(){
        return {
            curview: 'ModBannerProp',
            curindex: 2,
            ops:ops
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
.tabprops{
    position: relative;
    width: 100%;
    height: 99%;
    overflow: hidden;
}
/* .xl-props{
    padding: 15px 30px 5px 30px;
    color: #a0a0a0;
    line-height: 26px;
} */
.xl-prop-head{
    padding:15px 0px 10px 20px;
    min-height: 70px;
    color: #f1f1f1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background:#191919;
    border-bottom: 1px solid #000000;
}
.xl-prop-head h4{
    font-size: 17px;
}
.xl-prop-head p{
    padding-top: 6px;
}
.xl-prop-title{
    height: 22px;
    padding: 12px 0px 0px;
    line-height: 22px;
    overflow: hidden;
    color: #f1f1f1;
    text-indent: 10px;
}
.prop-item-img,
.prop-item-del{
    float: left;
    height: 28px;
    line-height: 28px;
    margin: 0px 10px;
    width: 90px;
}
.prop-item-del{
    display: block;
    box-sizing: border-box;
    border: 1px solid rgb(237, 64, 20);
    color: rgb(237, 64, 20);
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
}
.prop-item-del:hover{
    color:#f1f1f1;
    border: none;
    background: rgb(237, 64, 20)
}
.prop-item-img .el-button{
    padding: 0;
    width: 90px;
    height: 28px;
    line-height: 28px;
}
.xl-prop-item .el-color-picker {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 60px;
    height: 22px;
}

.xl-prop-item .el-color-picker .el-color-picker__trigger {
    width:60px;
    height: 22px;
    padding: 0px;
}

.el-color-picker .el-color-picker__trigger,
.el-color-picker .el-color-picker__color {
    border: none;
}

.el-color-picker__color-inner {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}
input[type="text"],
input[type="number"]{
    box-sizing: border-box;
    padding-left: 6px;
}

.pb10{
    padding-bottom: 10px;
}
.mb5{
    margin-bottom: 5px;
}
</style>
