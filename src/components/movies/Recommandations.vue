<template>
<div class="navBar">
  <NavBar></NavBar>
    <div class="listeFilm">
      <h1>Recommanded for you</h1>
      <MovieList></MovieList>
      <h1>Action movies</h1>
      <MovieList></MovieList>
      <h1>Comedies</h1>
      <MovieList></MovieList>
  </div>
</div>
</template>

<script>
import NavBar from './NavBar'
import MovieList from './MovieList'
export default {
  components: {
    NavBar,
    MovieList
  }
}
</script>

<style>

</style>
