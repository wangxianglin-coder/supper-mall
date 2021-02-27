<template>
<div>
  <div class="check" :class="{active: ischeck}">
    <img src="../../../assets/img/cart/tick.svg" alt="">
  </div>
</div>

</template>

<script>
export default {
  props: {
    ischeck: {
      type:Boolean
    }
  },
  computed: {

  },
  methods: {

  },
}
</script>

<style scoped>
.check{
border-radius: 50%;
height: 17px;
width: 17px;
}
.active{
  background-color: red;
}
</style>
