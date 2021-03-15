<template>
  <a-list
    item-layout="vertical"
    size="large"
    :pagination="pagination"
    :data-source="listData"
  >
    <template #header>
      <div class="menu">
       <div class="menu-item" v-for="(i,index) in listBrand" :key="index">
         <a href="">
           <img :src="require(`../../assets/img/list-brands/${i.avatar}`)" alt="" :width="48">
           <p class="item-label">
             {{i.title}}
           </p>
         </a>
       </div>
        
      </div> 
    </template>
    <template #renderItem="{ item }">
      <a-list-item key="item.title">
        <template #extra >
          <img
            style="margin-left:-40px;margin-right : 40px"
            width="272"
            
            alt="logo"
            :src="require('../../assets/img/ListCar/car-1.jpg')"
          />
        </template>
        <a-list-item-meta>
          <template #title>
            <a :href="item.href">{{ item.title }}</a>
          </template>
        </a-list-item-meta>
        <div class="choose-info">
          <a-form >
            <a-form-item label="Tình trạng xe">
              <a-button>Xe mới</a-button>
              <a-button style="margin-left: 10px">Xe cũ</a-button>
            </a-form-item>
            <a-form-item label="Số lượng">
              <a-input-number></a-input-number>
            </a-form-item>
            <a-form-item :wrapper-col="{ span: 24 }">
              <a-button type="primary">Thêm vào giỏ</a-button>
              <a-button style="margin-left: 10px">Đặt ngay</a-button>
            </a-form-item>
          </a-form>
        </div>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent } from "vue";

const listData: Record<string, string>[] = [];
const listBrand: Record<string,string>[] = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    title: `Tên xe ô tô thứ  ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    
  });
}
for (let i = 0; i < 12; i++) {
  listBrand.push({
    title: `Hãng thứ  ${i}`,
    avatar: `hang${i}.jpg`,
    
  });
}

export default defineComponent({
  components: {},
  setup() {
    const pagination = {
      onChange: (page: number) => {
        console.log(page);
      },
      pageSize: 3,
    };

    return {
      listData,
      listBrand,
      pagination,
      labelCol: { span: 8 },
      wrapperCol: { span: 14 },
    };
  },
});
</script>
<style scoped>
.menu{
    overflow-x: auto;
    background-color: #fff;
    display: grid;
    grid-template-columns: repeat(100,16.66%);
    list-style: none;

    display: flex;
}
.menu-item{
  text-align:center;
  padding : 0 23px;
}
.menu-item a{
  display: block;
  width: 100px;
}
.item-label{
  margin-top:5px;
  color:black;
}
.ant-list-item{
  display: flex;
  flex-direction: row-reverse;
}
.ant-list-item-extra{
  margin-left: 0!important;
}
.ant-form-item{
  margin-bottom : 8px!important;
}
</style>