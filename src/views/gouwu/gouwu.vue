<template>
  <div>
    <nav-bar class="nav_bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-buttom-bar></cart-buttom-bar>
  </div>
</template>

<script>
import{mapGetters} from 'vuex'
import NavBar from '../../components/navbar/NavBar'
import CartButtomBar from './childComps/CartButtomBar.vue'
import CartList from './childComps/CartList.vue'

export default {
  components: {
    NavBar,
    CartList,
    CartButtomBar
  },
  compute:{
    ...mapGetters(["cartLength"])
  }
}
</script>

<style scoped>
.nav_bar{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
