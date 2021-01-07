<template>
  <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
    <b-navbar-brand to="/" exact exact-active-class="active">Uranium Quiz</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/quiz" exact exact-active-class="active">Quiz</b-nav-item>
        <b-nav-item to="/leaderboard" exact exact-active-class="active">Leaderboard</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>
