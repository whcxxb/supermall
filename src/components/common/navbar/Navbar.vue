<template>
<div class="nav-bar"> 
<div class="left"><slot name="left"></slot></div>
<div class="center"><slot name="center"></slot></div>
<div class="right"><slot name="right"></slot></div>
</div>
</template>

<script>
export default {
  
}
</script>

<style>
   .nav-bar{
     display: flex;
     height: 44px;
     line-height: 44px;
     text-align: center;
     /* background-color:hotpink;  在home模块设置背景颜色 否则都会替换*/   
   }
   .left,.right{
     width: 60px;
   }
   .center{
     flex: 1;
   }
</style>