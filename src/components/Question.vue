<template>
  <b-container>
    <b-jumbotron><h1>What is the atomic number of uranium?</h1></b-jumbotron>
    <br>

    <b-alert v-if="this.correct" variant="success" show="">Correct</b-alert>
    <b-alert v-else-if="this.correct === false" variant="danger" show="">Try Again</b-alert>

    <b-button v-for="(option, index) in this.options" :key="option" @click="onClick(index)" variant="outline-info"
              size="lg" class="m-4">
      {{ option }}
    </b-button>

  </b-container>
</template>

<script>
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
      answer: 1,
      correct: null,
    }
  },
  methods: {
    onClick(index) {
      if (!this.correct) {
        if (index === this.answer) {
          this.correct = true
          alert(this.attempts)
        } else {
          this.attempts++
          this.correct = false
        }
      }
    }
  }
}
</script>

<style scoped>

</style>