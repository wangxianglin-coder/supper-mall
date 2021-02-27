<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 底部导航栏 -->
    <main-tab-bar></main-tab-bar>

  </div>
</template>
<script>


import MainTabBar from './components/TabBar/maintabbar'
export default {
  components: {
    MainTabBar

  }
}
</script>
<style>
@import './assets/css/base.css';

</style>
