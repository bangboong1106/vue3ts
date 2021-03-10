<template>
  <div>
    <a-tabs :tab-position="mode" v-model:activeKey="activeKey">
      <a-tab-pane v-for="(i, index) in listCar" :key="index" :tab="`${i.name}`">
        <a-row>
          <a-col :span="15">
            <img :style="{width : '100%'}" :src="require(`../../assets/img/ListCar/${i.avatar}`)" alt="" />
          </a-col>
          <a-col :span="1"></a-col>
          <a-col :span="8">
            <ui-info-car ></ui-info-car>
          </a-col>
        </a-row>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import UiInfoCar from '../Table/UiInfoCar.vue';
export default defineComponent({
  components:{
    UiInfoCar
  },
  setup() {
    const mode = ref("left");
    const activeKey = ref("1");
    const callback = (val: string) => {
      console.log(val);
    };
    
    const listCar: Array<Object> = [

      {
        id : 1,
        name : 'VW GOLF VII',
        avatar : 'car-1.jpg',
        info : {
          model : 'Limousine',
          door :'5',
          seats : '15',
          tranmission : 'Automatic',
          airconditioning : 'Yes'
        }
      },
      {
        id : 2,
        name : 'VW GOLF VII',
        avatar : 'car-2.jpg',
        info : {
          model : 'Limousine',
          door :'5',
          seats : '15',
          tranmission : 'Automatic',
          airconditioning : 'Yes'
        }
      },
      {
        id : 3,
        name : 'VW GOLF VII',
        avatar : 'car-3.jpg',
        info : {
          model : 'Limousine',
          door :'5',
          seats : '15',
          tranmission : 'Automatic',
          airconditioning : 'Yes'
        }
      },
      {
        id : 4,
        name : 'AUDI A1 S-LINE',
        avatar : 'car-4.jpg',
        info : {
          model : 'Limousine',
          door :'5',
          seats : '15',
          tranmission : 'Automatic',
          airconditioning : 'Yes'
        }
      },
      {
        id :5,
        name : 'VW GOLF VII',
        avatar : 'car-5.jpg',
        info : {
          model : 'Limousine',
          door :'5',
          seats : '15',
          tranmission : 'Automatic',
          airconditioning : 'Yes'
        }
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
