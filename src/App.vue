<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import Home from './layout/Index.vue';

@Options({
  components: {
    HelloWorld,
    Home
  },
    
})
export default class App extends Vue {}
</script>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap');
  #app{
    overflow: hidden;
  }

</style>
