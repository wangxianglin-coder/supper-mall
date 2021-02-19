<template>
  <div class="recommend_list" >
    <div v-for="item in recommends" :key="item.acm">
      <a :href="item.link"><img :src="item.image" alt=""></a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      default(){
        return []
      }
    }
  }
}
</script>

<style>
.recommend_list{
  display: flex;
  justify-content: space-between;
  padding: 5px 8px 5px;
  font-size: 13px;
  text-align: center;
  border-bottom: 10px solid #ccc;
}
.recommend_list img{
  width: 75px;
  height: 75px;

}
</style>
