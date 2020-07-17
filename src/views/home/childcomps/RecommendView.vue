<template>
  <div class="recommend">
    <div v-for="(item,i) in recommend" :key="i" class="recommend-item">
      <a :href="item.link">
       <img :src="item.image" alt="">
       <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>


<script>
export default {
  props:{
    recommend:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 16px;
    padding: 10px 0 20px;
    border-bottom: 3px solid #eee;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 80%;
    margin-bottom: 6px;
  }
</style>