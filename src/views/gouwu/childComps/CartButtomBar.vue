<template>
  <div class="buttom-bar">
    <div class="left">
      <span class="check" @click="allCheckClick" :class="{active: allCheck}">
       <img src="../../../assets/img/cart/tick.svg" alt="">
      </span>
      <span class="all-check" >全选</span>
      <span class="sum">合计:</span>
      <span class="price">￥{{sumPrice}}</span>
    </div>
     <div class="right">
       <span>去结算</span>
     </div>

  </div>
</template>

<script>
export default {
  props: {

  },
  computed: {
    sumPrice(){
      const cartList = this.$store.getters.getCartList
      let sum = 0
      // 遍历数组
      for(let v of cartList){
        if(v.ischeck){
          // 计算选中的商品价格
          sum += v.realPrice * v.count
        }
      }
      // 把数据返回并且保留小数点后两位
      return sum.toFixed(2)
    },
    allCheck(){
    //   // 创建一个新的数据保存数据
    //   const arr = []
    //   // 遍历购物车里面商品的数据
    //  for(let v of this.$store.getters.getCartList){
    //   //  有为false的就添加到数组里面
    //    if(!v.ischeck){
    //      arr.push(v.ischeck)
    //    }
    //  }
    // //  console.log(arr)
    // // 判断数组里面是否有数据
    //  if(arr.length > 0){
    //    return false
    //  }else{
    //    return true
    //  }


    // find()为真就返回
    if(this.$store.getters.getCartList.length === 0) return false
    return !this.$store.getters.getCartList.find(item => !item.ischeck)

    }
  },
  methods: {
    allCheckClick(){
      if(this.allCheck){
        this.$store.commit("allCalCheck")
      }else{
        this.$store.commit("allCheck")
      }
    }
  },
}
</script>

<style scoped>
.buttom-bar{
  width: 100%;
  height: 35px;
  background-color: rgb(226, 224, 224);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  z-index: 9px;
  display: flex;
  line-height: 35px;
  box-shadow: 0 -2px 2px rgb(223, 221, 221);
}
.check{
  border-radius: 50%;
  border: 1px solid rgb(175, 173, 173);
  margin-right: 5px;
}
.all-check{
  font-size: 14px;
  margin-right: 20px;
}
.sum{
  font-size: 14px;
  margin-right: 6px;
}
.price{
  font-size: 14px;
}
.left{
  padding-left: 5px;
  flex: 4;
  /* border: 1px solid #000; */
}
.right{
  background-color: red;
  /* border: 1px solid #000; */
  color: #fff;
  flex: 1;
  text-align: center;
}
.active{
  background-color: red;
}
</style>
