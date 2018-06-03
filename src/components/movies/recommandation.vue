<template>
<div class="navBar">
    <NavBar></NavBar>
    <div class="listeFilm">
        <MovieList></MovieList>
        <v-layout>
            <v-spaccer></v-spaccer>
        </v-layout>
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
