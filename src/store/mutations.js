export default {
  addcounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){
    // 把数据添加进数组
    state.cartList.push(payload)
  },
  // 全选
  allCheck(state){
    // 遍历数组
    for(let item of state.cartList){
      item.ischeck = true
    }
  },
  // 取消全选
  allCalCheck(state){
    // 遍历数组
    for(let item of state.cartList){
      item.ischeck = false
    }
  }

}
