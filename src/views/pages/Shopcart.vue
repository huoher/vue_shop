<template>
  <div id="Shopcart">
    <div v-for="(item, index) in goodList" :key="index" class="shopcart--item">
      <input type="checkbox" />
      <img :src="item.image" alt="/" />
      <div class="good--info">
        <p class="name">
          {{ item.name }}
        </p>
        <p class="price">售价：{{ item.price }}元</p>
      </div>
    </div>
    <div class="foot-button">
      <div class="price">
        <p class="count">共2件</p>
        <p class="num">2210元</p>
      </div>
      <div class="shopping">继续购物</div>
      <div class="settlement">去结算</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Shopcart",
  data() {
    return {
      goodList: [
        {
          name: "米家微波炉 白色",
          price: 345,
          image: require("@/assets/good/pms_1563787495.68116844.jpg"),
        },
        {
          name: "Redmi 路由器AX 白色",
          price: 219,
          image: require("@/assets/good/pms_1591669005.22126176.jpg"),
        },
        {
          name: "彩虹5号电池（10粒装）标准装",
          price: 9.9,
          image: require("@/assets/good/T1xxVTBghv1RXrhCrK.jpg"),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#Shopcart {
  width: 100%;
  background-color: #ffffff;

  .shopcart--item {
    display: flex;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #f6f6f6;

    .good--info {
      text-align: left;
      display: flex;
      flex-direction: column;

      .name {
        color: #666666;
      }

      .price {
        color: #999999;
        font-size: 12px;
      }
    }

    input {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      margin: 0 5px;
    }

    img {
      width: 6rem;
      height: 6rem;
      border: 1px solid #eee;
      margin: 3px;
    }
  }

  .foot-button {
    width: 100%;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 42px;

    .price {
      flex-grow: 1;
      width: auto;
      .count {
        color: #999999;
        font-size: 0.8rem;
      }
      .num {
        font-size: 1.2rem;
        color: #ff5722;
      }
    }

    .shopping {
      width: 30%;
      font-size: 1.4rem;
      line-height: 3;
      background-color: #333333;
      color: #f4f4f4;
    }

    .settlement {
      width: 30%;
      line-height: 3;
      font-size: 1.4rem;
      background-color: #ff6700;
      color: #ffffff;
    }
  }
}
</style>
