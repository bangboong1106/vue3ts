<template>
  <a-table :pagination="false" :dataSource="dataSource" :columns="columns" />
</template>
<script>
// import ColumnConfig from "../../../resources/assets/common/ColumnConfig.ts";
export default {
  props: {},

  setup() {
    return {
      dataSource: [
        {
          key: "1",
          model: "Limousine",
          door: 5,
          seat: 15,
          tranmission : 'Auto',
          airconditioning : 'Yes'
        },
        {
          key: "2",
          model: "Limousine",
          door: 5,
          seat: 15,
          tranmission : 'Auto',
          airconditioning : 'Yes'
        },{
          key: "3",
          model: "Limousine",
          door: 5,
          seat: 15,
          tranmission : 'Auto',
          airconditioning : 'Yes'
        },{
          key: "4",
          model: "Limousine",
          door: 5,
          seat: 15,
          tranmission : 'Auto',
          airconditioning : 'Yes'
        },{
          key: "5",
          model: "Limousine",
          door: 5,
          seat: 15,
          tranmission : 'Auto',
          airconditioning : 'Yes'
        },
      ],

      columns: [
        {
          title: "Hãng sản xuất",
          dataIndex: "model",
          key: "model",
        },
        {
          title: "Số cửa",
          dataIndex: "door",
          key: "age",
        },
        {
          title: "Số ghế ngồi",
          dataIndex: "seat",
          key: "seat",
        },
        {
          title: "Quá trình vận chuyển",
          dataIndex: "transmission",
          key: "transmission",
        },
        {
          title: "Điều hòa nhiệt độ",
          dataIndex: "airconditioning",
          key: "airconditioning",
        },
      ],
    };
  },
};
</script>
