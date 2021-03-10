<template>
  <div id="app">
    <app-header></app-header>
    <!-- <section id="home-slider">
      <HomeSlider></HomeSlider>
    </section>

    <a-layout style="background : #fff">
      <Content></Content>
    </a-layout> -->
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>
<script lang="ts">
import AppHeader from "./Header.vue"
import AppFooter from './Footer.vue';
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    AppHeader,
    AppFooter
  },
  setup() {
    return {
      selectedKeys1: ref<string[]>(["2"]),
      selectedKeys2: ref<string[]>(["1"]),
      collapsed: ref<boolean>(false),
      openKeys: ref<string[]>(["sub1"]),
    };
  },
});
</script>
<style>


.site-layout-background {
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: auto;
}
.text-center {
  text-align: center;
}
#what-do-area {
  padding: 100px 0;
}
.section-padding {
  padding: 100px 0;
}

.section-title {
  font-size: 15px;
  font-weight: 300;
  margin-bottom: 80px;
}

.section-title h3 {
  position: relative;
  text-transform: uppercase;
}

.section-title p {
  margin-top: 10px;
}

.section-title .title-line {
  color: #ffd000;
  position: relative;
  font-size: 24px;
}
</style>
