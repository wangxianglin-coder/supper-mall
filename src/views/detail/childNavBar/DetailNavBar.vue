<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="back">
        <img src="../../../assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="cen">
        <div v-for="(item,index) in titles"
         :key="item.acm"
         :class="{active: currentIndex === index}"
         @click="itemClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from '../../../components/navbar/NavBar'
export default {
  components: {
    NavBar
  },
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit("cut",index)
    },
    back(){
      this.$router.back()
    },

  },
}
</script>

<style scoped>
.cen{
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
}
.left{
  margin-top: 12px;
}
.active{
  color: red
}
</style>
