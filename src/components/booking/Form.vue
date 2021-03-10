<template>
  <div class="book-car container">
    <a-row :gutter="[16,16]" style="display:flex;justify-content:space-between">
      <a-col   :lg="{span:4 ,gutter:[16,16]}" :xs="{span:24 ,gutter:[16,16]}" :sm="{span:12 ,gutter:[16,16]}">
        <a-select
          v-model:value="value"
          show-search
          placeholder="Chọn địa điểm"
          option-filter-prop="children"
          style="width: 200px"
          :filter-option="filterOption"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        >
          <a-select-option value="29">Hà Nội</a-select-option>
          <a-select-option value="59">Hồ Chí Minh</a-select-option>
          <a-select-option value="43">Đà Nẵng</a-select-option>
        </a-select>
      </a-col>
      <a-col   :lg="{span:4 ,gutter:[32,32]}" :xs="{span:24 ,gutter:[32,32]}" :sm="{span:12 ,gutter:[32,32]}">
        <a-space direction="vertical">
          <a-date-picker v-model:value="value1" placeholder="Chọn ngày" />
        </a-space>
      </a-col>
      <a-col   :lg="{span:4 ,gutter:[32,32]}" :xs="{span:24 ,gutter:[32,32]}" :sm="{span:12 ,gutter:[32,32]}">
        <a-space direction="vertical">
          <a-date-picker v-model:value="value1" placeholder="Chọn ngày trả" />
        </a-space>
      </a-col>
      <a-col   :lg="{span:4 ,gutter:[32,32]}" :xs="{span:24 ,gutter:[32,32]}" :sm="{span:12 ,gutter:[32,32]}">
        <a-select
          v-model:value="value"
          show-search
          placeholder="Chọn loại xe"
          option-filter-prop="children"
          style="width: 200px"
          :filter-option="filterOption"
        >
          <a-select-option value="bmw">BMW</a-select-option>
          <a-select-option value="audi">Audi</a-select-option>
          <a-select-option value="vinfast">Vinfast</a-select-option>
        </a-select>
      </a-col>
      <a-col   :lg="{span:4 ,gutter:[16,16]}" :xs="{span:24 ,gutter:[16,16]}" :sm="{span:16 ,gutter:[16,16] }">
        <a-button type="primary" block>Đặt xe</a-button>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };
    const handleBlur = () => {
      console.log("blur");
    };
    const handleFocus = () => {
      console.log("focus");
    };
    const filterOption = (input: string, option: any) => {
      return option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    };
    return {
      value: ref<string | undefined>(undefined),
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
    };
  },
});
</script>
<style lang="css" scoped>
.container{
    max-width: 1200px;
}
.book-car{
    background-color: #fff;
    padding: 100px 40px;
    
    margin:auto;
    border-radius:3px;
    box-shadow: 0 0 5px rgb(0 0 0 / 50%);
    position: relative;
    margin-top:-116px;
}
@media (max-width: 576px){
  .book-car{
    padding: 40px;
    margin:auto;
    margin-top:-116px;
}
}
@media (min-width: 577px) and (max-width: 890px){
  .book-car{
    padding: 40px;
    margin:auto;
    margin-top:-120px;
}

  
}
</style>
