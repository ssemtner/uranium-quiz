<template>
  <div id="app">
    <Navbar/>
    <transition name="fade" mode="out-in">
      <RouterView style="margin-top: 80px"/>
    </transition>
    <Footer id="footer"/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  components: {Footer, Navbar},
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
#footer {
  position: absolute;
  bottom: 1vh;
  left: 1%;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .25s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
