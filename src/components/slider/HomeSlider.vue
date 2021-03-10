<template>
  <a-carousel :dots="false" autoplay effect="fade">
    <div class="home-slider-item overlay">
      <img :src="require('../../assets/img/slider/banner4.jpg')" alt=""  style="width:100%"/>
    </div>
    <div class="home-slider-item overlay">
      <img :src="require('../../assets/img/slider/banner3.jpg')" alt="" style="width:100%" />
    </div>
    <div class="home-slider-item overlay">
      <img :src="require('../../assets/img/slider/banner2.jpg')" alt="" style="width:100%" />
    </div>
    <div class="home-slider-item overlay">
      <img :src="require('../../assets/img/slider/banner1.jpg')" alt=""  style="width:100%"/>
    </div>
  </a-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return {
      dotPosition: ref("left"),
    };
  },
});
</script>
<style scoped>
/* For demo */
/*.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 800px;
  line-height: 800px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
} */
.home-slider-item {
  object-fit: cover;
  height: 700px;
  line-height: 700px;
  overflow: hidden;
  width: 100%;
}
.overlay {
  position: relative;
  opacity: 1;
}
.overlay::after {
  content: "";
  display: block;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  height: 100%;
  width: 100%;
}
@media (max-width: 576px){
  .home-slider-item{
    height: 280px;
  }
  
}
@media  (min-width: 577px) and (max-width: 890px){
  .home-slider-item{
    height: 480px;
  }
  }

  

</style>
