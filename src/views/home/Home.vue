<template>
  <div id="home">
   <navbar class="home-nav">
     <div slot="center">购物街</div>
   </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/Navbar"
export default {
  components:{
     navbar
  }
}
</script>


<style>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>