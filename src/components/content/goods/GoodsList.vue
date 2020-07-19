<template>
  <div class="goods">
    <goodslistitem v-for="(item,index) in goods" :key="index" :goodsitem="item" />
  </div>
</template>

<script>
import goodslistitem from "./GoodListItem"
export default {
  components:{
    goodslistitem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>


<style>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>