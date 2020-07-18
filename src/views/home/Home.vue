<template>
  <div id="home">
   <navbar class="home-nav"><div slot="center">购物街</div></navbar>
   <swiper :banners='banners'></swiper>
   <recommendview :recommend="recommend"></recommendview>
   <featuerview></featuerview>
   <tabcontrol :titles="['流行','新款','精选']" class="tab-control"></tabcontrol>
   <goodslist :goods="goods['pop'].list" />
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar"
import swiper from "./childcomps/HomeSwiper"
import recommendview from "./childcomps/RecommendView"
import featuerview from "./childcomps/FeatuerView"
import tabcontrol from "../../components/content/tabcontrol/TabControl"
import goodslist from "../../components/content/goods/GoodsList"


import {homedata,gethomegoods} from "../../network/home"
export default {
  components:{
     navbar,
     swiper,
     recommendview,
     featuerview,
     tabcontrol,
     goodslist
  },
  data() {
    return {
      banners:[],
      recommend:[],
      // titles:['测试','测试','测试']
      goods:{   //拿到首页展示的数据
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    }
  },
  created(){
    //获取首页轮播图数据
    this.homedata()
    //一次调用三个方法 获取数据
    this.gethomegoods('pop')
    this.gethomegoods('new')
    this.gethomegoods('sell')
  },
  methods: {
    homedata(){
      homedata().then(res =>{
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list
    })
    },
    gethomegoods(type){   //动态获取type参数
      const page = this.goods[type].page + 1  //动态获取页数
      gethomegoods(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
    })
    }
  },
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
    height: 3000px;
  }
  .tab-control{
    /* 在父组件设置子组件的css 防止复用 */
    position: sticky; 
    top: 44px;
  }
</style>