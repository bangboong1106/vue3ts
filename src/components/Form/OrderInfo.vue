<template>
  <div class="order-info">
    <a-form>
      <a-form-item label="Điểm nhận xe">
        <a-select placeholder="Chọn điểm nhận xe">
          <a-select-option value="shanghai">Địa điểm 1</a-select-option>
          <a-select-option value="beijing">Địa điểm 2</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Điểm trả xe">
        <a-select placeholder="Chọn điểm trả xe">
          <a-select-option value="shanghai">Địa điểm 1</a-select-option>
          <a-select-option value="beijing">Địa điểm 2</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Ngày nhận">
        <a-date-picker
          show-time
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

interface FormState {
  layout: "horizontal" | "vertical" | "inline";
  fieldA: string;
  fieldB: string;
}
export default defineComponent({
  setup() {},
});
</script>
<style scoped>
.order-info {
  padding: 30px 15px;
  box-shadow: 0 1px 5px rgb(0 0 0 / 30%);
  margin-bottom: 30px;
}
</style>
