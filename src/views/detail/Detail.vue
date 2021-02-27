<template>
  <div id="Detail">
    <detail-nav-bar :titles="['商品','详情','评论','推荐']" class="topBar"
    @cut="itemCut" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll"
     @scrollHight="topY"
     :probeType='3'
     :pullingUp="false">
       <detail-swiper :topImages="topImages" class="banner"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-list :goods-info="goodsInfo"></detail-list>
      <detail-param :goods-param="GoodsParam" ref="params"></detail-param>
      <detail-commont-info :user-info="uesrInfo" ref="commont"></detail-commont-info>
      <detail-recommend :rec-data="recData" ref="recommend"></detail-recommend>

    </scroll>


    <detail-bottom-bar @toAddCart="addCart"></detail-bottom-bar>
    <!-- <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
  </ul> -->
  </div>

</template>

<script>


import DetailNavBar from './childNavBar/DetailNavBar'
import DetailSwiper from './childNavBar/DetailSwiper'
import DetailBaseInfo from './childNavBar/DetailBaseInfo'
import DetailShop from './childNavBar/DetailShop'
import DetailList from './childNavBar/DetailList'
import DetailParam from './childNavBar/DetailParam'
import DetailCommontInfo from './childNavBar/DetailCommontInfo'
import DetailRecommend from './childNavBar/DetailRecommend'
import DetailBottomBar from './childNavBar/DetailBottomBar'

import {getDetail,Goods,Shop,GoodsParam,getRecommend} from '../../network/datail'

import Scroll from '../../components/scroll/Scroll'




export default {
components: {
  DetailNavBar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShop,
  DetailList,
  DetailParam,
  DetailCommontInfo,
  DetailRecommend,
  Scroll,
  DetailBottomBar


},
data() {
  return {
    iid: null,
    topImages: [],
    goods: {},
    shop: {},
    goodsInfo: {},
    GoodsParam: {},
    uesrInfo: {},
    recData: {},
    itemCutTopY: []
  }
},

activated(){
  this.iid = this.$route.params.iid
  this.getDetail(this.iid)
  getRecommend().then(res => {
    this.recData = res.data
    console.log(this.recData)
  })
},
mounted() {
  // const arr = [0,this.$refs.params.$el.offsetTop,this.$refs.commont.$el.offsetTop,this.$refs.recommend.$el.offsetTop]
  // this.itemCutTopY.push(this.$refs.params.$el.offsetTop)
  // console.log(this.$refs.params.$el.offsetTop)


},
methods: {
  getDetail(iid){
    return getDetail(iid).then( res => {
      const data = res.result
      console.log( data)
      // 获取顶部轮播图数据
      this.topImages = data.itemInfo.topImages

      // 获取商品数据
      this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      //获取店铺信息
      this.shop = new Shop(data.shopInfo)

      // 获取商品详情数据
      this.goodsInfo = data.detailInfo.detailImage[0]

      this.GoodsParam = new GoodsParam(data.itemParams.info,data.itemParams.rule)


      // 获取用户评价数据
      if(data.rate.list.length > 0){
        this.uesrInfo = data.rate.list[0]
      }

    })

  },
  itemCut(index){
    console.log(index)
    switch(index){
      case 0:
        this.$refs.scroll.scrollTo(0,0,200)
        break
      case 1:
        // console.log(this.$refs.params.$el.offsetTop)
        this.$refs.scroll.scrollTo(0,-this.$refs.params.$el.offsetTop,200)
        break
      case 2:
          this.$refs.scroll.scrollTo(0,-this.$refs.commont.$el.offsetTop,200)
         break
      case 3:
          this.$refs.scroll.scrollTo(0,-this.$refs.recommend.$el.offsetTop,200)
         break
    }
    // console.log(this.$refs.params.$el.offsetTop)
  },
  topY(position){
    if((-position.y) < this.$refs.params.$el.offsetTop){
      this.$refs.nav.currentIndex = 0
    }
    if((-position.y) > this.$refs.params.$el.offsetTop && (-position.y) < this.$refs.commont.$el.offsetTop){
      this.$refs.nav.currentIndex = 1
    }
    if((-position.y) > this.$refs.commont.$el.offsetTop && (-position.y) < this.$refs.recommend.$el.offsetTop){
      this.$refs.nav.currentIndex = 2
    }
    if((-position.y) > this.$refs.recommend.$el.offsetTop){
      this.$refs.nav.currentIndex = 3
    }
  },
  addCart(){
    // 获取加入购物车的商品数据
   const wares = {}
   wares.image = this.topImages[0]
   wares.title = this.goods.title
    wares.desc = this.goods.desc
    wares.newPrice = this.goods.newPrice
    wares.realPrice = this.goods.realPrice
    wares.iid = this.iid

    // 将商品添加到购物车
    // this.$store.commit("addCart",wares)
    this.$store.dispatch('addCart',wares)
  }

},

}
</script>
<style scoped>
#Detail{
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.content{
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
  z-index: 15px;
   background-color: #fff;
}
.c{
  background-color: #000;
}
/* .topBar{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #fff;
  z-index: 9;
} */
.banner{
  margin-top: 50px;
}

</style>
