<template>
  <div id="app">
    <mt-header :title="$route.meta.title" style="position: sticky; top: 0">
      <span slot="left" @click="goBack" v-show="showBack">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <div>
      <transition name="fade">
        <router-view v-if="isReloadAlive"></router-view>
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
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      showBack: false,
      isReloadAlive: true
    };
  },
  created() {
    this.showBack = this.$route.path !== "/home";
  },
  mounted() {
  },
  watch: {
    "$route.path"(newVal) {
      this.showBack = newVal !== "/home";
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    reload() {
      this.isReloadAlive = false;
      this.$nextTick(() => {
        this.isReloadAlive = true;
      });
    },
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
