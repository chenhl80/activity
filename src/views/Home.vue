<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <vip-head/>
    <vip-center></vip-center>
  </div>
</template>

<script>
// @ is an alias to /src
import VipHead from '@/views/VipHead.vue'
import VipCenter from '@/views/VipCenter.vue'
// import VipFoot from '@/views/VipFoot.vue'

export default {
  name: 'home',
  components: {
    VipHead,
    VipCenter
  }
}
</script>
<style scoped>
.home{
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>

