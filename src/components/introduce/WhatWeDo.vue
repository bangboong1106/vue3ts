<template>

  <Title></Title>
  <a-row type="flex" justify="space-around" align="center" :gutter="[16, 16]">
    <a-col :span="5">
      <Card :imageID="'card1.png'"></Card>
    </a-col>
    <a-col :span="5">
      <Card :imageID="'card2.png'"></Card>
    </a-col>
    <a-col :span="5">
      <Card :imageID="'card3.png'"></Card>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import Card from "../card/Card.vue";
import Title from "../introduce/Title.vue";

  <a-row type="flex" justify="center" align="center">
    <a-col :span="16">
      <div class="section-title text-center">
        <h3 class="section-sub-title">WHAT WE DO</h3>
        <span class="title-line"><CarOutlined /></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </a-col>
  </a-row>

  <div class="container">
    <a-row type="flex" justify="space-around" align="center" :gutter="[24, 24]">
      <a-col :span="8" :xs="{span:24}" :sm="{span:8}">
        <Card :imageID="'card1.png'"></Card>
      </a-col>
      <a-col :span="8" :xs="{span:24}" :sm="{span:8}">
        <Card :imageID="'card2.png'"></Card>
      </a-col>
      <a-col :span="8" :xs="{span:24}" :sm="{span:8}">
        <Card :imageID="'card3.png'"></Card>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import Card from "../card/Card.vue";
import { CarOutlined } from "@ant-design/icons-vue";

import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Card,

    Title,
  },
});
</script>

    CarOutlined,
  },
});
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 10px;
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
.section-sub-title{
  font-size: 32px;
  font-weight: 700;
  margin: 0;
}

</style>

