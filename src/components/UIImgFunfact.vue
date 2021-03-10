<template>
  <div
    class="overlay img-funfact"
    :style="{
      'background-image':
        'url(' + require('../assets/img/funfact-bg.jpg') + ')',
    }"
  >
    <div class="container">
      <a-row class="">
        <a-col :span="24">
          <a-row :gutter="[16, 16]">
            <a-col :lg="{ span: 8 }" :xs="{ span: 24 }">
              <div class="single-funfact">
                <div class="funfact-icon"><SmileOutlined /></div>
                <div class="funfact-content">
                  <span step="200">{{ count }}</span
                  >+
                  <h4>Car In Stock</h4>
                </div>
              </div>
            </a-col>
            <a-col :lg="{ span: 8 }" :xs="{ span: 24 }">
              <div class="single-funfact">
                <div class="funfact-icon"><CarOutlined /></div>
                <div class="funfact-content">
                  <span class="couter">550</span>+
                  <h4>Car In Stock</h4>
                </div>
              </div>
            </a-col>
            <a-col :lg="{ span: 8 }" :xs="{ span: 24 }">
              <div class="single-funfact">
                <div class="funfact-icon"><HomeOutlined /></div>
                <div class="funfact-content">
                  <span class="couter">550</span>+
                  <h4>Car In Stock</h4>
                </div>
              </div>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<script lang="ts">
import {
  SmileOutlined,
  CarOutlined,
  HomeOutlined,
} from "@ant-design/icons-vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    SmileOutlined,
    CarOutlined,
    HomeOutlined,
  },
});
</script>
<style scoped>
.img-funfact {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: #fff;
  padding: 110px 0;

}
.overlay {
  position: relative;
  z-index: 1;
}
.overlay::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: -1;
}
.funfact-content {
  font-size: 40px;
  font-weight: 700;
  padding-left: 25px;
}
.funfact-content h4 {
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.single-funfact {
  display: flex;
  justify-content: center;
}
.funfact-icon {
  font-size: 44px;
  display: flex;
  align-items: center;
  color: #fcfc00;
}
</style>
