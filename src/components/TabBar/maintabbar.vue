<template>
  <div id="main_tab_bar">
     <tab-bar>
        <tab-bar-item path="/home">
          <img slot="img" src="../../assets/img/tabbar/index.svg">
          <img slot="img-active" src="../../assets/img/tabbar/index-active.svg">
          <p slot="text">首页</p>
        </tab-bar-item>

        <tab-bar-item path="/fenlei">
          <img slot="img" src="../../assets/img/tabbar/fenlei.svg">
          <img slot="img-active" src="../../assets/img/tabbar/fenlei-active.svg">
          <p slot="text">分类</p>
        </tab-bar-item>

        <tab-bar-item path="/gouwu">
          <img slot="img" src="../../assets/img/tabbar/gouwu.svg">
          <img slot="img-active" src="../../assets/img/tabbar/gouwu-active.svg">
          <p slot="text">购物车</p>
        </tab-bar-item>

        <tab-bar-item path="/me">
          <img slot="img" src="../../assets/img/tabbar/me.svg">
          <img slot="img-active" src="../../assets/img/tabbar/me-active.svg">
          <p slot="text">我的</p>
        </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './tabbar'
import TabBarItem from './tabbarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>

</style>
