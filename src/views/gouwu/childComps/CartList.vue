<template>
  <div>
    <cart-list-info v-for="(item,index) in getCartList" :key="index" :prod="item"/>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartListInfo from './CartListInfo'

export default {
  components: {
     CartListInfo
  },
  computed: {
    ...mapGetters(['getCartList'])
  },

}
</script>

<style scoped>

</style>
