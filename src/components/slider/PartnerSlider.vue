<template>
  <a-carousel autoplay dots="false" item="2" :centerMode="true" centerPadding="300px" >
    <div class="carousel__item" :style="{'width':'200px!important'}">
      <div class="carousel__imgHolder">
        <img :src="require('./../../assets/img/partner/partner-logo-1.png')" alt="" class="carousel__image">
      </div>
    </div>
    <div class="carousel__item" :style="{'width':'200px!important'}">
      <div class="carousel__imgHolder">
        <img :src="require('./../../assets/img/partner/partner-logo-1.png')" alt="" class="carousel__image">
      </div>
    </div>
    <div class="carousel__item" :style="{'width':'200px!important'}">
      <div class="carousel__imgHolder">
        <img :src="require('./../../assets/img/partner/partner-logo-1.png')" alt="" class="carousel__image">
      </div>
    </div>
    <div class="carousel__item" :style="{'width':'200px!important'}">
      <div class="carousel__imgHolder">
        <img :src="require('./../../assets/img/partner/partner-logo-1.png')" alt="" class="carousel__image">
      </div>
    </div>
   
    
  </a-carousel>
</template>
<script lang="ts">
import {defineComponent} from "vue";
export default defineComponent({
   dots:false,
    
});
</script>
<style scoped>
/* For demo */
.carousel__item{
  padding: 0 10px;
  
}
.carousel__image{
  height: auto;
 
  vertical-align: middle;
  margin-left: 0;
}

</style>