<template>
  <div>
    <a-tabs :tab-position="mode" v-model:activeKey="activeKey">
      <a-tab-pane
        v-for="(i, index) in listCar"
        :key="index + 1"
        :tab="`${i.name}`"
      >
        <a-row>
          <a-col
            :lg="{ span: 15, gutter: [16, 16] }"
            :xs="{ span: 24, gutter: [16, 16] }"
            :sm="{ span: 24, gutter: [16, 16] }"
          >
            <img
              :style="{ width: '100%' }"
              :src="require(`../../assets/img/ListCar/${i.avatar}`)"
              alt=""
            />
          </a-col>
          <a-col :span="1"></a-col>
          <a-col
            :lg="{ span: 8, gutter: [16, 16] }"
            :xs="{ span: 24, gutter: [16, 16] }"
            :sm="{ span: 24, gutter: [16, 16] }"
          >
            <ui-table-info-car></ui-table-info-car>
          </a-col>
        </a-row>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import UiTableInfoCar from "../Table/UiTableInfoCar.vue";
export default defineComponent({
  components: {
    UiTableInfoCar,
  },
  setup() {
    const mode = ref("left");
    const activeKey = ref("1");
    const callback = (val: string) => {
      console.log(val);
    };

    const listCar: Array<Object> = [
      {
        id: 1,
        name: "VW GOLF VII",
        avatar: "car-1.jpg",
        info: {
          model: "Limousine",
          door: "5",
          seats: "15",
          tranmission: "Automatic",
          airconditioning: "Yes",
        },
      },
      {
        id: 2,
        name: "VW GOLF VII",
        avatar: "car-2.jpg",
        info: {
          model: "Limousine",
          door: "5",
          seats: "15",
          tranmission: "Automatic",
          airconditioning: "Yes",
        },
      },
      {
        id: 3,
        name: "VW GOLF VII",
        avatar: "car-3.jpg",
        info: {
          model: "Limousine",
          door: "5",
          seats: "15",
          tranmission: "Automatic",
          airconditioning: "Yes",
        },
      },
      {
        id: 4,
        name: "AUDI A1 S-LINE",
        avatar: "car-4.jpg",
        info: {
          model: "Limousine",
          door: "5",
          seats: "15",
          tranmission: "Automatic",
          airconditioning: "Yes",
        },
      },
      {
        id: 5,
        name: "VW GOLF VII",
        avatar: "car-5.jpg",
        info: {
          model: "Limousine",
          door: "5",
          seats: "15",
          tranmission: "Automatic",
          airconditioning: "Yes",
        },
      },
    ];

    return {
      mode,
      callback,
      activeKey,
      listCar,
    };
  },
});
</script>
