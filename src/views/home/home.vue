<template>
  <div>
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-banner :banners="banners"></home-banner>
  </div>
</template>

<script>

import NavBar from '../../components/navbar/NavBar'
import {homeRequest} from '../../network/home'
import HomeBanner from './childComps/homebanner'
export default {
  components: {
    NavBar,
    HomeBanner
  },
  data() {
    return {
      banners: null,
      recommends: null
    }
  },
  created() {
    homeRequest().then(res => {
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  },
}
</script>

<style>
.home_nav{
background-color: var(--color-tint);
}
</style>
