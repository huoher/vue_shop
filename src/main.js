import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "@/lib/mui/css/mui.css";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.axios = axios;

Vue.use(MintUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
