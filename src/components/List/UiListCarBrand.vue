<template>
  <div>
    <a-tabs
      :tab-position="mode"
      :style="{ height: '200px' }"
      @prevClick="callback"
      @nextClick="callback"
      v-model:activeKey="activeKey"
    >
      <a-tab-pane
        v-for="(i, index) in listBrand"
        :key="index"
        :tab="`${i.name}`"
      >
        <ui-list-car></ui-list-car>
      
      </a-tab-pane>
    </a-tabs>
    
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import UiListCar from "../List/UiListCar.vue";
export default defineComponent({
  components: {
    UiListCar,
  },
  setup() {
    const mode = ref("top");
    const activeKey = ref("1");
    const callback = (val: string) => {
      console.log(val);
    };
    const listBrand: Array<Object> = [
      {
        name: "Ducati",
      },
      {
        name: "Toyota",
      },
      {
        name: "Yamaha",
      },
      {
        name: "Honda",
      },
    ];
    return {
      mode,
      callback,
      activeKey,
      listBrand,
    };
  },
});
</script>
<style scoped></style>
