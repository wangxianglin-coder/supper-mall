<template>
  <div id="home">
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
     <nav-list :titles="['推荐','流行','精品']" class="tab_con"
      @tabClick='tabClick'
      ref="navlist1"
      v-show="isNavlistFixed"/>


    <scroll class="content" ref="scroll"
    :probeType='5'
     @scrollHight="backTopShow"
     :pullingUp="true"
     @pullingUp='loadMore'>
      <home-banner :banners="banners"></home-banner>
      <recommend :recommends="recommends"></recommend>
      <center-nav></center-nav>
      <nav-list :titles="['推荐','流行','精品']" class="tab_con"
      @tabClick='tabClick'
      ref="navlist2"/>
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
      isShowBackTop: false,
      navOffsetTop: 0,
      isNavlistFixed: false,
      saveY: 0
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
        this.$refs.navlist1.num = index
        this.$refs.navlist2.num = index
    },
    backClick(){

      this.$refs.scroll.scrollTo(0,0)
    },

      backTopShow(position){
      // 监听backTop的显示
      this.isShowBackTop = (-position.y) > 1000
      // 监听navlist吸顶
      this.isNavlistFixed = (-position.y) > this.$refs.navlist2.$el.offsetTop

      // this.saveY = position.y
      // console.log(this.saveY)
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
      // 完成上拉加载更多
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
color: #fff;
}
.tab_con{
  background-color: #fff;
  position: relative;
  z-index: 8;
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
