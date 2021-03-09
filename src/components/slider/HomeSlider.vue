<template>
 
  <a-carousel :dots='false' autoplay>
    <img :src="require('../../../public/images/banner1.jpg')" alt="">
    <img :src="require('../../../public/images/banner2.jpg')" alt="">
    <img :src="require('../../../public/images/banner3.jpg')" alt="">
  </a-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      dotPosition: ref('left'),
    };
  },
});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 600px;
  line-height: 600px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
