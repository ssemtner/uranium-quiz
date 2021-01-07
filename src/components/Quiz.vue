<template>
  <b-container>
    <b-alert type="primary" show="">Score: {{ $store.getters.score }}</b-alert>
    <Question v-bind="questions[currentQuestion]"/>
  </b-container>
</template>

<script>
import Question from "@/components/Question";
import {mapGetters} from "vuex"

export default {
  name: "Quiz",
  components: {Question},
  computed: {
    ...mapGetters(["score", "currentQuestion", "questions"])
  },
}
</script>

<style scoped>

</style>