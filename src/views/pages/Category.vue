<template>
  <div id="Category">
    <div class="menu">
      <div class="menu-left">
        <ul>
          <li class="menu-item"
              @click="clickList(index)"
              v-for="(menu,index) in menus"
              :key="index"
              :class="{current: index === currentIndex}">
            <p class="text">{{ menu.name }}</p>
          </li>
        </ul>
      </div>
      <div class="menu-right" ref="itemList">
        <h4 class="cate-title">{{ menus[currentIndex].name }}</h4>
        <div style="display: flex;flex-wrap: wrap">
          <div class="cate" v-for="(menu, index1) in menus[currentIndex].children" :key="index1" >
            <div class="cate-item">
              <div>
                <a href="#" class="cate-item-wrapper">
                  <div class="cate-item-img">
                    <img :src="menu.image" alt="">
                  </div>
                </a>
                <p>{{ menu.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Category",
  data() {
    return {
      menus: [
        {
          name: "男装",
          children: [
            {
              name: "夹克",
              image: require("@/assets/menu/5ac4780cN6087feb5.jpg")
            },
            {
              name: "T恤",
              image: require("@/assets/menu/5ac47812N52823c3e.jpg")
            },
            {
              name: "衬衫",
              image: require("@/assets/menu/5ac47821N48c68336.jpg")
            },
            {
              name: "卫衣",
              image: require("@/assets/menu/5ac4782aN695a7262.jpg")
            }
          ]
        },
        {
          name: "女装",
          children: [
            {
              name: "连衣裙",
              image: require("@/assets/menu/5a128473N0e516a0c.jpg")
            },
            {
              name: "半身裙",
              image: require("@/assets/menu/5a12846cNf3df9f87.jpg")
            }
          ]
        },
        {
          name: "运功户外"
        },
        {
          name: "酒水饮料"
        },
        {
          name: "家具家装"
        },
        {
          name: "宠物生活"
        },
        {
          name: "玩具乐器"
        },
        {
          name: "医药保健"
        }
      ],
      currentIndex: 0
    };
  },
  methods: {
    clickList(index) {
      this.currentIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.menu {
  display: flex;
  position: absolute;
  text-align: center;
  top: 40px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;

  .menu-left {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;

    .menu-item {
      height: 54px;
      width: 100%;

      .text {
        width: 100%;
        line-height: 54px;
        margin-bottom: 0;
      }
    }

    .current {
      width: 100%;
      background: #fff;

      .text {
        color: red;
      }
    }
  }

  .menu-right {
    flex: 1;
    background: #fff;

    .cate {
      height: 100%;

      .cate-title {
        margin: 0;
        text-align: left;
        font-size: 14px;
        color: #333;
        font-weight: bold;
        padding: 10px;
      }

      .cate-item {
        padding: 7px 10px 10px;
        display: flex;
        flex-wrap: wrap;
        overflow: hidden;
        flex-flow: row wrap;

        div {

          .cate-item-wrapper {
            .cate-item-img {
              width: 100%;

              img {
                width: 70px;
                height: 70px;
              }
            }

            span {
              display: inline-block;
              font-size: 14px;
              color: #333;
            }
          }
        }
      }
    }
  }
}

</style>
