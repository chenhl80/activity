<template>
    <div class="pp-center">
        <div class="canvas-dom">
            <div class="ruler-wraper">
                <ul class="h-ruler">
                    <li>0</li>
                    <li>100</li>
                    <li>200</li>
                    <li>300</li>
                    <li>400</li>
                    <li>500</li>
                    <li>600</li>
                    <li>700</li>
                </ul>
            </div>
            <ul class="v-ruler">
                <li><span>0</span></li>
                <li><span>100</span></li>
                <li><span>200</span></li>
                <li><span>300</span></li>
                <li><span>400</span></li>
                <li><span>500</span></li>
                <li><span>600</span></li>
                <li><span>700</span></li>
            </ul>
            <div class="preview" id="preview">
                <vuescroll>
                    <div id="main-layout" class="main-layout-relv">
                        <draggable :list="list"
                        :options="{group:{name:'ppvip'},animation: 150}" 
                        @end="end" @change="log" 
                        class="main-dragg main-dragrs">
                            <div class="main-laycontent">   
                                <div v-for="(item,index) in actdata" class="boxes" :index="index" :key="item.tempname+index">
                                    <keep-alive>
                                        <component :is="addeditupdel" :vindex="index" :vtempprop="item.tempprop" :vflag="true"></component>
                                    </keep-alive>
                                    <keep-alive>
                                        <component :is="item.tempname" :vindex="index"></component>
                                    </keep-alive>
                                </div>
                            </div>
                            <div class="main-layposition">
                               
                            </div>
                            <div class="main-show"></div>
                        </draggable>
                    </div>
                </vuescroll>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import vuescroll from 'vuescroll/dist/vuescroll-native'
import draggable from 'vuedraggable'
import AddEditDel from '@/components/AddEditDel'
Vue.use(vuescroll)
export default {
    name:"ModCenter",
    components:{
        vuescroll,
        draggable,
        AddEditDel
    },
    data(){
        return {
            addeditupdel: "AddEditDel",
            bodydata: this.$store.getters.bodydata,
            list: [],
            listbtns: [],
            change: false,
            viewwap: false,
            viewweb: false,
            offsettop: 0,
            count: 0
        }
    },
    mounted(){
        console.log(this.$store);
    },
    beforeUpdate() {
       
    },
    updated() {

    },
    methods: {
        changetemps(temp, index) {
            vue.$emit("clickPropCurFun", { temp: temp, index: index });
        },
        aicobody() {
            vue.$emit("clickPropCurFun", { temp: 'xl-prop-body', index: 0 });
        },
        log: function(evt) {
            console.log('log', evt);
            if (evt.added) {
                this.$store.dispatch('addSnData', evt.added);
            }
        },
        end: function(evt) {
            console.log('end', evt)
                //evt.item //可以知道拖动的本身
                //evt.to    // 可以知道拖动的目标列表
                //evt.from  // 可以知道之前的列表
                //evt.oldIndex //可以知道拖动前的位置
                //evt.newIndex //可以知道拖动后的位置
            this.$store.dispatch('unDateSnData', {
                oldinx: evt.oldIndex,
                newinx: evt.newIndex
            });
        },
        changePosSize(newRect, index) {
            //console.log(newRect);
            this.$store.dispatch('editBtnsSnData', { index: index, nature: "width", value: newRect.width });
            this.$store.dispatch('editBtnsSnData', { index: index, nature: "height", value: newRect.height });
            this.$store.dispatch('editBtnsSnData', { index: index, nature: "top", value: newRect.top });
            this.$store.dispatch('editBtnsSnData', { index: index, nature: "left", value: newRect.left });
        },
        activateEv(index) {
            //vue.$emit("clickPropCurFun", { temp: 'pp-prop-btn', index: index });
        },
        deactivateEv(index) {
            //vue.$emit("clickPropCurFun", { temp: 'pp-prop-btn', index: index });
        },
        dragstop(newRect) {},
        mouseups(ev) {
            console.log(ev);
        },
    },
    computed: {
        // list() {
        //     return [];
        // },

        terms() {
           
        },
        termview() {
           
        },
        termapp() {
            
        },
        mainstyle() {
            return {
                width: '100%',
                height: this.bodydata.height + 'px',
                'background-color': this.bodydata.bgcolor
            };
        },
        dragheight() {
            let h = this.parentH;
            //if (pagetype == 2 || pagetype == 3) {
            // h = h / 2;
            //}
            //console.log('dragheight', h);
            return {
                'height': h + 'px'
            }
        },
        parentH() {
            let actdata = this.actdata;
            let h = 0;
            let hh = 0;
            actdata.forEach(item => {
                //console.log('parentH', item.tempcont.height);
                //console.log('parentW', item.tempcont.width);
                hh = item.tempcont.height / (item.tempcont.width / 375);
                h += hh * 1;
            });
            return Number(h);
        },
        actdata() {
            //console.log('list', this.list);
            console.log('actdata:', this.$store.getters.actdata);
            let actdata = this.$store.getters.actdata;
            let filactdata = actdata.filter(item => { if (item) { return true; } });
            return filactdata;
        },
        rects() {
            console.log('fixeddata:', this.$store.getters.fixeddata);
            let fixeddata = this.$store.getters.fixeddata;
            let filfixeddata = fixeddata.filter(item => { if (item) { return true; } });
            return filfixeddata;
        }
    },
    watch: {}
}
</script>
<style scoped>
.pp-center{
    position: relative;
    width: 750px;
    height: 100%;
    z-index: 10;
    padding-top: 20px;
    margin :0px auto 0;
    box-sizing: border-box;
}
.canvas-dom{
    width: 750px;
    height: 100%;
    background: #ffffff;
    position: relative;
}
.ruler-wraper{
    position: absolute;
    width: 100%;
    height: 14px;
    overflow: hidden;
    left: 0;
    top: -14px;
}
.h-ruler{
    background: url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABVAAD/4QOFaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2FjMDMxZTEtODdkOC00OTVkLWIwNGEtMzEyYzg2ZGI4NmZlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ0Nzg3MDkxN0VFNjExRTZCMDgwRDc4NzVCQjJGMTNEIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0Nzg3MDkwN0VFNjExRTZCMDgwRDc4NzVCQjJGMTNEIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0I4NTE4REU0ODdFRTYxMUE5Q0Y4RDM1MTJBMjBDMDIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MWJhNTkxMi1iZWQ1LTExNzktYjllNC1jOTk0N2NmZDNlODQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAQEBAQECAQECAwIBAgMDAgICAgMDAwMDAwMDBQMEBAQEAwUFBQYGBgUFBwcICAcHCgoKCgoMDAwMDAwMDAwMAQICAgQDBAcFBQcKCAcICgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAOAGQDAREAAhEBAxEB/8QAfAABAQEBAQAAAAAAAAAAAAAAAAQGBQkBAQEBAQAAAAAAAAAAAAAAAAAFBAYQAAICAAUDAgYBBQAAAAAAAAEDAgQAETESBSFBFCITcZHTVBUWMmI1BhcYEQEAAQEECwEAAAAAAAAAAAAAERJhAhMUASFBUYHCg8NEhBVF/9oADAMBAAIRAxEAPwDyTwDAMAwDAMAwDAMAwDAMBov1Hjf9S/vm9v5f8v8AiPbzj7Ps+H5G7Lbu3bume7LLtiN9C/8AQy0aKcKuds1RviIs4t2Vu5bF1zXTZESyvm2ftG/NH1MWWFVy7qiLUIcQl7qpTWnOcikEOnXhN8PVKPSLTKI6dtTqQNdUjw1ewpLzzMnWIWEEp2wTGCimYO4DOUpMB9R00HcFB1RtW7O+l67S0xnSgCkhrjYVAwOUj09ozl1I017EHCOqWOZqV+bS9HDMcqFt8CkyWmUwGTAjKZzEcz0ifgcBL5tn7RvzR9TAdL/K7aI8oocZVMq3h8cZGua+33Tx6S4HKY9QZuEv6s8BO11SPDV7CkvPMydYhYQSnbBMYKKZg7gM5SkwH1HTQdwUHVG1bs76XrtLTGdKAKSGuNhUDA5SPT2jOXUjTXsQcI6pY5mpX5tL0cMxyoW3wKTJaZTAZMCMpnMRzPSJ+BwEvm2ftG/NH1MBVy7qiLUIcQl7qpTWnOcikEOnXhN8PVKPSLTKI6dtTqQ13l2P+bd3itz/AGXLbmnP+16/zyxzH7Xr9xX8Dq8r/9k=) repeat-x;
    width: 130%;
    height: 100%;
    cursor: n-resize;
    list-style: none;
}
.h-ruler li {
    width: 100px;
    height: 100%;
    text-align: left;
    float: left;
    font-size: 10px;
    color: #535353;
    line-height: 1.3;
    padding-left: 4px;
    box-sizing:border-box;
}
.v-ruler {
    background: url(data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABVAAD/4QOFaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjMtYzAxMSA2Ni4xNDU2NjEsIDIwMTIvMDIvMDYtMTQ6NTY6MjcgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6M2FjMDMxZTEtODdkOC00OTVkLWIwNGEtMzEyYzg2ZGI4NmZlIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFEMEQ0QzgxN0VFNzExRTY5MDYwQTdCNTcxQzYzQ0IzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFEMEQ0QzgwN0VFNzExRTY5MDYwQTdCNTcxQzYzQ0IzIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzYgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0I4NTE4REU0ODdFRTYxMUE5Q0Y4RDM1MTJBMjBDMDIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo4MWJhNTkxMi1iZWQ1LTExNzktYjllNC1jOTk0N2NmZDNlODQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAACAQEBAQECAQECAwIBAgMDAgICAgMDAwMDAwMDBQMEBAQEAwUFBQYGBgUFBwcICAcHCgoKCgoMDAwMDAwMDAwMAQICAgQDBAcFBQcKCAcICgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCABkAA0DAREAAhEBAxEB/8QAfgABAQEBAAAAAAAAAAAAAAAABAAFCQEBAAMAAAAAAAAAAAAAAAAAAAMEBRAAAAMGBAQEBwAAAAAAAAAAABMVITESMgQUETNUBWEiAxYBQVJi05WlBmYXKBEBAAEBBQcFAAAAAAAAAAAAABIRASExQROBoaIDY6MEFCRkFSX/2gAMAwEAAhEDEQA/AOSYCAQBa3WJSNBT2nrtKU+ePPLOf7nMcwAQAs7YUom2qFzUXPTInxySYpWZj28ABAC02jSlFQp7vQQ1R88LyiXc2Y7iwAQAvt/fkpdsahD1hPUInLzMIZmPewAQBAIBr97bzhgTQfKtr+AAyACzthSibaoXNRc9MifHJJilZmPbwAEALTaNKUVCnu9BDVHzwvKJdzZjuLABAC+39+Sl2xqEPWE9QicvMwhmY97ABAEAgC1usSkaCntPXaUp88eeWc/3OY5gDe+3P0ojdHu5b7h57hNsLefxggO55MMcfPEYPm/Z6tuhowylOWF9aXY12NHkekhZqTlnSNN5384fkv0sVv2vj9xN7Dq8L//Z) repeat-y;
    width: 13px;
    height: 100%;
    position: absolute;
    left: -13px;
    top: 0;
    cursor: e-resize;
    overflow: hidden;
    list-style: none;
}
.v-ruler li {
    width: 100%;
    height: 100px;
}
.v-ruler li span {
    font-size: 10px;
    color: #535353;
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    display: block;
    padding-left: 5px;
}
.pp-center .preview{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.boxes {
    position: relative;
}
</style>


