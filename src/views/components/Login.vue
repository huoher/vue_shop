<template>
  <div id="Login">
    <div class="login-form">
      <mt-field
        label="账号"
        placeholder="请输入账号"
        v-model="loginForm.username"
      ></mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        type="password"
        v-model="loginForm.password"
      ></mt-field>
      <mt-button type="primary" @click="login">登录</mt-button>
      <mt-button type="default">注册</mt-button>
    </div>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { login } from "@/api";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (!this.loginForm.username || !this.loginForm.password) {
        Toast("请输入账号和密码 ");
      }
      login(this.loginForm).then((res) => {
        if (res.search("success") >= 0) {
          this.$store.commit("setUserInfo", this.loginForm);
          this.$router.push("/user");
        } else {
          Toast("用户名或密码错误 ");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 100%;
}

.mint-button {
  width: 100%;
  margin: 2px 0;
}
</style>
