<template>
  <div class="toast" v-show="show">
    <div>{{mes}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mes: "",
      show: false
    }
  },
  methods: {
     isShow(message,time){
      this.show = true
      this.mes = message

      setTimeout(() => {
        this.show = false
        this.mes = ""
      },time)
   }
  },

}
</script>

<style scoped>
.toast{
  position: fixed;
  left: 50%;
  top: 50%;
  background-color: rgba(0,0,0,0.7);
  padding: 8px 10px;
  transform: translate(-50%,-50%);
  color: #fff;
  z-index: 25;
}
</style>
