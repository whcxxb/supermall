<template>
  <div id="home">
   <navbar class="home-nav"><div slot="center">购物街</div></navbar>
   <swiper :banners='banners'></swiper>
   <recommendview :recommend="recommend"></recommendview>
   <featuerview></featuerview>
   <tabcontrol :titles="titles" class="tab-control"></tabcontrol>
   <ul>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
          <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
          <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
          <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
          <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
          <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
          <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
          <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
          <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     <li>测试</li>
     
   </ul>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar"
import {homedata} from "../../network/home"
import swiper from "./childcomps/HomeSwiper"
import recommendview from "./childcomps/RecommendView"
import featuerview from "./childcomps/FeatuerView"
import tabcontrol from "../../components/content/tabcontrol/TabControl"
export default {
  components:{
     navbar,
     swiper,
     recommendview,
     featuerview,
     tabcontrol
  },
  data() {
    return {
      banners:[],
      recommend:[],
      titles:['测试','测试','测试']
    }
  },
  created(){
    homedata().then(res =>{
      console.log(res)
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  #home{
    padding-top: 44px;
  }
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>