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
import {ops} from '@/base'
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
            ops: ops
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


