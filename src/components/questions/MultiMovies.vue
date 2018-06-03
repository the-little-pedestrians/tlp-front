<template>
  <v-layout row flex v-if="movies">
    <v-flex md1></v-flex>
    <v-flex md2 v-for="movie in movies" :key="movie.id" class="movie-tile">
      <v-layout class="movieCard" @click="$emit('selected', movie.id)">
        <v-flex md12>
          <v-card>
            <v-card-title class="card-title-container text-xs-center">
              <div class="title-text card-title-text white--text">
                <span>{{ movie.title }}</span>
              </div>
            </v-card-title>
            <v-card-media :src="movie.url" height="300px"></v-card-media>
            <v-card-title class="punchline">
              {{ movie.tagline }}
            </v-card-title>
            <v-card-text class="date">{{ movie.formattedDate }}</v-card-text>
          </v-card>
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

<style scoped>
  .movieCard:hover {
    transform: scale(1.1);
    transition-duration: .2s;
  }

  .movieCard {
    transition-duration: .2s;
    padding: 3px;
    cursor: pointer;
  }

  .card-title-container {
    background-color: rgba(0, 0, 0, .6);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-title-text {
    height: 4.95em;
    font-size: 1em;
    font-weight: 700;
    line-height: 1.65em;
    padding: 10px 15px;
  }

  .punchline {
    height: 3.6em;
    font-size: 1em;
    line-height: 1.2em;
    overflow: hidden;
    align-items: baseline;
    justify-content: center;
  }

  .date {
    font-weight: 700;
  }
</style>
