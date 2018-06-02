<template>
  <v-layout row flex v-if="movies">
    <v-flex xs1></v-flex>
    <v-flex xs2 v-for="movie in movies" :key="movie.id" class="movie-tile">
      <h2>{{ movie.title }}</h2>
      <p>
        {{ movie.desc }}
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'MultiMovies',
  props: ['movies']
}
</script>

<style>

</style>
