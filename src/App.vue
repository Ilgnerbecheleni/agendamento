

<template>
<MenuNav/>
  
  <router-view/>
</template>

<script >
import MenuNav from './components/menuNav.vue';
export default {
  components:{
    MenuNav,
  }
}

</script>

<style >

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #eee;
  height: 97vh;
  overflow: hidden;
}


</style>
