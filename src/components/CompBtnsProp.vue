<template>
    <div class="xl-props">
        <div class="property-fields">
            <div class="xl-prop-item xl-prop-item-line">
                <div class="xl-prop-item-l"><label>统计</label></div>
                <div class="xl-prop-item-r"><input type="text" class="input-com-input"></div>
            </div>
            <div class="xl-prop-item">
                <div class="xl-prop-item-l"><label>W</label></div>
                <div class="xl-prop-item-c input-number-input-temp"><input type="number" class="input-com-input" @focus="focus" @blur="blur"></div>
                <div class="xl-prop-item-l"><label>H</label></div>
                <div class="xl-prop-item-c input-number-input-temp"><input type="number" class="input-com-input" @focus="focus" @blur="blur"></div> 
            </div>
            <div class="xl-prop-item  xl-prop-item-line">
                <div class="xl-prop-item-l"><label>TOP</label></div>
                <div class="xl-prop-item-c input-number-input-temp"><input type="number" class="input-com-input" @focus="focus" @blur="blur"></div>
                <div class="xl-prop-item-l"><label>LEFT</label></div>
                <div class="xl-prop-item-c input-number-input-temp"><input type="number" class="input-com-input" @focus="focus" @blur="blur"></div>
            </div>
            <div class="xl-prop-item ">
                <div class="xl-prop-item-l"><label>字体颜色</label></div>
                <div class="xl-prop-item-r"><input type="text" class="input-number-input"></div>
            </div>
            <div class="xl-prop-item">
                <div class="xl-prop-item-l"><label>按钮标题</label></div>
                <div class="xl-prop-item-r"><input type="text"></div>
            </div>
            <div class="xl-prop-item">
                <div class="xl-prop-item-l"><label>背景色</label></div>
                <div class="xl-prop-item-r"><input type="text"></div>
            </div>
            <div class="xl-prop-item">
                <div class="xl-prop-item-l"><label>边框圆角</label></div>
                <div class="xl-prop-item-r"><input type="text"></div>
            </div>
            <div class="xl-prop-item xl-prop-item-line">
                <div class="xl-prop-item-l"><label>动画效果</label></div>
                <div class="xl-prop-item-r">
                    <el-select v-model="amivalue" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </div>
            <div class="xl-prop-item">
                <div><span>视频链接</span><el-switch
                v-model="value"
                active-color="#ff4949"
                inactive-color="#333333">
                </el-switch></div>
            </div>
            <div class="xl-prop-item">
                <div class="xl-prop-item-l"><label>视频vid</label></div>
                <div class="xl-prop-item-r"><input type="text"></div>
            </div>
            <div class="xl-prop-item">
               <div><span>外跳链接</span><el-switch
                v-model="value"
                active-color="#ff4949"
                inactive-color="#333333">
                </el-switch></div>
            </div>
            <div class="xl-prop-item">
                <div class="xl-prop-item-l"><label>跳转地址</label></div>
                <div class="xl-prop-item-r"><input type="text"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"CompBtnsProp",
    mounted() {
        
    },
    data() {
      return {
        colors: '#194d33',
        checked: false,
        options: [{
            value: '选项1',
            label: '黄金糕'
        }, 
        {
            value: '选项2',
            label: '双皮奶'
        }, 
        {
            value: '选项3',
            label: '蚵仔煎'
        }],
        amivalue: '',
        value:false
        }
    },
    methods: {
        focus(ev){
            $(ev.target).parent().removeClass('input-number-input-temp');
        },
        blur(ev){
            $(ev.target).parent().addClass('input-number-input-temp');
        },
    },
    computed: {
        pro() {
            return this.$store.getters.fixeddata[0];
        },
        prop_top: {
            get() {
                if (this.pro) return this.pro.tempcont.top;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "top", value: Number(value) });
            }
        },
        prop_left: {
            get() {
                if (this.pro) return this.pro.tempcont.left;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "left", value: Number(value) });
            }
        },
        prop_width: {
            get() {
                if (this.pro) return this.pro.tempcont.width;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "width", value: value });
            }
        },
        prop_height: {
            get() {
                if (this.pro) return this.pro.tempcont.height;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "height", value: value });
            }
        },
        prop_color: {
            get() {
                if (this.pro) return this.pro.tempcont.color;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "color", value: value });
            }
        },
        prop_text: {
            get() {
                if (this.pro) return this.pro.tempcont.text;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "text", value: value });
            }
        },
        prop_bgcolor: {
            get() {
                if (this.pro) return this.pro.tempcont.bgcolor;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "bgcolor", value: value });
            }
        },
        prop_isopacity: {
            get() {
                if (this.pro)
                    return this.pro.tempcont.opacity;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "opacity", value: value });
            }
        },
        prop_isvid: {
            get() {
                if (this.pro)
                    return this.pro.tempcont.isvid;
            },
            set(value) {
                this.checked = !(this.checked);
                store.commit("editBtnsSnData", { index: this.vindex, nature: "isvid", value: value });
            }
        },
        prop_vid: {
            get() {
                if (this.pro) return this.pro.tempcont.vid;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "vid", value: value });
            }
        },
        prop_link: {
            get() {
                if (this.pro) return this.pro.tempcont.link;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "link", value: value });
            }
        },
        prop_animate: {
            get() {
                if (this.pro) return this.pro.tempcont.animate;
            },
            set(value) {
                store.commit("editBtnsSnData", { index: this.vindex, nature: "animate", value: value });
            }
        }
    }

}
</script>
<style scoped>

</style>


