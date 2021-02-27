<template>
  <div>
    <h2>{{goodsInfo.key}}</h2>
  <div v-for="(item,index) in goodsInfo.list" :key="index" class="img_list">
    <img :src="item" alt="">
  </div>

  </div>
</template>

<script>
export default {
props: {
  goodsInfo: {
    type: Object,
    default(){
      return {}
    }
  }
}

}
</script>

<style scoped>
.img_list img{
  width: 100%;
}
</style>
