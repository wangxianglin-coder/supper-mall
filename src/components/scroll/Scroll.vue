<template>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullingUp: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper,{
     observeDOM: true,
     click: true,
     probeType: this.probeType,
     pullUpLoad: this.pullingUp
    }),
    this.scroll.refresh()
    // 监听实时位置
    this.scroll.on("scroll",position => {
      this.$emit("scrollHight",position)
    })
    // 监听底部上拉加载
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  },
  methods: {

    // 回到顶部的方法
    scrollTo(x,y,time=500){
      this.scroll.scrollTo(x,y,time)
    },
    // 上拉加载完成
    finishPullUp(){
      this.scroll.finishPullUp()
      this.scroll.refresh()
    },
  },
}
</script>

<style scoped>

</style>>


