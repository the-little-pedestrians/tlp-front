<template>
  <v-layout row flex v-if="movies">
    <v-flex md1></v-flex>
    <v-flex md2 v-for="movie in movies" :key="movie.id" class="movie-tile">
      <v-layout class="movieCard">
        <v-flex md12 sm6 offset-sm1>
          <v-card>
            <v-card-media :src="movie.url" height="200px">
            </v-card-media>
            </v-card>
          <v-spacer></v-spacer>
        </v-flex>
      </v-layout>
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
  .movieCard:hover
  {
    transform: scale(1.1);
    transition-duration: .2s;
  }
  .movieCard
  {
    transition-duration: .2s;
  }
</style>
