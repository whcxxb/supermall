<template>
  <div id="app">
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from "./components/content/MainTabBar"
export default {
  name: 'App',
  components: {
    maintabbar
  }
}
</script>

<style>
  @import "assets/css/base.css"
</style>
