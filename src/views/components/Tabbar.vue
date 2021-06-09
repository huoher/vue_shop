<template>
  <div id="Tabbar">
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-lib" :to="{ name: 'home' }">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item-lib" :to="{ name: 'category' }">
        <span class="mui-icon mui-icon-personadd"></span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-item-lib" :to="{ name: 'shopcart' }">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">2</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item-lib" :to="{ name: 'user' }">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Tabbar",
};
</script>
