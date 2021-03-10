<template>
  <div class="home-page">
    <ui-slider-home></ui-slider-home>
    <ui-form-booking></ui-form-booking>
    <div class="what-do-area">
      <ui-title
        :title="'WHAT WE DO'"
        :text="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"
      ></ui-title>
      <div class="container">
        <a-row
          type="flex"
          justify="space-around"
          align="center"
          :gutter="[24, 24]"
        >
          <a-col :span="8" :xs="{ span: 24 }" :sm="{ span: 8 }">
            <Card :imageID="'card1.png'"></Card>
          </a-col>
          <a-col :span="8" :xs="{ span: 24 }" :sm="{ span: 8 }">
            <Card :imageID="'card2.png'"></Card>
          </a-col>
          <a-col :span="8" :xs="{ span: 24 }" :sm="{ span: 8 }">
            <Card :imageID="'card3.png'"></Card>
          </a-col>
        </a-row>
      </div>
    </div>
    <!-- <div class="partner-area">
      <ui-slider-partner></ui-slider-partner>
    </div> -->
    <div class="service-area">
      <div class="container">
        <ui-title
          :title="'OUR SERVICES'"
          :text="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"
        ></ui-title>

        <a-row :gutter="[24, 24]">
          <a-col :lg="{ span: 8 }" :xs="{ span: 24 }">
            <ui-info-service></ui-info-service>
          </a-col>
          <a-col :lg="{ span: 8 }" :xs="{ span: 24 }">
            <ui-info-service></ui-info-service>
          </a-col>
          <a-col :lg="{ span: 8 }" :xs="{ span: 24 }">
            <ui-info-service></ui-info-service>
          </a-col>
        </a-row>
      </div>
    </div>
    <div class="funfact-area">
      <ui-img-funfact></ui-img-funfact>
    </div>
    <div class="our-car">
      <div class="container">
        <ui-title
          :title="'OUR CARS'"
          :text="'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'"
        ></ui-title>
        <ui-menu-list-car></ui-menu-list-car>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import UiSliderHome from "../components/Slider/UiSliderHome.vue";
// import UiSliderPartner from "../components/Slider/UiSliderPartner.vue";
import UiFormBooking from "../components/BookingCar/UiFormBooking.vue";
import UiTitle from "../components/UiTitle.vue";
import Card from "../components/Card/UiImgSingle.vue";
import UiInfoService from "../components/Card/UiInfoService.vue";
import UiImgFunfact from "../components/UIImgFunfact.vue";
import UiMenuListCar from "../components/Menu/UiMenuListCar.vue";
export default defineComponent({
  components: {
    UiSliderHome,
    // UiSliderPartner,
    UiFormBooking,
    UiTitle,
    Card,
    UiInfoService,
    UiImgFunfact,
    UiMenuListCar
  },
  setup() {},
});
</script>
<style scoped>
.service-area {
  padding: 100px 0;
}
.what-do-area {
  padding: 100px 0 0 0 ;
}
.our-car {
  padding: 100px 0;

}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
span.title-line::before {
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  background: #333;
  position: absolute;
  top: 15px;
  right: -60px;
}
span.title-line::after {
  content: "";
  display: block;
  width: 50px;
  height: 2px;
  background: #333;
  position: absolute;
  top: 15px;
  left: -60px;
}
</style>
