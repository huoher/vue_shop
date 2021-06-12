<template>
  <div class="home">
    <swiper :imgList="imageList"></swiper>
    <div class="floor-menu">
      <div v-for="(item, index) in menus" :key="index" class="floor-menu-item">
        <img :src="item.image" alt="">
        <p>{{ item.name }}</p>
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
          src: require("@/assets/swipeImg1.jpg")
        },
        {
          id: 2,
          src: require("@/assets/swipeImg2.jpg")
        },
        {
          id: 3,
          src: require("@/assets/swipeImg3.png")
        }
      ],
      menus: [
        {
          name: "超市",
          image: require("@/assets/home/e2bcc411170524f0.png.webp")
        },
        {
          name: "数码电器",
          image: require("@/assets/home/e2bcc411170524f0.png.webp")
        },
        {
          name: "充值缴费",
          image: require("@/assets/home/e2bcc411170524f0.png.webp")
        },
        {
          name: "京东商城",
          image: require("@/assets/home/e2bcc411170524f0.png.webp")
        },
        {
          name: "领券",
          image: require("@/assets/home/e2bcc411170524f0.png.webp")
        },
        {
          name: "会员中心",
          image: require("@/assets/home/e2bcc411170524f0.png.webp")
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.home {
  background-color: aquamarine;

  .floor-menu {
    display: flex;
    flex-wrap: wrap;

    .floor-menu-item {
      margin: 2px;
      display: block;
      width: 75px;
      height: 75px;
      text-align: center;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
