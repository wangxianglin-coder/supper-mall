<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item></tab-bar-item>
      <tab-bar-item></tab-bar-item>
      <tab-bar-item></tab-bar-item>
      <tab-bar-item></tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>

import TabBar from './components/TabBar/tabbar'
import TabBarItem from './components/TabBar/tabbarItem'
export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style>
@import './assets/css/base.css';
</style>
