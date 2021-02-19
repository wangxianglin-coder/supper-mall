<template>
  <div>
    <nav-bar class="home_nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-banner :banners="banners"></home-banner>
    <recommend :recommends="recommends"></recommend>
    <center-nav></center-nav>
    <nav-list :titles="['推荐','流行','精品']" class="tab_con"
     @tabClick='tabClick' />
    <goods-list :goods="goods[currentType].list" />



    <ul>
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
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
      <li>31</li>

    </ul>
  </div>
</template>

<script>

import NavBar from '../../components/navbar/NavBar'
import NavList from '../../components/nav-list'
import GoodsList from '../../components/goods/GoodsList'

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
      currentType: 'pop'
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

    })
    }

  },
}
</script>

<style>
.home_nav{
background-color: var(--color-tint);
}
.tab_con{
  position: sticky;
  top: 44px;
  background-color: #fff;

}
</style>
