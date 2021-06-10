<template>
  <div id="User">
    <router-link :to="{ name: 'login' }" class="head-con">
      <div class="avatar">
        <img :src="avatar" />
      </div>
      <div class="name">登录/注册</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "User",
  data() {
    return {
      avatar: require("@/assets/avatar.png"),
    };
  },
};
</script>
<style lang="scss" scoped>
.head-con {
  display: flex;
  background-size: auto 100%;
  height: 70px;
  background-color: #f3700f;
  align-items: center;
  .avatar {
    margin: 0 0.16rem 0 0.52rem;
    width: 3rem;
    height: 3rem;
    overflow: hidden;
    box-sizing: border-box;
    border-radius: 100%;
    border: 3px solid hsla(0, 0%, 100%, 4);
    text-align: center;
    img {
      width: auto;
      height: 100%;
      margin: 0 auto;
    }
  }
  .name {
    color: aliceblue;
  }
}
</style>
