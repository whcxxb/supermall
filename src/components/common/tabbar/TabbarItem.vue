<template>
  <div class="tab-bar-itme" @click="itemClick">
    <div v-if="isactive"> <slot  name="icon-active"></slot></div>
    <div v-else><slot  name="icon"></slot></div>
    <div :style="activeColor"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:String,
    iscolor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
      // isactive:false
    }
  },
  computed: {
     isactive(){
       //获取当前活动的路径  /home = /home  true
       return this.$route.path.includes(this.path)
    },
    activeColor(){
      return this.isactive ? {color:this.iscolor} : {}
    }
  },
  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  },
};
</script>

<style >
.tab-bar-itme {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-itme img {
  width: 24px;
  height: 24px;
  margin-top: 4px;
  vertical-align: middle;
}
</style>