<template>
  <div id="app">
    <div class="container-fluid px-0 mx-0" id="main">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app{
  display: flex;
  flex-flow: column;
  min-height: 100vh;
}
#main{
  display:flex;
  flex-flow:column;
  flex: 1 1 auto;
}
</style>
<script>
export default{
  created(){
    document.title = "Bevásárló"
  }
}
</script>