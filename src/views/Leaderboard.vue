<template>
  <b-container>

    <b-table
        :items="scores"
        :fields="['place', 'displayName', 'score']"
        sort-by="score"
        sort-desc
        per-page="0"
        striped
        borderless
    />
    <b-button varient="outline-secondary" @click="refreshData">Reload</b-button>
  </b-container>
</template>

<script>
import {db} from "@/firebaseInit";

export default {
  name: "Leaderboard",
  data() {
    return {
      scores: [],
    }
  },
  methods: {
    async refreshData() {
      // db.collection("leaderboards").doc("primary").get().then(r => this.scores = r.data().scores.map(e => {
      //   e.score, e.displayName
      // }))
      let scores = await (await db.collection("leaderboards").doc("primary").get()).data().scores
      this.scores = scores.map((e, i) => {
        return {
          score: e.score,
          displayName: e.displayName,
          place: i + 1
        }
      })
    }
  },
  mounted() {
    this.refreshData()
  },
}
</script>

<style scoped>

</style>