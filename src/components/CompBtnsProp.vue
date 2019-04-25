<template>
    <div class="pp-prop-btn  xl-prop-comm-style">
            <div class="toolbar">
                <div class="toolbar-wh-row">
                    <p class="toolbar-row-title">位置</p> 
                    <span class="toolbar-position-inp"><em>top</em><input v-model="prop_top"></span> 
                    <span class="toolbar-position-inp"><em>left</em><input v-model="prop_left"></span>
                </div> 
                <div class="toolbar-wh-row">
                    <p class="toolbar-row-title">尺寸</p> 
                    <span class="toolbar-size-inp"><em>width</em><input v-model="prop_width"></span> 
                    <span class="toolbar-size-inp"><em>height</em><input v-model="prop_height"></span>
                </div>
                <div class="toolbar-wh-row">
                    <p class="toolbar-row-title">文本</p> 
                    <span class="toolbar-size-inp"><em>color</em><input v-model="prop_color"></span> 
                    <span class="toolbar-size-inp"><em>text</em><input v-model="prop_text"></span>
                </div>
                <div class="toolbar-wh-row">
                    <p class="toolbar-row-title">背景</p> 
                    <span class="toolbar-size-inp"><em>bgcolor</em><input v-model="prop_bgcolor"></span> 
                    <span class="toolbar-size-inp"><em></em><el-checkbox v-model="prop_isopacity">opacity</el-checkbox></span>
                </div> 
                <div class="toolbar-wh-row">
                    <p class="toolbar-row-title"><el-checkbox v-model="prop_isvid">视频链接</el-checkbox></p>
                    <span class="toolbar-size-inp"><em>vid</em><input :disabled="!checked" v-model="prop_vid"></span> 
                </div> 
                <div class="toolbar-wh-row">
                    <p class="toolbar-row-title">外跳链接</p> 
                    <span class="toolbar-size-inpt"><em>link</em><input v-model="prop_link"></span> 
                </div> 
                <div class="toolbar-wh-row">
                    <p class="toolbar-row-title">动效</p> 
                    <span class="toolbar-size-inpt"><em>animate</em><select v-model="prop_animate"><option>default</option><option>pulse</option></select></span> 
                </div>  
                <div class="toolbar-wh-row">
                    <p class="toolbar-row-title">上传图片</p> 
                    <CompUploadImage :custom="'uploadBtnPic'" :inx="1"></CompUploadImage>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2M</div>
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
            checked: false
        }
    },
    methods: {

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


