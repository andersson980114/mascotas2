<template>
  <!--<div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>-->
  <Carousel/>
    <Login/>
  <PetTable/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue';
import Carousel from '@/components/Carousel.vue';
import PetTable from '@/components/PetTable.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Login,
    Carousel,
    PetTable,
  }
}
</script>
