<template>
  <div class="tab_bar_item" @click="isClick">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="img-active"></slot></div>
    <div :class="{active:isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  props: {
      path: String
    },
  methods: {
    isClick(){
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  }
}
</script>

<style>
.tab_bar_item{
  flex: 1;
  text-align: center;
  font-size: 13px;
  height: 49px;
}
.tab_bar_item img {
  margin-top: 5px;
  width: 29px;
  height: 29px;
  vertical-align: middle;
}
.active{
  color: red;
}
</style>
