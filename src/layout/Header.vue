<template>
  <a-layout>
    <a-layout-header class="header " collapsible>
      <div class="container wrapper">
        <div class="logo">
          <img :src="require('../assets/logo.png')" alt="" >
        </div>
        <ui-menu-topnav></ui-menu-topnav>
      </div>
    </a-layout-header>
    <ui-slider-home></ui-slider-home>
  </a-layout>
</template>
<script>
import { defineComponent } from "vue";
import UiMenuTopnav from "./../components/Menu/UiMenuTopnav.vue";
import UiSliderHome from '../components/Slider/UiSliderHome.vue';
export default defineComponent({
  components: {
    UiMenuTopnav,
    UiSliderHome
  },
  setup() {},
  methods:{
    
  }
});
</script>

<style scoped>

.ant-row-rtl .logo {
  float: right;
  margin: 16px 0 16px 24px;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
.wrapper {
  display: flex;
  justify-content: space-between;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
