<template>
  <div id="ShippingAddress">
    <div v-for="(item, index) in addressList" :key="index" class="address-item">
      <div class="consignee">
        <p class="name">{{ item.name }}</p>
        <p class="phone">{{ item.phone }}</p>
      </div>
      <div class="content">
        {{ item.address }}
      </div>
    </div>
    <div class="footer-btn">新建地址</div>
  </div>
</template>

<script>
export default {
  name: "ShippingAddress",
  data() {
    return {
      addressList: [
        {
          name: "周杰伦",
          phone: "188****1234",
          address: "北京市海淀区西二旗中路33号院6号楼6层006号",
        },
        {
          name: "刘亦菲",
          phone: "138****7878",
          address: "深圳市南山区粤海街道麻岭社区科技中一路",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
#ShippingAddress {
  display: flex;
  flex-direction: column;

  .address-item {
    background-color: #ffffff;
    margin: 5px 0;
    border-bottom: 1px solid #f6f6f6;

    .consignee {
      display: flex;
      justify-content: space-around;

      .name {
        color: #f60;
      }

      .phone {
        color: #3c3c3c;
      }
    }

    .content {
      line-height: 1.5;
    }
  }

  .footer-btn {
    position: fixed;
    bottom: 48px;
    width: 100%;
    background-color: #ff6700;
    color: #ffffff;
    line-height: 2.6;
  }
}
</style>
