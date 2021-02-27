<template>
  <div class="nav_list">
    <div v-for="(item,index) in titles" :key="index"
    class="nav_list_item"
    :class="{active: num === index}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    titles: {
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      num: 0
    }
  },
  methods: {
    itemClick(index){
      this.num = index
      this.$emit('tabClick',index)
    }
  },
}
</script>

<style>
.nav_list {
  display: flex;
  text-align: center;
  padding: 5px;

}
.nav_list_item{
  flex: 1;
}

.active {
color: var(--color-tint);
}
.active span{
  padding: 5px;
  border-bottom: 1px solid var(--color-tint);
}
</style>
