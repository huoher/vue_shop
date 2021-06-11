<template>
  <div id="User">
    <router-link :to="{ name: 'login' }" class="head-con" v-if="!$store.state.hasLogin">
      <div class="avatar">
        <img :src="avatar" />
      </div>
      <div class="name">登录/注册</div>
    </router-link>
    <div class="head-con" v-else>
      <div class="avatar">
        <img :src="avatar" />
      </div>
      <p>{{ $store.state.userInfo.username }}</p>
    </div>
    <mt-button type="danger" @click="loginOut" v-if="$store.state.hasLogin">退出登录</mt-button>
  </div>
</template>
<script>
export default {
  name: "User",
  inject: ['reload'],
  data() {
    return {
      avatar: require("@/assets/avatar.png")
    };
  },
  methods: {
    loginOut() {
      this.$store.commit("loginOut", {});
    },
  }
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

  p {
    color: #ffffff;
    font-size: 24px;
  }

}

.mint-button {
  width: 100%;
  margin: 5px 0;
}
</style>
