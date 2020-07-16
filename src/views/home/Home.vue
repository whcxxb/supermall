<template>
  <div id="home">
   <navbar class="home-nav"><div slot="center">购物街</div></navbar>
   <Swiper>
     <SwiperItem v-for="item in banner">
       <a :href="item.link">
         <img :src="item.image" alt="">
       </a>
     </SwiperItem>
   </Swiper>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar"
import {homedata} from "../../network/home"
import {Swiper, SwiperItem} from "../../components/common/swiper/index"
export default {
  components:{
     navbar,Swiper,SwiperItem
  },
  data() {
    return {
      banner:[],
      recommend:[]
    }
  },
  created(){
    homedata().then(res =>{
      console.log(res)
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list
    })
  }
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>