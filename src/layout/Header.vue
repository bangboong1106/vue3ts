<template>
  <a-layout>
    <a-layout-header class="header " collapsible>
      <div class="container wrapper">
        <div class="logo" />
        <ui-menu-topnav></ui-menu-topnav>
      </div>
    </a-layout-header>
  </a-layout>
</template>
<script>
import { defineComponent } from "vue";
import UiMenuTopnav from "./../components/Menu/UiMenuTopnav.vue";
export default defineComponent({
  components: {
    UiMenuTopnav,
  },
  setup() {},
});
</script>

<style scoped>
.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

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
