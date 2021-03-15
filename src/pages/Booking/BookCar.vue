<template>
  <div class="book-car container">
    <a-row>
      <a-col
        :xs="{ span: 24 }"
        :lg="{ span: 6 }"
        :md="{ span: 24 }"
      >
        <order-info></order-info>
      </a-col>
      <a-col
        :xs="{ span: 24 }"
        :lg="{ span: 12, offset: 1 }"
        :md="{ span: 24 }"
      >
        <div class="list-car">
          <a-tabs v-model:activeKey="activeKey">
            <a-tab-pane key="1" tab="Ô tô">
              <!-- <ui-list-car-brand></ui-list-car-brand> -->
              <ui-info-car-single></ui-info-car-single>

            </a-tab-pane>
            <a-tab-pane key="2" tab="Xe máy">
              <ui-info-car-single></ui-info-car-single>

            </a-tab-pane>
          </a-tabs>
        </div>
      </a-col>
      <a-col
        :xs="{ span: 24 }"
        :lg="{ span: 6, offset: 1 }"
        :md="{ span: 24 }"
      >

      </a-col>
    </a-row>
  </div>
</template>
<script>
import { defineComponent ,ref } from "vue";
import UiInfoCarSingle from "../../components/Card/UiInfoCarSingle.vue";
import OrderInfo from "../../components/Form/OrderInfo.vue";
// import UiListCarBrand from "../../components/List/UiListCarBrand.vue";
export default defineComponent({
  setup() {
    return{
       activeKey: ref('1'),
    }
  },
  components: {
    // UiListCarBrand,
    OrderInfo,
    UiInfoCarSingle
  },
});
</script>
<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
.book-car {
  margin-top: 100px;
}
.list-car {
  padding: 30px 15px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 30%);
  margin-bottom: 30px;
}
</style>
