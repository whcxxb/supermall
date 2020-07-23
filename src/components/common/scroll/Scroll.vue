<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import bsc from "better-scroll"
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll:null,
    }
  },
  methods: {
    scrollTo(x,y,tim=300){
      this.scroll.scrollTo(x,y,tim)
    }
  },
  mounted() {
     this.scroll = new bsc(this.$refs.wrapper,{
       click:true,
       probeType:this.probeType,
       pullUpLoad:this.pullUpLoad
     })
     
     this.scroll.on('scroll',(position)=>{
       this.$emit('scroll',position)
     })
      //监听上拉事件
     this.scroll.on('pullingUp',()=>{
      this.$emit('pullingUp')
     })
  },
}
</script>