<template>
  <b-container>
    <b-jumbotron><h1>{{ text }}</h1></b-jumbotron>
    <br>

    <b-alert v-if="correct" variant="success" show="">Correct</b-alert>
    <b-alert v-else-if="correct === false" variant="warning" show="">Try Again</b-alert>

    <b-button
        v-for="(choice) in choices"
        v-bind:key="choice"
        @click="choiceClick(choice)"
        variant="outline-info"
        size="lg"
        class="m-4"
    >
      {{ choice }}
    </b-button>

    <br>

    <div v-if="correct">
      <b-button
          v-if="currentQuestion === $store.state.questions.length - 1"
          @click="finish"
          variant="primary"
          block
          class="my-4"
      >
        Finish
      </b-button>
      <b-button
          v-else
          @click="next"
          variant="primary"
          block
          class="my-4"
      >
        Next Question
      </b-button>
    </div>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "Question",
  props: ["text", "choices", "answer"],
  data() {
    return {
      attempts: 1,
      correct: null,
    }
  },
  computed: {
    ...mapGetters(['currentQuestion', 'questions'])
  },
  methods: {
    choiceClick(choice) {
      if (!this.correct) {
        if (choice === this.answer) {
          this.correct = true
          this.$store.dispatch("addScore", Math.round(100 / this.attempts))
          // this.$store.dispatch("addScore", 10)
        } else {
          this.attempts++
          this.correct = false
        }
      }
    },
    next() {
      this.correct = null
      this.attempts = 1
      this.$store.commit("nextQuestion")
    },
    finish() {
      alert("finished")
    }
  }
}
</script>

<style scoped>

</style>