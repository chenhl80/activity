<template>
    <div class="pp-right">
        <div class="pp-property" id="pp-property">
            <div class="tabs">
                <a href="javascript:;" class="amod active">属性</a>
            </div>
            <a class="fold-up" @click.stop.prevent="">&gt;</a>
            <div class="tablaycontent">
                <div class="laycontscroll">
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
.pp-right{
    width: 270px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    box-sizing: border-box;
}
.pp-property {
    position:relative;
    width:100%;
    height:100%
}

.xl-prop-comm-style {
    position: relative;
    padding: 10px;
}

.toolbar {
    width: 250px;
    padding: 15px;
    -webkit-box-shadow: 0 0 2px #aaa;
    box-shadow: 0 0 2px #aaa;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    margin: 10px auto 0;
}

.toolbar-wh-row {
    margin-bottom: 8px;
}

.toolbar-row-title {
    width: 220px;
    font-size: 14px;
    font-family: Lato, sans-serif;
    font-weight: 500;
    margin: 0 0 3px;
    color: #1a173b;
}

.toolbar-position-inp,
.toolbar-size-inp {
    width: 108px;
    font-size: 11px;
    color: #bbb;
    font-weight: 300;
    display: inline-block;
    position: relative;
}

.toolbar-size-inpt {
    width: 200px;
    font-size: 11px;
    color: #bbb;
    font-weight: 300;
    display: inline-block;
    position: relative;
}

.toolbar-position-inp em,
.toolbar-size-inp em,
.toolbar-size-inpt em {
    display: inline-block;
    width: 100%;
    font-style: normal;
}

.toolbar-position-inp input,
.toolbar-size-inp input,
.toolbar-size-inpt input {
    display: inline-block;
    border: 1px solid #bfbfca;
    margin: 2px 0px 0px;
    height: 20px;
    padding: 0;
}

.toolbar-position-inp input,
.toolbar-size-inp input {
    width: 80px;
}

.toolbar-size-inpt input {
    width: 198px;
}

.pp-prop-btn {
    box-sizing: border-box;
    padding: 8px;
}

.pp-prop-btn label {
    display: block;
    color: #ffffff;
    line-height: 26px;
}

.el-checkbox__label {
    color: #333333;
}
</style>
