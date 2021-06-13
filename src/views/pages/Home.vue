<template>
  <div class="home">
    <swiper :imgList="imageList"></swiper>
    <div class="floor-menu">
      <div v-for="(item, index) in menus" :key="index" class="floor-menu-item">
        <img :src="item.image" alt="" />
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "../components/Swiper.vue";
// @ is an alias to /src

export default {
  components: { Swiper },
  name: "Home",
  data() {
    return {
      imageList: [
        {
          id: 1,
          src: require("@/assets/swipeImg1.jpg"),
        },
        {
          id: 2,
          src: require("@/assets/swipeImg2.jpg"),
        },
        {
          id: 3,
          src: require("@/assets/swipeImg3.png"),
        },
      ],
      menus: [
        {
          name: "超市",
          image: require("@/assets/home/e2bcc411170524f0.png.webp"),
        },
        {
          name: "数码电器",
          image: require("@/assets/home/3c.png"),
        },
        {
          name: "精美服饰",
          image: require("@/assets/home/0db99d859ab16ce9.png"),
        },
        {
          name: "生鲜",
          image: require("@/assets/home/59712d986b10bb0a.png"),
        },
        {
          name: "手机充值",
          image: require("@/assets/home/300071558a9ab078.png"),
        },
        {
          name: "领券中心",
          image: require("@/assets/home/e5c12d5e943266b9.png"),
        },
        {
          name: "物流中心",
          image: require("@/assets/home/3977b5fe42b136e4.png"),
        },
        {
          name: "大药房",
          image: require("@/assets/home/5acdbbe8Ndb0625c4.png"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  background-color: #ffffff;

  .floor-menu {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    justify-content: flex-start;

    .floor-menu-item {
      width: 20%;
      background-color: #ffffff;
      margin: 2px 6px;
      display: block;
      text-align: center;

      img {
        width: 100%;
      }

      span {
        font-size: 16px;
        line-height: 1.5;
        color: #000000;
      }
    }
  }
}
</style>
