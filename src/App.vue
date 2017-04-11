<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    
  }
}
</script>

<style lang="less">
#app{
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
</style>
