<template>
  <div id="app">
    <Navbar/>
    <transition name="fade" mode="out-in">
      <RouterView style="margin-top: 80px"/>
    </transition>
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
