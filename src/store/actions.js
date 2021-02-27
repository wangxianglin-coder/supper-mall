export const actions = {
  addCart(context,wares){
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
    }else{
      wares.count = 1
      // state.cartList.push(wares)
      // wares.isactive = true
      context.commit('addToCart',wares)
    }

    console.log(context.state.cartList)
  }
}
