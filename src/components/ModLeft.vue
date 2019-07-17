<template>
    <div class="pp-left pos-abs pos-abs-tl" id="pp-left">
        <div class="xl-tabs">
            <div class="tab-title">
                <a class="xl-title-a">模块</a>
            </div>
            <div class="tab-content">
                <vuescroll :ops="ops">
                <div class="tab-content-scroll">
                    <div class="xl-module">
                        <!-- <h3>通用全局组件</h3> -->
                        <draggable tag="ul" class="comp-global-comm" 
                        :list="comlist"
                        
                        :options="{group:{name:'ppvip', pull: 'clone',put:false},sort: false}">
                        <!-- group="{name:'ppvip', pull: 'clone',put:false}"
                        sort=false
                        > -->
                            <li v-for="element in comlist" :key="element.name">
                                <a href="javascript:;" class="abtn-box">
                                    <i class="ico-box" :class="'ico-'+element.class"></i>
                                    <span class="ico-name">{{element.name}}</span>
                                </a>
                            </li>
                        </draggable>
                    </div>
                    <div class="xl-module">
                        <!-- <h3>通用全局组件</h3> -->
                        <draggable tag="ul" class="comp-global-comm" 
                        :list="btnlist"
                        :options="{group:{name:'ppvip', pull: 'clone',put:false},sort: false}">
                            <li v-for="element in btnlist" :key="element.name">
                                <a href="javascript:;" class="abtn-box">
                                    <i class="ico-box" :class="'ico-'+element.class"></i>
                                    <span class="ico-name">{{element.name}}</span>
                                </a>
                            </li>
                        </draggable>
                    </div>
                    <div class="xl-module">
                        <!-- <h3>通用全局组件</h3> -->
                        <draggable tag="ul" class="comp-global-comm" 
                        :list="lotlist"
                        :options="{group:{name:'ppvip', pull: 'clone',put:false},sort: false}">
                            <li v-for="element in lotlist" :key="element.name">
                                <a href="javascript:;" class="abtn-box">
                                    <i class="ico-box" :class="'ico-'+element.class"></i>
                                    <span class="ico-name">{{element.name}}</span>
                                </a>
                            </li>
                        </draggable>
                    </div>
                    <div class="xl-module">
                        <!-- <h3>通用全局组件</h3> -->
                        <draggable tag="ul" class="comp-global-comm" 
                        :list="movlist"
                        :options="{group:{name:'ppvip', pull: 'clone',put:false},sort: false}">
                            <li v-for="element in movlist" :key="element.name">
                                <a href="javascript:;" class="abtn-box">
                                    <i class="ico-box" :class="'ico-'+element.class"></i>
                                    <span class="ico-name">{{element.name}}</span>
                                </a>
                            </li>
                        </draggable>
                    </div>
                    <div class="xl-module">
                        <!-- <h3>通用全局组件</h3> -->
                        <draggable tag="ul" class="comp-global-comm" 
                        :list="elslist"
                        :options="{group:{name:'ppvip', pull: 'clone',put:false},sort: false}">
                            <li v-for="element in elslist" :key="element.name">
                                <a href="javascript:;" class="abtn-box">
                                    <i class="ico-box" :class="'ico-'+element.class"></i>
                                    <span class="ico-name">{{element.name}}</span>
                                </a>
                            </li>
                        </draggable>
                    </div>
                    <div class="xl-module">
                        <!-- <h3>通用全局组件</h3> -->
                        <draggable tag="ul" class="comp-global-comm" 
                        :list="tablist"
                        :options="{group:{name:'ppvip', pull: 'clone',put:false},sort: false}">
                            <li v-for="element in tablist" :key="element.name">
                                <a href="javascript:;" class="abtn-box">
                                    <i class="ico-box" :class="'ico-'+element.class"></i>
                                    <span class="ico-name">{{element.name}}</span>
                                </a>
                            </li>
                        </draggable>
                    </div>
                </div>
                </vuescroll>
            </div>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
import info from '@/infos'
import Vue from 'vue'
import vuescroll from 'vuescroll/dist/vuescroll-native'
Vue.use(vuescroll)
export default {
    name:"ModLeft",
    components:{
        draggable,
        vuescroll
    },
    data() {
        return {
            comlist:info.comlist,
            btnlist:info.btnlist,
            lotlist:info.lotlist,
            movlist:info.movlist,
            elslist:info.elslist,
            tablist:info.tablist,
            ops: {
                vuescroll: {
                    mode: 'native',
                    sizeStrategy: 'percent',//类型: number|percent 默认值: percent 如果父容器不是固定高度，请设置为 number , 否则保持默认的percent即可
                    detectResize: true//是否检测内容尺寸发生变化
                },
                scrollPanel: {},
                rail: {
                    background: '#000000',//轨道的背景色
                    opacity: 0.5,
                    size: '8px',//轨道的尺寸
                    specifyBorderRadius: false,//是否指定轨道的 borderRadius， 如果不那么将会自动设置  类型: false|string 默认值: false
                    gutterOfEnds: null,//轨道距 x 和 y 轴两端的距离 默认值: 2px 类型: string
                    gutterOfSide: '2px',//距离容器的距离 默认值: 2px
                    keepShow: false,//是否即使 bar 不存在的情况下也保持显示
                    border:'0px solid #000'
                },
                bar: {
                    showDelay: 500,//在鼠标离开容器后多长时间隐藏滚动条
                    onlyShowBarOnScroll: false,//是否只在滚动时显示 bar
                    keepShow: false,//滚动条是否保持显示
                    background: 'rgba(0,0,0,0.5)',
                    opacity: 1,
                    hoverStyle: false,
                    specifyBorderRadius: false,//是否指定滚动条的 borderRadius， 如果不那么和轨道的保持一致 类型: false|string 默认值: false
                    minSize: false,//为 bar 设置一个最小尺寸, 从 0 到 1. 如 0.3, 代表 30% 类型: number 默认值: 0
                    size: '8px',//bar 的尺寸
                    disable: false,
                }
            }
        }
    },
    methods: {
        change(evt) {
            console.log(evt);
        },
        foldup(evt) {
            console.log(evt);
        }
    }
}
</script>
<style>

</style>


