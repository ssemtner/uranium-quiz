<template>
  <div>
    <b-jumbotron><h1>{{ text }}</h1></b-jumbotron>
    <br>

    <b-alert v-if="correct" variant="success" show="">Correct</b-alert>
    <b-alert v-else-if="correct === false" variant="warning" show="">Try Again</b-alert>

    <h5>Time elapsed: {{ time }}</h5>

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
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "Question",
  props: ["text", "choices", "answer"],
  data() {
    return {
      attempts: 0,
      correct: null,
      time: 0
    }
  },
  watch: {
    time: {
      immediate: true,
      handler(value) {
        if (value < 10 && !this.correct) {
          setTimeout(() => {
            this.time++
          }, 1000)
        }
      }
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

          let score = 100
          score -= 20 * this.attempts
          score -= 5 * this.time
          score = score < 10 ? 10 : score

          this.$store.dispatch("addScore", score)
        } else {
          this.attempts++
          this.correct = false
        }
      }
    },
    next() {
      this.correct = null
      this.attempts = 1
      this.time = 0
      this.$store.commit("nextQuestion")
    },
    finish() {
      this.$store.dispatch("complete")
    }
  }
}
</script>

<style scoped>

</style>