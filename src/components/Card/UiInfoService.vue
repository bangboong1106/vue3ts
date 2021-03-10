<template>
  <div class="service-item">
    <div class="item-logo">
      <img
        :src="require('./../../assets/img/service/vanchuyenmo.jpg')"
        alt=""
        class="item-logo-img"
      />
    </div>
    <div class="item-content">
      <h3 class="item-content-title">
        Dịch vụ vận chuyển mở
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
        praesentium perferendis sit voluptatibus consequuntur dolore dicta
        laboriosam accusantium iusto velit, dolorum nemo nostrum! Cupiditate
        similique, quis excepturi blanditiis mollitia ducimus?
      </p>
    </div>
  </div>
</template>
<style lang="css" scoped>
.service-item {
  display: flex;
  justify-content: space-between;
}
.item-logo-img {
  width: 120px;
  height: auto;
  border-radius: 4px;
  margin: 10px;
}
h3.item-content-title {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}
.item-content {
  text-align: start;
}
</style>
