<template>
  <div class="info">
    <div class="info_top">
      <p>{{goods.title}}</p>
    </div>
    <div class="info_center">
      <span class="newPrice">{{goods.newPrice}}</span>
      <span class="oldPrice">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info_other">
       <span v-for="(item,index) in goods.columns" :key="index">{{item}}</span>
    </div>
    <div class="info_footer">
      <span v-for="(item,index) in goods.services" :key="index">
        <img :src="item.icon" alt="">
        <span class="itemName">{{item.name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style scoped>
.info{
  padding: 0 5px;
   border-bottom: 8px solid rgb(243, 241, 241);
   padding-bottom: 10px;
}
.info_top {
  margin-top: 6px;
  font-weight: bold;

}
.info_center{
  height: 35px;
  margin-top: 10px;
}
.newPrice{
  font-size: 20px;
  font-weight: bold;
  color: var(--color-tint);
}
.oldPrice{
  text-decoration: line-through;
  font-size: 13px;
  margin-left: 8px;
  color: #ccc;
  /* margin-top: 10px; */
}
.discount{
  background: var(--color-tint);
  padding: 2px;
  border-radius: 10px;
  font-size: 13px;
  margin-left: 3px;
  color: #fff;
  align-items: -5px;
}
.info_other{
  padding: 0 3px 5px;
  font-size: 13px;
   color: rgb(161, 159, 159);
   display: flex;
   justify-content: space-between;
   border-bottom: 1px solid #ccc;
}
.info_footer{
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  font-size: 12px;
  justify-content: space-between;

}
.info_footer img{
  width: 15px;
  height: 15px;

}
.itemName{
  margin-left: 3px;
}
</style>
