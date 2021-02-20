<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll"
    :probeType='3'
     @scrollHight="backTopShow"
     :pullingUp="true"
     @pullingUp='loadMore'>
      <home-banner :banners="banners"></home-banner>
      <recommend :recommends="recommends"></recommend>
      <center-nav></center-nav>
      <nav-list :titles="['推荐','流行','精品']" class="tab_con"
      @tabClick='tabClick' />
      <goods-list :goods="goods[currentType].list" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>

import NavBar from '../../components/navbar/NavBar'
import NavList from '../../components/nav-list'
import GoodsList from '../../components/goods/GoodsList'
import Scroll from '../../components/scroll/Scroll'
import BackTop from '../../components/backtop'

import HomeBanner from './childComps/homebanner'
import Recommend from './childComps/recommend.vue'
import CenterNav from './childComps/centerNav'

import {homeRequest,getHomeGoods} from '../../network/home'





export default {
  components: {
    NavBar,
    HomeBanner,
    Recommend,
    CenterNav,
    NavList,
    GoodsList,
    Scroll,
    BackTop,

  },
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        pop:{page: 0, list: []},
        new:{page: 0, list: []},
        sell:{page: 0, list: []},
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  created() {
    // 请求多个数据
    this.homeRequest()
    // 请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  methods: {
    // 事件监听
    tabClick(index){
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    backClick(){

      this.$refs.scroll.scrollTo(0,0)
    },
    backTopShow(position){
      this.isShowBackTop = (-position.y) > 1000
     },
    //  上拉加载
    loadMore(){
      this.getHomeGoods(this.currentType)
    },

    //网络请求
    homeRequest(){
     return  homeRequest().then(res => {
      //  console.log(res)
       this.banners = res.data.banner.list
       this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
      return  getHomeGoods(type,page).then(res => {
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page = page
      this.$refs.scroll.finishPullUp()
    })
    },


  },
}
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
}
.home_nav{
background-color: var(--color-tint);
}
.tab_con{
  position: sticky;
  top: 44px;
  background-color: #fff;
}
/* .content{
  height: calc(100% - 93px);
  margin-top: 44px;
  overflow: hidden;
} */
.content{
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}

</style>
