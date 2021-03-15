<template>
  <div>
    <a-row>
      <a-col :span="24">
        <ui-info-car-single></ui-info-car-single>
        
      </a-col>
     
    </a-row>
    
  </div>
</template>
<script>
import { defineComponent } from "vue";
import UiInfoCarSingle from "../Card/UiInfoCarSingle.vue";
export default defineComponent({
  setup() {},
  components: {
    UiInfoCarSingle,
  },
});
</script>
<style scoped></style>
