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
import {db} from "@/firebaseInit";

const primaryLeaderboard = db.collection("leaderboards").doc("primary")

export default {
  name: "SubmitScore",
  data() {
    return {
      option: false,
      displayName: ""
    }
  },
  methods: {
    submit() {
      let prevScores = []
      primaryLeaderboard.get().then(r => prevScores = r.data().scores)
          .then(() => {
            primaryLeaderboard.set({
              scores: [...prevScores, {
                displayName: this.displayName,
                score: this.$store.getters.score,
                group: "testing"
              }].slice(0, 100)
            })
          })
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