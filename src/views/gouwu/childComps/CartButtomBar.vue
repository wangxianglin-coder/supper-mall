<template>
  <div class="buttom-bar">
    <div>
     <span class="check" @click="allCheckClick">
       <img src="../../../assets/img/cart/tick.svg" alt="">
     </span>
     <span>2</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.buttom-bar{
  width: 100%;
  height: 30px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 50px;
  z-index: 9px;
}
.check{
  background-color: red;
  display: inline-block;
  border: 1px solid #000;
  width: 20px;
  height: 20px;
}
</style>
