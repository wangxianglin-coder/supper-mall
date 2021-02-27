<template>
  <div id="recommend">
    <div v-for="item in recData.list" :key="item.acm" class="item_list">
      <img :src="item.image" alt="">
      <div class="text">
        <p>{{item.title}}</p>
        <span class="price">{{item.price}}</span>
        <span class="cfav">{{item.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
props: {
  recData: {
    type: Object,
    default(){
      return {}
    }
  }
}
}
</script>

<style scoped>
#recommend{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 15px;
  padding-bottom: 20px;
}
.item_list{
  position: relative;
  padding-bottom: 40px;
  width: 48%;

}
.item_list img{
width: 100%;
border-radius: 8px;
}
.text{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* border: 1px solid #000; */
  text-align: center;
}
.text p{
font-size: 15px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
.price{
  color: red;
  margin-right: 20px;
  font-size: 14px;
}
.cfav{
  position: relative;
  font-size: 14px;
}
.cfav::before{
  content: "";
  position: absolute;
  left: -14px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;

}

</style>
