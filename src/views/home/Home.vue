<template>
  <div id="home">
   <navbar class="home-nav"><div slot="center">购物街</div></navbar>

   <scroll class="content" ref="scroll" :probe-type='3' @scroll="contentScroll" :pullUpLoad="true" @pullingUp="loadup">
   <swiper :banners='banners'></swiper>
   <recommendview :recommend="recommend"></recommendview>
   <featuerview></featuerview>
   <tabcontrol :titles="['流行','新款','精选']" class="tab-control" @tabclick="tabclick"></tabcontrol>
   <goodslist :goods="showgoods" />
   </scroll>
 
    <!-- 监听原生组件的点击事件 -->
   <backtop @click.native="backclick" v-show="isShow"></backtop>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar"
import swiper from "./childcomps/HomeSwiper"
import recommendview from "./childcomps/RecommendView"
import featuerview from "./childcomps/FeatuerView"
import tabcontrol from "../../components/content/tabcontrol/TabControl"
import goodslist from "../../components/content/goods/GoodsList"
import backtop from "components/content/backtop/backtop"
import scroll from "../../components/common/scroll/Scroll"

import {homedata,gethomegoods} from "../../network/home"
export default {
  components:{
     navbar,
     swiper,
     recommendview,
     featuerview,
     tabcontrol,
     goodslist,
     scroll,
     backtop
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
      },
      currentType:'pop',
      isShow:false
    }
  },
  computed: {
    showgoods(){
      return this.goods[this.currentType].list
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
    loadup(){
      //如果没有加this   gethomegoods 就是网络组件的方法 没有page
      this.gethomegoods(this.currentType)
      
      //刷新可滚动区域
      this.$refs.scroll.scroll.refresh()
    },
    backclick(){
      //回到顶部实现 拿到scroll组件 
      this.$refs.scroll.scrollTo(0,0,)
    },
    contentScroll(position){
      this.isShow = -position.y > 1000
      // console.log(position);
    },
    tabclick(index){
      //  if(index === 1){
      //    this.currentType = 'new'
      //  }else if(index === 2){
      //    this.currentType ='sell'
      //  }else{
      //    this.currentType = 'pop'
      //  }
      index === 0 ? this.currentType = 'pop' : (index === 1 ? this.currentType = 'new' : this.currentType ='sell')
    },
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

        this.$refs.scroll.scroll.finishPullUp()
    })
    }
  },
}
</script>

<style scoped>
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
    height: 100vh;
    position: relative;
  }
  .tab-control{
    /* 在父组件设置子组件的css 防止复用 */
    position: sticky; 
    top: 44px;
    z-index: 9;
  }
  .content{
    
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }
</style>