<template>
  <div id="Swiper">
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="item in imgList" :key="item.id">
        <img :src="item.src" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    imgList: Array,
  },
};
</script>

<style scoped lang="scss">
.mint-swipe {
  height: 198px;
  color: #fff;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
