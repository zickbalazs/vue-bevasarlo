<template>
  <div id="app">
    <NavBar/>
    <div class="container-fluid" id="main">
      <router-view/>
    </div>
    <FooterComponent/>
  </div>
</template>

<style>
#app{
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}
#main{
  flex: 1 1 auto;
}
</style>
<script>
import NavBar from './components/NavBar.vue';
import FooterComponent from './components/FooterComponent.vue';
export default{
  components:{
    NavBar,
    FooterComponent
  }
}
</script>