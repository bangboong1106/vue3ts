<template>
  <div class="service-area">
    <div class="container">
      <a-row class="service-title">
        <a-col :span="24"
          ><h3 class="service-sub-title">Dịch vụ của chúng tôi</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            esse non ex quia at laudantium iusto odio,
          </p>
        </a-col>
      </a-row>
      <a-row>
        <a-col :lg="{ span: 8 }"
          ><div class="service-item">
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
                praesentium perferendis sit voluptatibus consequuntur dolore
                dicta laboriosam accusantium iusto velit, dolorum nemo nostrum!
                Cupiditate similique, quis excepturi blanditiis mollitia
                ducimus?
              </p>
            </div>
          </div>
        </a-col>
        <a-col :lg="{ span: 8 }">
          <div class="service-item">
            <div class="item-logo">
              <img
                :src="require('./../../assets/img/service/vanchuyendong.jpg')"
                alt=""
                class="item-logo-img"
              />
            </div>
            <div class="item-content">
              <h3 class="item-content-title">
                Dịch vụ vận chuyển khép kín
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                praesentium perferendis sit voluptatibus consequuntur dolore
                dicta laboriosam accusantium iusto velit, dolorum nemo nostrum!
                Cupiditate similique, quis excepturi blanditiis mollitia
                ducimus?
              </p>
            </div>
          </div>
        </a-col>
        <a-col :lg="{ span: 8 }"
          ><div class="service-item">
            <div class="item-logo">
              <img
                :src="require('./../../assets/img/service/vanchuyenmo.jpg')"
                alt=""
                class="item-logo-img"
              />
            </div>
            <div class="item-content">
              <h3 class="item-content-title">
                Dịch vụ vận chuyển hải vận
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                praesentium perferendis sit voluptatibus consequuntur dolore
                dicta laboriosam accusantium iusto velit, dolorum nemo nostrum!
                Cupiditate similique, quis excepturi blanditiis mollitia
                ducimus?
              </p>
            </div>
          </div></a-col
        >
      </a-row>
    </div>
  </div>
 
</template>

<style scoped>
.service-area {
  padding: 20px 0;
  margin: 30px 0;
}
.container {
  max-width: 1200px;
  margin: auto;
}
.ant-row.service-title {
  margin: 20px auto;
  text-align: center;
}

h3.service-sub-title {
  font-size: 32px;
  font-weight: 700;
}

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
