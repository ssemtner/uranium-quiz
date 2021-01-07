<template>
  <b-container>
    <b-jumbotron><h1>What is the atomic number of uranium?</h1></b-jumbotron>
    <br>

    <b-alert v-if="correct" variant="success" show="">Correct</b-alert>
    <b-alert v-else-if="correct === false" variant="warning" show="">Try Again</b-alert>

    <b-button
        v-for="(choice) in options"
        v-bind:key="choice"
        @click="choiceClick(choice)"
        variant="outline-info"
        size="lg"
        class="m-4"
    >
      {{ choice }}
    </b-button>

    <br>

    <b-button v-if="correct" @click="next" block variant="primary" class="my-4">Next Question</b-button>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "Question",
  data() {
    return {
      options: [
        "Option 1",
        "Option 2",
        "Option 3"
      ],
      attempts: 0,
      answer: "Option 2",
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
        } else {
          this.attempts++
          this.correct = false
        }
      }
    },
    next() {
      this.$store.commit("nextQuestion")
      alert("next question")
    }
  }
}
</script>

<style scoped>

</style>