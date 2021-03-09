<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';
import DashboardLayout from './components/layout/DashboardLayout.vue';

@Options({
  components: {
    HelloWorld,
    'dashboard-layout' : DashboardLayout
  },
    
})
export default class App extends Vue {}
</script>

<style>

</style>
