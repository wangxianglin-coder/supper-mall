export default {
  addcounter(state,payload){
    payload.count++
  },
  addToCart(state,payload){

    payload.ischeck = true
    state.cartList.push(payload)
  },
  // ischeck(state){
  //   for(let item of state.cartList){
  //     this.item.isactive = !this.item.isactive
  //     console.log(item)
  //   }

  // }
}
