<template>
   <Swiper>
     <SwiperItem v-for="(item,i) in banners" :key="i">  
       <a :href="item.link">
         <img :src="item.image" alt="">
       </a>
     </SwiperItem>
   </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from "../../../components/common/swiper/index"
export default {
  props:{
    banners:Array
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>
