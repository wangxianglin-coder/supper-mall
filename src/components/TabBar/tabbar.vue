<template>
  <div id="tab_bar">
    <slot></slot>
  </div>
</template>

<script>

import TabBarItem from './tabbarItem'
export default {
  components: {
    TabBarItem
  }
}
</script>

<style>
#tab_bar{
 display: flex;
 position: fixed;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: #f6f6f6;
 box-shadow: 0 -1px 1px rgba(0, 0, 0, .2);
 z-index: 8;

}
</style>
