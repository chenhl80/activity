<template>
  <div class="main">
    <div class="list">
      <div class="list_item">
        <a href="javascript:;">
          <img class="figure_pic" src="//puui.qpic.cn/vcover_vt_pic/0/tyyx4oj6ejkooa01533785400/220" alt="法医秦明之幸存者">
        </a>
        <div class="figure_detail">
          <p>法医秦明之幸存者</p>
          <router-link to="/edit?id=1212&actid=happy_act" class="btn-edit">编辑</router-link>
          <button>删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data(){
    return {

    }
  },
  methods:{

  },
  computed:{

  }
}
</script>
<style scoped>
.main{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.list{
  width: 1710px;
  position: relative;
  margin: 0 auto;
}
.list_item{
  display: inline-block;
  position: relative;
  margin: 0 18px 40px 0;
  padding: 0;
  color: #999;
  font-size: 12px;
  letter-spacing: normal;
  vertical-align: top;
  width: 198px;
}
.figure_pic {
    -o-object-fit: cover;
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    background: #f8f8f8;
    background-color: #ececec;
    background-color: rgba(236,236,236,.1);
}
@media (max-width: 1789px){
  .list{
    width: 1500px;
  }
  .list_item{
    width: 198px;
  }
}
@media (max-width: 1549px){
  .list{
    width: 1200px;
  }
  .list_item{
    width: 185px;
  }
}
@media (max-width: 1280px){
  .list{
    width: 990px;
  }
  .list_item{
    width: 183px;
  }
}
</style>
