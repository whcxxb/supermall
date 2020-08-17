<template>
    <navbar class="nav-bar">
      <div slot="left" @click="backclick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="title">
        <div @click="titleclick(index)" class="title-item" v-for="(i,index) in titles" :key="i" :class="{active:currentIndex === index}">{{i}}</div>
      </div>
    </navbar>
</template>
<script>
import navbar from "components/common/navbar/Navbar";
export default {
   components:{
    navbar
  },
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleclick(index){
      this.currentIndex = index
    },
    backclick(){
      //返回按钮
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .nav-bar img{
    margin-top: 10px;
  }
  .title{
    display: flex;
  }
  .title-item{
    flex: 1;
    font-size: 14px;
  }
  .active{
    color: hotpink;
  }
</style>