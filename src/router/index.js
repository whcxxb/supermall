import Vue  from "vue"
import Router from "vue-router"
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)


//路由懒加载
const Home = ()=>import("views/home/Home")
const Cart = ()=>import("views/cart/Cart")
const Category = ()=>import("views/category/Category")
const Profile = ()=>import("views/profile/Profile")
const Detail = ()=>import("views/detail/Detail")
const router = new Router({
  routes:[
    {
      path:'',
      redirect:"/home"
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/detail',
      component:Detail
    },
  ],
  mode:"history"
})

export default router