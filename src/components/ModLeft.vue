<template>
    <div class="pp-left" id="pp-left">
    <div class="tabs">
        <a class="amod active">模块</a>
    </div>
    <a class="fold-up" @click.stop.prevent="foldup($event)">&lt;</a>
    <div class="tablaycontent">
        <div class="laycontscroll">
            <div class="comp-comm comp-global">
                <h3>通用全局组件</h3>
                <draggable element="ul" class="comp-global-comm" 
                :list="comlist"
                :options="{group:{name:'ppvip', pull: 'clone',put:false},sort: false}">
                    <li v-for="element in comlist" :key="element.name">
                        <a class="abtn-box" href="javascript:;">
                            <img :src="element.icon">
                            <span>{{element.name}}</span>
                        </a>
                    </li>
                </draggable>
            </div>
            <div class="comp-lott comp-global">
                <h3>抽奖</h3>
                <draggable element="ul" class="comp-global-comm" :list="lotlist" :options="{group:{name:'ppvip', pull: 'clone',put:false},sort: false}">
                    <li v-for="element in lotlist" :key="element.name">
                        <a class="abtn-box" href="javascript:;">
                            <img :src="element.icon">
                            <span>{{element.name}}</span>
                        </a>
                    </li>
                </draggable>
            </div>
            <div class="comp-play comp-global">
                <h3>播放器</h3>
                <draggable element="ul" class="comp-global-comm" :list="movlist"  @change="change" :options="{group:{name:'ppvip', pull: 'clone',put:false},sort: false}">
                    <li v-for="element in movlist" :key="element.name">
                        <a class="abtn-box" href="javascript:;">
                            <img :src="element.icon">
                            <span>{{element.name}}</span>
                        </a>
                    </li>
                </draggable>
            </div>
            <div class="comp-btns comp-global">
                <h3>按钮</h3>
                <draggable element="ul" class="comp-global-comm" :list="btnlist"  @change="change"  :options="{group:{name:'ppvip', pull: 'clone',put:false},sort: false}">
                    <li v-for="element in btnlist" :key="element.name">
                        <a class="abtn-box" href="javascript:;">
                            <img :src="element.icon">
                            <span>{{element.name}}</span>
                        </a>
                    </li>
                </draggable>
            </div>

        </div>
    </div>
</div>
</template>
<script>
import draggable from 'vuedraggable'
import info from '@/infos'

export default {
    name:"ModLeft",
    components:{
        draggable
    },
    data() {
        return {
            comlist:info.comlist,
            btnlist:info.btnlist,
            lotlist:info.lotlist,
            movlist:info.movlist
        }
    },
    methods: {
        change(evt) {
            console.log(evt);
        },
        foldup(evt) {
            console.log(evt);
            let ele = evt.target;
            // if ($(ele).hasClass('afg')) {
            //     $(ele).parent().animate({ 'left': '0px' });
            //     $("#pp-center").animate({ 'margin-left': '272px' });
            //     $(ele).removeClass('afg');

            // } else {
            //     $(ele).parent().animate({ 'left': '-256px' });
            //     $("#pp-center").animate({ 'margin-left': '0px' });
            //     $(ele).addClass('afg');
            // }
        }
    }
}
</script>
<style>
.pp-left {
    width: 256px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
}

.pp-left .tabs,
.pp-property .tabs {
    background: #ffffff;
    width: 100%;
    border-bottom: 1px solid #333333;
    position: relative;
    margin-bottom: 10px;
    overflow: hidden;
}

.pp-left .fold-up,
.pp-property .fold-up {
    position: absolute;
    width: 12px;
    height: 60px;
    line-height: 60px;
    color: #ffffff;
    display: block;
    top: 50%;
    margin-top: -30px;
    font-size: 12px;
    background: #333333;
    cursor: pointer;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    overflow: hidden;
    font-weight: bold;
}

.pp-left .fold-up {
    right: -12px;
    border-radius: 0px 4px 4px 0px;
}

.pp-property .fold-up {
    left: -12px;
    border-radius: 4px 0px 0px 4px;
}

.pp-left .tabs .amod,
.pp-property .tabs .amod {
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0px 25px;
    background: #333333;
    color: #ffffff;
    text-decoration: none;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 1px solid #ffffff;
}

.pp-left .tabs .amod.active,
.pp-property .tabs .amod.active {
    font-weight: bold;
    border-bottom: 1px solid #333333;
    /* font-size: 14px; */
}

.pp-left .tablaycontent,
.pp-property .tablaycontent {
    background: #333333;
    color: #ffffff;
    position: relative;
    height: calc(100% - 42px);
    width: 100%;
    overflow: hidden;
}

.pp-left .tablaycontent .laycontscroll,
.pp-property .tablaycontent .laycontscroll {
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
}

.pp-left .tablaycontent h3,
.pp-property .tablaycontent h3 {
    height: 34px;
    line-height: 44px;
    border-bottom: 1px solid #ffffff;
    text-indent: 10px;
}

.pp-left .tablaycontent ul {
    list-style: none;
}

.pp-left .tablaycontent ul li {
    padding: 0;
    width: 75px;
    height: 62px;
    float: left;
    margin: 10px 2px;
}

.pp-left .tablaycontent .abtn-box {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    text-decoration: none;
    color: #ffffff;
}

.pp-left .tablaycontent .abtn-box span {
    display: block;
    width: 100%;
    text-align: center;
}

.comp-global ul:after {
    clear: both;
    display: block;
    height: 0;
    overflow: hidden;
    content: ".";
    visibility: hidden;
}
</style>


