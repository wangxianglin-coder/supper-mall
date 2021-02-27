<template>
  <div class="item">
    <div @click="checkClick">
      <cart-check class="check" :ischeck="prod.ischeck" ></cart-check>
    </div>


    <div class="item-image">
      <img :src="prod.image" alt="">
    </div>
    <div class="right-item">
      <div class="title">{{prod.title}}</div>
      <div class="desc">{{prod.desc}}</div>
      <div class="footer">
        <span class="left">￥{{prod.realPrice}}</span>
        <span class="count">x {{prod.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CartCheck from './CartCheck.vue'
export default {
  components: { CartCheck },
  props: {
    prod: {
      type: Object,
      default(){
        return {}
      }
    },

  },
  methods: {
    checkClick(){
      this.prod.ischeck = !this.prod.ischeck
      console.log(this.prod.ischeck)
    }
  },
}
</script>

<style scoped>
.item{
  display: flex;
}
.check{

  border: 1px solid #ccc;
margin: 43px 2px;

}
.item-image{
  width: 110px;
  height: 110px;
}
.item-image img{
 width: 110px;
  height: 110px;
}
.right-item{
  flex: 1;
  position: relative;
  border: 1px solid #000;
}
.title{
  position: absolute;
  left: 10px;
  top: 5px;
  right: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.desc{
  position: absolute;
  left: 10px;
  top: 25px;
  right: 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.footer{
  /* border: 1px solid #000; */
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 5px;
}
.left{
  color: var(--color-tint);
}
.count{
  float: right;
}
</style>
