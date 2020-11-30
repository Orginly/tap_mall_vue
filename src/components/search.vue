<!--
 * @Author: Orginly
 * @Date: 2020-11-25 13:59:01
 * @LastEditors: Orginly
 * @LastEditTime: 2020-11-29 20:46:04
-->
<template>
  <div class="top-search">
    <div class="inner">
      <router-link class="logo" to="/">
        <img src="@/assets/images/icons/logo.jpg" alt="TP6" class="cover" />
      </router-link>
      <div class="search-box">
        <form class="input-group">
          <input placeholder="Ta们都在搜Mo商城" type="text" />
          <span class="input-group-btn">
            <button type="button">
              <span
                class="glyphicon glyphicon-search"
                aria-hidden="true"
              ></span>
            </button>
          </span>
        </form>
        <p class="help-block text-nowrap">
          <a href="">连衣裙</a>
          <a href="" style="margin-left: 5px">裤</a>
          <a href="" style="margin-left: 5px">衬衫</a>
          <a href="" style="margin-left: 5px">T恤</a>
          <a href="" style="margin-left: 5px">女包</a>
          <a href="" style="margin-left: 5px">家居服</a>
          <a href="" style="margin-left: 5px">2017新款</a>
        </p>
      </div>
      <div class="cart-box">
        <router-link to="/cart" class="cart-but"
          ><i class="iconfont icon-shopcart cr fz16"></i> 购物车
          {{ cartNum }} 件
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { cartCount } from "../lib/interface";
export default {
  name: "search",
  data() {
    return {
      cartNum: 0,
    };
  },
  mounted() {
    this.getCartCount();
  },
  methods: {
    async getCartCount() {
      let result = await cartCount();
      if (result.status == 200) {
        this.cartNum = result.data;
      }
    },
  },
};
</script>
<style scoped>
</style>
