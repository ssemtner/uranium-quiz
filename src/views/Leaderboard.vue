<template>
  <b-container>

    <b-table
        :items="scores"
        :fields="['score', 'displayName', 'group']"
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
    refreshData() {
      db.collection("leaderboards").doc("primary").get().then(r => this.scores = r.data().scores)
    }
  },
  mounted() {
    this.refreshData()
  },
}
</script>

<style scoped>

</style>