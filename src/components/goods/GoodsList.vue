<template>
  <div class="goods_list">
    <goods-list-item v-for="item in goods" :key="item.acm" :goodsItem="item" />
  </div>
</template>

<script>

import GoodsListItem from './GoodeListItem'
export default {
  props: {
    goods: {
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    GoodsListItem

  }
}
</script>

<style>
.goods_list{
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

}
</style>
