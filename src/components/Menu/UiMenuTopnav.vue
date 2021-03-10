<template>
   <div class="menu-topbav">
      <a-menu
        theme="dark"
        mode="horizontal"
        v-model:selectedKeys="selectedKeys1"
        :style="{ lineHeight: '64px', backgroundColor: 'transparent' }"
      >
        <a-menu-item :style="{ backgroundColor: 'transparent' }" key="1"
          ><router-link class="btn btn-primary" :to="'home'"
            >HOME</router-link
          ></a-menu-item
        >
        <a-menu-item :style="{ backgroundColor: 'transparent' }" key="3"
          ><router-link class="btn btn-primary" :to="'about'"
            >ABOUT</router-link
          >
        </a-menu-item>
        <a-menu-item :style="{ backgroundColor: 'transparent' }" key="5"
          >SERVICES</a-menu-item
        >
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <MailOutlined />
              <span>CARS</span>
            </span>
          </template>
          <a-menu-item key="6">CAR LEFT SIDEBAR</a-menu-item>
          <a-menu-item key="7">CAR RIGHT SIDEBAR</a-menu-item>
          <a-menu-item key="8">CAR WITHOUT SIDEBAR</a-menu-item>
          <a-menu-item key="9">CAR DETAILS</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <template #title>
            <span>
              <MailOutlined />
              <span>PAGES</span>
            </span>
          </template>
          <a-menu-item key="10">PRICING</a-menu-item>
          <a-menu-item key="11">DRIVE</a-menu-item>
          <a-menu-item key="12">FAQ</a-menu-item>
          <a-menu-item key="13">HELP DESK</a-menu-item>
          <a-menu-item key="14">GALLERY</a-menu-item>
          <a-menu-item key="15">LOGIN</a-menu-item>
          <a-menu-item key="16">REGISTER</a-menu-item>
          <a-menu-item key="17">404</a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub4">
          <template #title>
            <span>
              <MailOutlined />
              <span>BLOG</span>
            </span>
          </template>
          <a-menu-item key="18">BLOG PAGES</a-menu-item>
          <a-menu-item key="19">BLOG DETAILS</a-menu-item>
        </a-sub-menu>

        <a-menu-item :style="{ backgroundColor: 'transparent' }" key="7"
          >CONTACT</a-menu-item
        >
      </a-menu>
   </div>
</template>
<style scoped>
  
</style>