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
#tab_bar {
 display: flex
}
</style>
