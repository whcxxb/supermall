<template>
  <div>
    <swiper class="detail-swiper"> 
    <swiper-item v-for="(item,index) in topimage" :key="index">
      <img :src="item" alt="">
    </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from "../../../components/common/swiper/index"
export default {
  components:{
    Swiper,
    SwiperItem
  },
  data() {
    return {
      
    }
  },
  props:{
    topimage:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>