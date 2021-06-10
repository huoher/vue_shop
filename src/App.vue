<template>
  <div id="app">
    <mt-header :title="$route.meta.title" fixed>
      <span slot="left" @click="goBack" v-show="showBack">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <div>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from "@/views/components/Tabbar";

export default {
  name: "App",
  components: {
    Tabbar
  },
  data() {
    return {
      showBack: false
    };
  },
  created() {
    this.showBack = this.$route.path !== "/home";
  },
  watch: {
    "$route.path"(newVal) {
      this.showBack = newVal !== '/home'
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.fade-enter {
  opacity: 0;
  transform: translateX(100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}
</style>
