<template>
  <div class="bottom_bar">
    <div class="left">
      <div>
       <i class="logo"></i>
       <span>客服</span>
      </div>
      <div>
        <i class="logo_t"></i>
        <span>店铺</span>
      </div>
      <div @click="collectClick">
        <i :class="{logo_th: isActive1 , logo_th2: isActive2}"></i>
        <span>收藏</span>
      </div>
    </div>

    <div class="right">
      <div class="four" @click="addCart">
        <i class="logo_f"></i>
        <span>加入购物车</span>
      </div>
      <div class="five">
        <i class="logo_fv"></i>
        <span>购买</span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive1: true,
      isActive2: false
    }
  },
  methods: {
    collectClick(){
    this.isActive1 = !this.isActive1
    this.isActive2 = !this.isActive2
    },
    addCart(){
      this.$emit("toAddCart")
    }
  },
}
</script>
<style scoped>
.bottom_bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  text-align: center;
  height: 49px;
  /* line-height: 100px; */
  background-color: #fff;
  box-shadow: 0 -2px 2px rgb(226, 226, 226);
}
.left{
  flex: 1;
  display: flex;
  /* align-items: center; */
  font-size: 13px;
}
.left div{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-between; */
  align-items: center;
  /* border: 1px solid #000; */

}
.left div i{
  width: 22px;
  height: 22px;
  background-size: 22px;
}
.left div span{
  margin-top: 2px;
}
.right{
  flex: 1;
  display: flex;
}
.right div{
line-height: 49px;
}
/* .one{
  background-color: red;
  flex: 1;
  align-items: center;
  width: 20px;
}

.two{
  background-color: rgb(35, 67, 156);
  flex: 1;

}
.three{

  background-color: rgb(39, 167, 77);
  flex: 1;
} */
.four{

  background-color: rgb(43, 226, 196);
  flex: 1;
}
.five{
  background-color: rgb(211, 139, 139);
  flex: 1;
}
.five span{
  color: #fff;
}
.logo{
  background: url(../../../assets/img/detail/detail_bottom.png) no-repeat 0 -52px;
}
.logo_t{
  background: url(../../../assets/img/detail/detail_bottom.png) no-repeat 0 -100px;
}
.logo_th{
  background: url(../../../assets/img/detail/detail_bottom.png) no-repeat 0 0;
}
.logo_th2{
  background: url(../../../assets/img/detail/detail_bottom.png) no-repeat 0 -26px;
}
</style>
