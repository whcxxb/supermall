<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol :titles="['流行','新款','精选']" @tabclick="tabclick"
       ref="tabcontrol1" class="istabcontrol" v-show="istabfixed"></tabcontrol>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pullUpLoad="true" @pullingUp="homeload">
      <swiper :banners="banners" @swiperimageload="swiperimageload"></swiper>
      <recommendview :recommend="recommend"></recommendview>
      <featuerview></featuerview>
      <tabcontrol :titles="['流行','新款','精选']" class="tab-control" @tabclick="tabclick"
       ref="tabcontrol2"></tabcontrol>
      <goodslist :goods="showgoods" />
    </scroll>

    <!-- 监听原生组件的点击事件 -->
    <backtop @click.native="backclick" v-show="isShow"></backtop>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar";
import swiper from "./childcomps/HomeSwiper";
import recommendview from "./childcomps/RecommendView";
import featuerview from "./childcomps/FeatuerView";
import tabcontrol from "../../components/content/tabcontrol/TabControl";
import goodslist from "../../components/content/goods/GoodsList";
import backtop from "components/content/backtop/backtop";
import scroll from "../../components/common/scroll/Scroll";

import { homedata, gethomegoods } from "../../network/home";
export default {
  components: {
    navbar,
    swiper,
    recommendview,
    featuerview,
    tabcontrol,
    goodslist,
    scroll,
    backtop,
  },
  data() {
    return {
      banners: [],
      recommend: [],
      // titles:['测试','测试','测试']
      goods: {
        //拿到首页展示的数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false,
      //记录
      taboffsetTop:0,
      istabfixed:false,
      saveY:0
    };
  },
  computed: {
    //
    showgoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY)
    console.log("home likai");
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
    //记录离开首页的时的位置
    console.log('首页离开位置' + this.saveY);
  },
  created() {
    console.log('创建home');
    //获取首页轮播图数据
    this.homedata();
    //一次调用三个方法 获取数据
    this.gethomegoods("pop");
    this.gethomegoods("new");
    this.gethomegoods("sell");
  },
  mounted() {
    //首页图片加载完成的事件监听
    const refrsh =this.debounce(this.$refs.scroll.refresh,500)
    this.$bus.$on("imageload", () => {
      refrsh()
    });
    
  
    // console.log(this.$refs.tabcontrol.$el.offsetTop);
  },
  methods: {
    swiperimageload(){
     this.taboffsetTop = this.$refs.tabcontrol2.$el.offsetTop
    },
    homeload(){
      this.gethomegoods(this.currentType)
    },
    debounce(func,delay){
      let timer = null
      return function(...arge){
        if(timer) clearTimeout(timer)
        timer =setTimeout(()=>{
          func.apply(this,arge)
        },delay)
      }
    },
    backclick() {
      //回到顶部实现 拿到scroll组件
      this.$refs.scroll.scrollTo(0, 0);
    },
    
    contentScroll(position) {
      //判断backtop是否显示 
      this.isShow = -position.y > 1000;

      //吸顶
      this.istabfixed = (-position.y) > this.taboffsetTop
    },

    tabclick(index) {
      index === 0 ? (this.currentType = "pop"): index === 1 ? (this.currentType = "new") : (this.currentType = "sell");

      this.$refs.tabcontrol1.currentType  = index
      this.$refs.tabcontrol2.currentType  = index
    },
    homedata() {
      homedata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    gethomegoods(type) {
      //动态获取type参数
      const page = this.goods[type].page + 1; //动态获取页数
      gethomegoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.scroll.finishPullUp()
      });
    },
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
.istabcontrol{
  position: relative;
  z-index: 9;
}
</style>