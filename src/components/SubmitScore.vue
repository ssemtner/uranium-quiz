<template>
  <div>
    <b-button variant="info" @click="option = !option" class="my-4">Submit Score to Leaderboard</b-button>
    <transition name="fade">
      <div v-if="option">
        <b-form @submit.prevent="submit" class="mt-4">
          <b-input type="text" v-model="displayName" placeholder="Display Name"></b-input>
          <b-button type="submit" variant="primary" class="m-2">Submit</b-button>
        </b-form>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import {db} from "@/firebaseInit";

const primaryLeaderboard = db.collection("leaderboards").doc("primary")
const groups = [
    "Uranium-238",
    "Uranium-236",
    "Uranium-235",
    "Uranium-234",
    "Uranium-233",
    "Uranium-232"
]

export default {
  name: "SubmitScore",
  data() {
    return {
      option: false,
      displayName: ""
    }
  },
  computed: {
    ...mapGetters(["score"])
  },
  methods: {
    submit() {
      let scoreRange = Math.round(this.$store.getters.questions.length / groups.length)

      // let group = ""

      console.log(scoreRange)

      let prevScores = []

      primaryLeaderboard.get().then(r => prevScores = r.data().scores)
          .then(() => {
            primaryLeaderboard.set({
              scores: [...prevScores, {
                displayName: this.displayName,
                score: this.score,
                group: "testing"
              }].slice(0, 100)
            })
          })
      this.$router.replace("/leaderboard")
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>