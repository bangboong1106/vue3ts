<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="vertical"
    @click="handleClick"
  >
    <a-menu-item key="1">
     <CarOutlined />

      VW Golf VII
    </a-menu-item>
    <a-menu-item key="2">
      <CarOutlined />

      Audi A1 S-LINE
    </a-menu-item>
    <a-menu-item key="3">
      <CarOutlined />

      VW Golf VII
    </a-menu-item>
    <a-menu-item key="4">
      <CarOutlined />

      Audi A1 S-LINE
    </a-menu-item>
    <a-menu-item key="5">
      <CarOutlined />

      VW Golf VII
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import {
  CarOutlined,
} from "@ant-design/icons-vue";
interface MenuInfo {
  key: string;
  keyPath: string[];

  domEvent: MouseEvent;
}
export default defineComponent({
  setup() {
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
    });
    const handleClick = (e: MenuInfo) => {
      console.log("click ", e);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
  components: {
    CarOutlined,

  },
});
</script>
