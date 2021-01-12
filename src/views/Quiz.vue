<template>
  <b-container>
    <div v-if="countdown === 0">
      <div v-if="!complete">
        <b-alert type="primary" show="">Score: {{ score }}</b-alert>
        <Question v-bind="questions[currentQuestion]"/>
      </div>
      <div v-else>
        <h1>Congratulations</h1>
        <h2>You finished with {{ score }} points</h2>

        <SubmitScore/>
      </div>
    </div>
    <h1 v-else class="display-2">
      {{ countdown }}
    </h1>
  </b-container>
</template>

<script>
import Question from "@/components/Question";
import {mapGetters} from "vuex"
import SubmitScore from "@/components/SubmitScore";

export default {
  name: "Quiz",
  components: {SubmitScore, Question},
  data() {
    return {
      countdown: 5
    }
  },
  watch: {
    countdown: {
      immediate: true,
      handler(value) {
        if (value !== 0) {
          setTimeout(() => {
            this.countdown--
          }, 1000)
        }
      }
    }
  },
  computed: {
    ...mapGetters(["score", "currentQuestion", "questions", "complete"])
  },
}
</script>

<style scoped>

</style>