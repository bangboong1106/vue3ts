<template>
  <a-card hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        :src="require('../../../public/images/card2.png')"
      />
    </template>
    <template class="ant-card-actions" #actions>
      
      <a-button>Đọc thêm</a-button>
    </template>
    <a-card-meta title="Card title" description="This is the description">
      
    </a-card-meta>
  </a-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
   
  },
});
</script>

