<template>
  <b-container>
    <b-button variant="outline-secondary" @click="refreshData">Reload</b-button>
    <b-pagination align="center" class="my-4"/>
    <b-table :items="scores" :fields="['score', 'displayName', 'group']" sort-by="score" sort-desc per-page="10" striped borderless></b-table>
  </b-container>
</template>

<script>
import {db} from "@/firebaseInit";

export default {
  name: "Leaderboard",
  data() {
    return {
      scores: []
    }
  },
  methods: {
    refreshData() {
      db.collection("leaderboards").doc("primary").get().then(r => this.scores = r.data().scores)
    }
  },
  created() {
    this.refreshData()
  },
}
</script>

<style scoped>

</style>