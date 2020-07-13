<template>
    <tab-bar>
      <tarbaritem path="/home" iscolor="green">
        <img slot="icon" src="../../assets/img/tabbar/home.svg" alt />
        <img slot="icon-active" src="../../assets/img/tabbar/home-active.svg" alt />
        <div slot="text">首页</div>
      </tarbaritem>
      <tarbaritem path="/fenlei">
        <img slot="icon" src="../../assets/img/tabbar/fenlei.svg" alt />
        <img slot="icon-active" src="../../assets/img/tabbar/fenlei-active.svg" alt />
        <div slot="text">分类</div>
      </tarbaritem>
      <tarbaritem path="/gwc">
        <img slot="icon" src="../../assets/img/tabbar/gwc.svg" alt />
        <img slot="icon-active" src="../../assets/img/tabbar/gwc-active.svg" alt />
        <div slot="text">购物车</div>
      </tarbaritem>
      <tarbaritem path="/my">
        <img slot="icon" src="../../assets/img/tabbar/my.svg" alt />
        <img slot="icon-active" src="../../assets/img/tabbar/my-active.svg" alt />
        <div slot="text">我的</div>
      </tarbaritem>
    </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import tarbaritem from "components/common/tabbar/TabbarItem";
export default {
  name:"MainTabBar",
  components:{
    TabBar,
    tarbaritem,
  }
}
</script>

<style lang="">
  
</style>