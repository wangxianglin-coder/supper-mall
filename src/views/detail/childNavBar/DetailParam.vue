<template>
  <div>
    <div class="sizes_list">
      <h2>尺码说明</h2>
      <table>
        <tr v-for="(item,index) in goodsParam.sizes" :key="index" class="sizes">
          <td v-for="(item,index) in item" :key="index">{{item}}</td>
        </tr>
      </table>
    </div>
    <div class="product">
       <h2>产品参数</h2>
      <div v-for="(item,index) in goodsParam.infos" :key="index" class="goods_info">
        <div class="left">{{item.key}}</div>
       <div class="right">{{item.value}}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
props: {
  goodsParam: {
    type: Object,
    default(){
      return {}
    }
  }
}
}
</script>

<style scoped>
.sizes{
  width: 100%;
}
.sizes td{
  padding-right: 10px;
  line-height: 1.5em;
}
.sizes_list{
  padding: 10px 5px 10px;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.goods_info{
  border-bottom: 1px solid #ccc;
  padding: 5px 5px;
  display: flex;
}
.left{
  flex: 1;
  /* background-color: red; */
  border-right: 1px solid #ccc;
}
.right{
  flex: 3;
  padding-left: 10px;
  /* background-color: blue; */
}
.product{
  padding-bottom: 20px;
  border-bottom: 8px solid rgb(240, 238, 238);
}
</style>
