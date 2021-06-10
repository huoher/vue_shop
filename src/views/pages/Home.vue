<template>
  <div class="home">
    <swiper :imgList="imageList"></swiper>
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
    };
  },
};
</script>
<style lang="scss" scoped>
.home {
  background-color: aquamarine;
}
</style>
