<template>
  <div id="app">
    <Navbar/>
    <RouterView style="margin-top: 80px"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {Navbar},
  created() {
    this.$store.dispatch("randomize")
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
