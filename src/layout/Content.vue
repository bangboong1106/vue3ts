<template>
  <div id="book-a-car">
    <booking-form></booking-form>
  </div>
  <section id="what-do-area">
    <what-we-do></what-we-do>
  </section>
  <div class="partner-area">
    <partner-slider></partner-slider>
  </div>
  <div class="partner-area" style="background:#EAEAEA ; padding :20px 50px">
      <partner-slider></partner-slider>
  </div>
  <div class="service-area">
    
    <service></service>
  </div>
  <div class="funfact">
    <funfact></funfact>
  </div>
  <div class="car-info">
    
    <a-row>
      <a-col :span = "6">
        <menu-car></menu-car>

      </a-col>
      <a-col :span = "12">
          <img :src="require('../../../public/images/car-1.jpg')" style="width:100%;height:auto">
      </a-col>
      <a-col :span = "6">

      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import BookingForm from "../components/booking/Form.vue";
import WhatWeDo from "../components/introduce/WhatWeDo.vue";
import PartnerSlider from "../components/slider/PartnerSlider.vue";
import Service from "../components/introduce/Service.vue";
import Funfact from "../components/introduce/Funfact.vue";
import MenuCar from "../components/listCar/Menu.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  components: {
    BookingForm,
    WhatWeDo,
    PartnerSlider,
    Service,
    Funfact,
    MenuCar,
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

.section-title h2 {
  margin-bottom: 10px;
  position: relative;
  text-transform: uppercase;
}

.section-title p {
  margin-top: 10px;
}

.section-title .title-line {
  color: #ffd000;
  position: relative;
}
</style>
