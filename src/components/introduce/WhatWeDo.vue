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
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Card,
    Title,
  },
});
</script>
