<template>
  <b-container>
    <div v-if="!complete">
      <b-alert type="primary" show="">Score: {{ score }}</b-alert>
      <Question v-bind="questions[currentQuestion]"/>
    </div>
    <div v-else>
      <h1>Congratulations</h1>
      <h2>You finished with {{ score }} points</h2>

      <SubmitScore/>
    </div>
  </b-container>
</template>

<script>
import Question from "@/components/Question";
import {mapGetters} from "vuex"
import SubmitScore from "@/components/SubmitScore";

export default {
  name: "Quiz",
  components: {SubmitScore, Question},
  computed: {
    ...mapGetters(["score", "currentQuestion", "questions", "complete"])
  },
}
</script>

<style scoped>

</style>