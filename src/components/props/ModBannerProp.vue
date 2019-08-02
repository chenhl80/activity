<template>
    <div class="xl-props">
        <div class="property-fields">
            <div class="xl-prop-head">
                <h4>幻灯组件</h4>
                <p>支持配置最多5个幻灯自动播放</p>
            </div>
            <div class="xl-prop-item xl-prop-item-line">
                <div class="xl-prop-item-l"><label>统计</label></div>
                <div class="xl-prop-item-r"><input type="text" v-model="prop_statistics" class="input-com-input"></div>
            </div>
            <div class="xl-prop-item">
                <div class="xl-prop-item-l"><label>高度</label></div>
                <div class="xl-prop-item-r"><input type="text" v-model="prop_height" class="input-com-input"></div>
            </div>
            <div class="xl-prop-item xl-prop-item-line">
                <div class="xl-prop-item-l"><label>切换时间</label></div>
                <div class="xl-prop-item-r"><input type="text" v-model="prop_time" class="input-com-input"></div>
            </div>
            <div class="xl-prop-title">
                <h4>图片属性</h4>
            </div>
            <div class="xl-prop-banner xl-prop-item-line pb10" v-for="(item,index) in list" :key="'banner'+index" :index="index">
                <div class="xl-prop-item">
                    <div class="xl-prop-item-l"><label>序号</label></div>
                    <div class="xl-prop-item-r"><input type="text" v-model="item.sort" class="input-com-input"></div>
                </div>
                <div class="xl-prop-item">
                    <div class="xl-prop-item-l"><label>背景色</label></div>
                    <div class="xl-prop-item-r">
                        <input type="text" v-model="item.bgcolor" class="input-com-input">
                        <el-color-picker v-model="item.bgcolor"></el-color-picker>
                    </div>
                </div>
                <div class="xl-prop-item">
                    <div class="xl-prop-item-l"><label>跳转类型</label></div>
                    <div class="xl-prop-item-r">
                        <el-select v-model="item.kind" placeholder="请选择">
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
                    <div class="xl-prop-item-l"><label>频道ID</label></div>
                    <div class="xl-prop-item-r"><input type="text" v-model="item.vid" class="input-com-input"></div>
                </div>
                <div class="xl-prop-item">
                    <div class="xl-prop-item-l"><label>跳转链接</label></div>
                    <div class="xl-prop-item-r"><input type="text" v-model="item.link" class="input-com-input"></div>
                </div>
                <div class="xl-prop-item">
                    <div class="xl-prop-item-l"><label>图片地址</label></div>
                    <div class="xl-prop-item-r"><input type="text" v-model="item.img" class="input-com-input"></div>
                </div>
                <div class="xl-prop-item">
                    <div class="prop-item-img">
                        <ModUploadTemp v-bind:vindex="vindex" vdatatype="actdata" vnature="list" vsubnode="img" v-bind:vsubinx="index"></ModUploadTemp>
                    </div>
                    <div class="prop-item-del">
                        <a class="del" @click.stop.prevent="del(index)">删除</a>
                    </div>
                </div>
            </div>
            <div class="add btn_add icon-add" @click.stop.prevent="add()">添加</div>
        </div>
    </div>
</template>
<script>
import ModUploadTemp from "@/components/templete/ModUploadTemp";
export default {
    name:"ModBannerProp",
    props:['vindex'],
    compontents:{
        ModUploadTemp
    },
    mounted() {
    },
    data() {
      return {
        colors: '#194d33',
        checked: false,
        swiper: [],
        options: [{
            value: 'default',
            label: '无跳转'
        }, 
        {
            value: 'vid',
            label: '跳转视频'
        }, 
        {
            value: 'link',
            label: '跳转链接'
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
        add() {
            if (this.list.length >= 5) {
                return false;
            }
            console.log('this.list.length', this.list.length);
            this.swiper.push({
                img: '',
                imgw:'',
                imgh:'',
                link: '',
                bgcolor: '#000000',
                sort: this.list.length,
                kind: 0,
                vid: ''
            });
            console.log('add', this.swiper);
            this.$store.commit("editSnData", { index: this.vindex, nature: "list", value: this.swiper });
        },
        del(inx) {
            this.$confirm('是否确认删除?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.swiper.splice(inx, 1);
                console.log('del', this.swiper);
                this.$store.commit("editSnData", { index: this.vindex, nature: "list", value: this.swiper });
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消删除'
                });
            });
        }
    },
    computed: {
        pro() {
            return this.$store.getters.actdata[2];
            //return this.$store.getters.actdata[this.vindex];
        },
        list() {
            if(this.pro){
                let tlist = this.pro.tempcont.list;
                console.log('tempcont.list is Array:',tlist instanceof Array);
                if(Array.isArray(tlist)){
                    this.swiper = tlist;
                }else{
                    let arrlist = [];
                    for(let k in tlist){
                        arrlist.push(tlist[k]);
                    }
                    this.$store.commit("editSnData", { index: this.vindex, nature: "list", value: Object.assign(this.swiper, arrlist)});
                  // this.swiper.splice(0,0,this.pro.tempcont.list[0]);
                }
            }  
            return this.swiper;
        },
        prop_statistics: {
            get() {
                if (this.pro) return this.pro.tempcont.statistics;
            },
            set(value) {
                this.$store.commit("editSnData", { index: this.vindex, nature: "statistics", value: value.replace(/^\s+|\s+$/g, "") });
            }
        },
        prop_tjid: {
            get() {
                if (this.pro) return this.pro.tempcont.tj_id;
            },
            set(value) {
                this.$store.commit("editSnData", { index: this.vindex, nature: "tj_id", value: value.replace(/^\s+|\s+$/g, "") });
            }
        },
        prop_height: {
            get() {
                if (this.pro) return this.pro.tempcont.height;
            },
            set(value) {
                this.$store.commit("editSnData", { index: this.vindex, nature: "height", value: Number(value.replace(/^\s+|\s+$/g, "")) });
            }
        },
        prop_time: {
            get() {
                if (this.pro) return this.pro.tempcont.time;
            },
            set(value) {
                this.$store.commit("editSnData", { index: this.vindex, nature: "time", value: Number(value.replace(/^\s+|\s+$/g, "")) });
            }
        }
    }
}
</script>
<style scoped>
.del{
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
}
.icon-add{
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 4px;
    background: rgb(189, 95, 95);
    color: #ffffff;
    cursor: pointer;
    width: 200px;
    margin: 10px auto;
}
</style>


