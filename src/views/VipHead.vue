<template>
    <div class="global-top">
        <h3>{{title}}</h3>
        <div class="topbtns">
            <a href="javascript:;" @click.stop.prevent="back" class="abtn aback">&lt;返回列表</a>
            <a href="javascript:;" @click.stop.prevent="save" class="abtn asave" v-loading.fullscreen.lock="fullscreenLoading">暂存</a>
            <a href="javascript:;" @click.stop.prevent="preview" class="abtn aview">预览</a>
            <a href="javascript:;" @click.stop.prevent="issue" class="abtn aissue" v-loading.fullscreen.lock="fullscreenLoading">发布</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'VipHead',
    components: {
        
    },
    data() {
        return {
            title: '模块化平台',
            fullscreenLoading: false
        }
    },
    created(){
        // axios.get('/posts.json').then((data) =>{
        //     console.log(data.data);
        // })
    },
    methods: {
        back() {
            window.history.back(-1);
        },
        save() {
            console.log(this.$router);
            console.log(this.$route.query);
            let query = this.$route.query;
            let cid = query.actid+query.id;
            //localStorage.setItem(cid,JSON.stringify(this.$store.state));
            this.fullscreenLoading = true;
            axios.put('/posts/'+cid+'.json',this.$store.state).then((data) =>{
                console.log(data);
                setTimeout(() => {this.fullscreenLoading = false;}, 500);
            })
        },
        reset() {
            //重置
            //localStorage.removeItem(actpage);
            //location.reload();
            //localStorage.clear();
        },
        preview() {
            //预览
        },
        issue() {
            //发布
        }
    }
}
</script>
<style scoped>
.global-top {
    height: 74px;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #353535;
    border-bottom: 1px solid #151515;
}

.global-top h3 {
    position: absolute;
    top: 10px;
    left: 20px;
    width: 400px;
    font-size: 17px;
    color: #ffffff;
}

.global-top .topbtns {
    position: absolute;
    bottom: 10px;
    right: 5px;
}

.global-top .topbtns a {
    display: block;
    height: 30px;
    line-height: 30px;
    color: #ffffff;
    padding: 0 20px;
    margin: 0px 5px;
    float: left;
    border-radius: 5px;
    text-decoration: none;
    letter-spacing: 2px;
}

.global-top .topbtns .aback {
    background: #588aa6
}

.global-top .topbtns .asave {
    background: #70b170
}

.global-top .topbtns .areset {
    background: #bd5f5f
}

.global-top .topbtns .aview {
    background: #F7763B
}

.global-top .topbtns .aissue {
    background: rgb(207, 9, 2)
}
</style>


