<template>
  <div>
    <p>desc </p>
  </div>
</template>

<script>
export default {
  props:{
    desc:{
      type:String,
      default(){
        return ""
      }
    }
  }
}
</script>