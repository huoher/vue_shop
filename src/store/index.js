import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasLogin: false,
    userInfo: JSON.parse(localStorage.getItem("userInfo")) || {}
  },
  mutations: {
    setUserInfo(state, userInfo) {
      Object.assign(state.userInfo, userInfo);
      state.hasLogin = true;
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    loginOut(state) {
      state.userInfo = {};
      localStorage.removeItem("userInfo");
      state.hasLogin = false;
    }
  },
  actions: {},
  modules: {}
});
