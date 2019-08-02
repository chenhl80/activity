<template>
    <div class="propgear" @mouseenter.stop.prevent="enter(vindex)" @mouseleave.stop.prevent="leave()">
        <div class="propstyle">
            <a class="ico ico-remove" @click.stop.prevent="remove(vindex)" :index="vindex" :temp="vtempprop">删除</a>
            <a class="ico ico-gear" @click.stop.prevent="setup(vtempprop,vindex)" :index="vindex" :temp="vtempprop">设置</a>
            <a class="ico ico-dragprv" @click.stop.prevent="prev(vindex)" :index="vindex" :temp="vtempprop" v-if="vflag">上移</a>
            <a class="ico ico-dragnext" @click.stop.prevent="next(vindex)" :index="vindex" :temp="vtempprop" v-if="vflag">下移</a>
        </div>
        <div class="removemask" v-if="remasks == vindex" @click.stop.prevent="setup(vtempprop,vindex)"></div>
    </div>  
</template>
<script>
export default {
    props: ["vindex", "vtempprop", "vflag"],
    name:"AddEditDel",
    data() {
        return {
            remasks: -1,//鼠标移入移出组件时遮罩显示判断 -1不显示 
        }
    },
    computed: {
        len() {
            return this.$store.state.actdata.length;
        }
    },
    mounted(){
        //console.log(this.$root);//根组件
    },
    methods: {
        enter(num) {
            this.remasks = num;
        },
        leave() {
            this.remasks = -1;
        },
        remove(num) {
            this.$confirm('是否删除此模块?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$root.$emit("clickPropCurFun", { temp: "ModBodyProp", index: 0 });
                let nature = "";
                if (this.vflag) {
                    nature = "actdata";
                } else {
                    nature = "fixeddata";
                }
                this.$store.dispatch("removeppdata", { num: num, nature: nature });
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        setup(temp, index) {
            console.log(temp, index);
            this.$root.$emit("clickPropCurFun", { temp: temp, index: index });
        },
        prev(index) {
            if (index == 0) {
                alert("已经到顶了！");
            } else {
                this.$store.dispatch('unDateSnData', {
                    oldinx: index,
                    newinx: index - 1
                });
            }
        },
        next(index) {
            console.log(this.len);
            if (index == (this.len - 1)) {
                alert("已经到底了！");
            } else {
                this.$store.dispatch('unDateSnData', {
                    oldinx: index,
                    newinx: index + 1
                });
            }
        }
    }
}
</script>
<style scoped>
.propgear {
    display: block;
    width: 100%;
    height: 100%;
    z-index: 1000;
    position: absolute;
    top: 0;
    left: 0;
}

.propgear .propstyle {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    z-index: 1002;
}

.propgear .ico {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0;
    font-size: 0px;
    float: left;
    cursor: pointer;
}

.propgear .ico-remove {
    background: url(/static/images/icon/shanchu.png) no-repeat;
    background-size: 100% auto;
}

.propgear .ico-gear {
    background: url(/static/images/icon/shezhi.png) no-repeat;
    background-size: 100% auto;
}

.propgear .ico-dragprv {
    background: url(/static/images/icon/shangyi.png) no-repeat;
    background-size: 100% auto;
}

.propgear .ico-dragnext {
    background: url(/static/images/icon/xiayi.png) no-repeat;
    background-size: 100% auto;
}
.removemask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
    background: rgba(0, 0, 0, 0.5);
    cursor: pointer;
}
</style>