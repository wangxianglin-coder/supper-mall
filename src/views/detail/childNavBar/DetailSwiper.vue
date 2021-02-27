<template>

    <swiper class="swiper_item">
      <swiper-item v-for="item in topImages " :key="item.iid" >
        <a href="">
          <img :src="item" alt="">
        </a>
      </swiper-item>
    </swiper>

</template>

<script>


import {Swiper, SwiperItem} from '../../../components/swiper/index'
export default {
components: {
  Swiper,
  SwiperItem
},
props: {
  topImages: {
    type: Array,
    default(){
      return []
    }
  }
}
}
</script>

<style scoped>
.swiper_item{
  height: 200px;
}
</style>
