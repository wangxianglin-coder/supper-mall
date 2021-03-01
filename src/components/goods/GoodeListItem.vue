<template>
  <div class="goods_item" @click="toDetail">
    <img v-lazy="goodsItem.show.img" alt="">
    <div class="item_text">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    toDetail(){
      this.$router.push("/detail/" + this.goodsItem.iid)
    }
  },
}
</script>

<style scoped>
.goods_item{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods_item img{
  width: 100%;
  border-radius: 5px;
}
.item_text{
  overflow: hidden;
  position: absolute;
  font-size: 13px;
  left: 0;
  right: 0;
  bottom: 5px;
  text-align: center;
  line-height: 15px;
}
.item_text p{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.price{
  margin-right: 20px;
  color: var(--color-high-text);
}
.cfav{
  position: relative;
}
.cfav::before{
 content: "";
 position: absolute;
 left: -15px;
 top: 0;
 width: 14px;
 height: 14px;
 background: url('../../assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>
