<template>
    <a-row type="flex" justify="center" align="center">
      <a-col :span="16">
        <div class="section-title  text-center">
          <h2>WHAT WE DO</h2>
          <span class="title-line"><i class="fa fa-car"></i></span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </a-col>
    </a-row>

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
import { defineComponent } from "vue";
export default defineComponent({
  components: {
      Card
  },
 
});
</script>