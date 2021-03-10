<template>
  <a-layout>
    <a-layout-header class="header" collapsible>
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px', backgroundColor: 'transparent' }"
      >
        <a-menu-item :style="{ backgroundColor: 'transparent' }" key="1"
          >HOME</a-menu-item
        >

        <a-menu-item :style="{ backgroundColor: 'transparent' }" key="3"
          ><router-link class="btn btn-primary" :to="'About'">ABOUT</router-link>
        </a-menu-item>
        <a-menu-item :style="{ backgroundColor: 'transparent' }" key="5"
          >SERVICES</a-menu-item
        >
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <MailOutlined />
              <span>CARS</span>
            </span>
          </template>
          <a-menu-item key="6">CAR LEFT SIDEBAR</a-menu-item>
          <a-menu-item key="7">CAR RIGHT SIDEBAR</a-menu-item>
          <a-menu-item key="8">CAR WITHOUT SIDEBAR</a-menu-item>
          <a-menu-item key="9">CAR DETAILS</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <MailOutlined />
              <span>PAGES</span>
            </span>
          </template>
          <a-menu-item key="10">PRICING</a-menu-item>
          <a-menu-item key="11">DRIVE</a-menu-item>
          <a-menu-item key="12">FAQ</a-menu-item>
          <a-menu-item key="13">HELP DESK</a-menu-item>
          <a-menu-item key="14">GALLERY</a-menu-item>
          <a-menu-item key="15">LOGIN</a-menu-item>
          <a-menu-item key="16">REGISTER</a-menu-item>
          <a-menu-item key="17">404</a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub4">
          <template #title>
            <span>
              <MailOutlined />
              <span>BLOG</span>
            </span>
          </template>
          <a-menu-item key="18">BLOG PAGES</a-menu-item>
          <a-menu-item key="19">BLOG DETAILS</a-menu-item>
        </a-sub-menu>

        <a-menu-item :style="{ backgroundColor: 'transparent' }" key="7"
          >CONTACT</a-menu-item
        >
      </a-menu>
    </a-layout-header>
    <section id="home-slider">
      <HomeSlider></HomeSlider>
    </section>

    
    <a-layout style="background:#fff">
      <Content></Content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import HomeSlider from "../slider/HomeSlider.vue";
import Content from "./Content.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    HomeSlider,
    Content,
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

.site-layout-background {
  background: #fff;
}
.header {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.3) !important;
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
