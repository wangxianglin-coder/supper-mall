export default {
  addCart(context,wares){
    return new Promise((resolve,reject) => {
      let oldWares = null
      // 遍历数据
      for(let item of context.state.cartList){
        if(item.iid === wares.iid){
          oldWares = item
        }
      }
      // 判断oldWares
      if(oldWares){
        // oldWares.count += 1
        // 通过上下文和commit调用mutations里面的函数
        context.commit('addcounter',oldWares)
        resolve("当前商品数量+1")
      }else{
        wares.count = 1
        // state.cartList.push(wares)
        wares.ischeck = false
        context.commit('addToCart',wares)
        resolve("商品添加成功")
      }

      // console.log(context.state.cartList.length)
    })
  }
}
