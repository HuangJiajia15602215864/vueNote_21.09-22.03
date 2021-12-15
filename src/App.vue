<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted(){
     window.onpopstate = () =>{
       if(!this.$route.meta.allowBack){
         history.go(1)
       }
     }
    },
  }
</script>