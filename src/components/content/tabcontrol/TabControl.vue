<template>
  <div class="tab-control">
    <div v-for="(item,i) in titles" :key="i"
     class="tab-con-item"
     :class="{active: i === currentIndex}"
     @click="itemclick(i)"
     >
     <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods:{
    itemclick(i){
      this.currentIndex = i
    }
  }
};
</script>

<style>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
  }
  .tab-con-item{
    flex: 1;
  }
  .tab-con-item span{
    padding:5px
  }
  .active{
    color: hotpink;
  }
  .active span{
    border-bottom: 2px solid hotpink;
  }
</style>