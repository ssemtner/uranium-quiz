<template>
  <b-container>
    <b-jumbotron>
      <template #header>
        Uranium Quiz
      </template>
      <template #lead>
        Scott Semtner
        <br>
        A Project for HTH Mesa
      </template>
    </b-jumbotron>

    <h4 class="mb-4">This is a quiz about the element Uranium.</h4>
    <p>
      You will have to answer questions to get your score. The more tries and time that it takes you to answer a
      question, the lower your score.
      <br>
      You will have to answer {{ count }} questions before having the option to enter your score into the
      leaderboard
    </p>

    <br>

    <b-button variant="primary" block size="lg" to="/quiz">Start Quiz</b-button>
  </b-container>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['count'])
  }
}
</script>
