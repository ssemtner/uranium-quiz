<template>
  <b-container>
    <Question/>
  </b-container>
</template>

<script>
import Question from "@/components/Question";
import {mapGetters} from "vuex"

export default {
  name: "Quiz",
  components: {Question},
  computed: {
    ...mapGetters(["currentQuestion", "questions"])
  }
}
</script>

<style scoped>

</style>