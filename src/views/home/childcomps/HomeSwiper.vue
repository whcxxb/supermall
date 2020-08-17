<template>
   <Swiper>
     <SwiperItem v-for="(item,i) in banners" :key="i">  
       <a :href="item.link">
         <img :src="item.image" alt="" @load="imageload">
       </a>
     </SwiperItem>
   </Swiper>
</template>

<script>
import {Swiper, SwiperItem} from "../../../components/common/swiper/index"
export default {
  data() {
    return {
      isload:false
    }
  },
  props:{
    banners:Array
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imageload(){
      if(!this.isload){
        this.$emit('swiperimageload')
        this.isload = true
      }
      
    }
  }
}
</script>
