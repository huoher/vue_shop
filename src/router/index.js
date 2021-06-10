import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
    meta:{
      title: "首页"
    }
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/views/pages/Home.vue"),
    meta:{
      title: "首页"
    }
  },
  {
    path: "/Shopcart",
    name: "shopcart",
    component: () => import("@/views/pages/Shopcart.vue"),
    meta: {
      title: "购物车",
    },
  },
  {
    path: "/Category",
    name: "category",
    component: () => import("@/views/pages/Category.vue"),
    meta: {
      title: "分类",
    },
  },
  {
    path: "/User",
    name: "user",
    component: () => import("@/views/pages/User.vue"),
    meta: {
      title: "用户",
    },
  }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
export default router;
