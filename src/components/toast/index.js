// import Vue from 'vue'
import Toast from './Toast'
// Vue.use(Toast)
const obj = {}

// 执行方法
obj.install = function (Vue){
// 创建组件构造器
const toastContrustor = Vue.extend(Toast)
// new 的方式，根据组件构造器，可以创建一个组件对象
const toast = new toastContrustor()
// 将组件对象手动挂载到某一个元素上
toast.$mount(document.createElement('div'))
// toast.$el对应的就是div
document.body.appendChild(toast.$el)

Vue.prototype.$toast = toast
}
// 导出对象
export default obj
