<template>
  <div>
    <div class="shop_top">
      <div class="shop_logo">
        <div>
          <a href="">
            <img :src="shop.logo" alt="">
          </a>
        </div>
        <div class="shop_name">{{shop.name}}</div>

      </div>
      <div class="shop_center">
        <div class="left">
          <div class="sells">
            <p>{{shop.sells}}</p>
            <p>总销量</p>
          </div>
          <div class="goods">
            <p>{{shop.goodsCount}}</p>
            <p>全部宝贝</p>
          </div>
        </div>
        <div class="right">

          <table>
            <tr v-for="(item,index) in shop.score" :key="index" class="item">
              <td>{{item.name}}</td>
              <td class="" :class="{better: item.isBetter}">{{item.score}}</td>
              <td class="active" :class="{better_more : item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
            </tr>
          </table>


        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.shop_top{
  /* border: 1px solid #000; */
 padding: 5px;
}
.shop_logo{
  padding-top: 20px;
  display: flex;
  align-items: center;
}
.shop_logo img{
width: 45px;
height: 45px;

}
.shop_name {
  margin-left: 10px;
}
.shop_center{
  margin-top: 30px;
  display: flex;
  /* height: 70px; */
  /* border: 1px solid #000; */
  padding-bottom: 15px;
  border-bottom: 8px solid rgb(243, 241, 241);

}
.left{
  display: flex;
  flex: 1;
  text-align: center;
  line-height: 22px;
 align-items: center;
 /* border-right: 1px solid #000; */
  /* background-color: red; */
}
.right{

  flex: 1;
  /* background-color: blue; */
  line-height: 1.5em;
  padding-left: 20px;

}

.sells{

  flex: 1;
}
.goods{
  flex: 1;
  border-right: 1px solid #ccc;
  padding-right: 10PX;
}
.item td{
  padding-right: 10px;
}
.better_more{
  background-color: red  !important;
}
.better{
  color: yellow;
}
.active{
  text-align: center;
  color: #fff;
  background-color: green;
}
</style>
