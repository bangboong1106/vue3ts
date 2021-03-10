<template>
  <a-row type="flex" justify="center" align="center">
    <a-col :span="16">
      <div class="section-title text-center">
        <h3 class="section-sub-title">{{title}}</h3>
        <span class="title-line"><CarOutlined /></span>
        <p>{{text}}</p>
      </div>
    </a-col>
  </a-row>

 
</template>
<script>
import { defineComponent } from 'vue'
import { CarOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  props:{
    title : String,
    text : String
  },
  components:{
    CarOutlined
  },
  setup() {
    
  },
})
</script>

<style>

section-title {
	font-size: 15px;
	font-weight: 300;
	margin-bottom: 80px;
}

.section-title h2 {
	margin-bottom: 10px;
	position: relative;
	text-transform: uppercase;
}

.section-title p {
	margin-top: 10px;
}

.section-title .title-line {
	color: #ffd000;
	position: relative;
}

.section-title .title-line::after {
	background-color: #333;
	content: "";
	height: 2px;
	left: -60px;
	position: absolute;
	top: 10px;
	width: 50px;
}

.section-title .title-line::before {
	background-color: #333;
	content: "";
	height: 2px;
	position: absolute;
	right: -60px;
	top: 10px;
	width: 50px;
}

.overlay .section-title h2,
.overlay .section-title p {
	color: #fff;
}

.overlay .section-title .title-line::after,
.overlay .section-title .title-line::before {
	background-color: #fff;
}
</style>