<template>
  <div>
    <NavBar></NavBar>
    <v-layout row flex v-if="movies">
      <v-flex md1></v-flex>
      <v-flex md2 v-for="movie in movies" :key="movie.id" class="movie-tile">
        <v-layout class="movieCard">
          <v-flex md12 sm6 offset-sm1>
            <v-card>
              <v-card-media :src="movie.url" height="200px" @click.stop="modalMovie">
              </v-card-media>
              </v-card>
            <v-spacer></v-spacer>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'MovieList',
  components: {
    NavBar
  },

  data: () => ({
    movies: [
      {
        id: 1,
        title: 'Le Parrain',
        desc: 'Lorem Ipsum',
        url: 'http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/57/73/18660716.jpg'
      }, {
        id: 2,
        title: 'Titanic',
        desc: 'Lorem Ipsum',
        url: 'http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/57/73/18660716.jpg'
      }, {
        id: 3,
        title: 'Les Bronzés',
        desc: 'Lorem Ipsum',
        url: 'http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/57/73/18660716.jpg'
      }, {
        id: 4,
        title: 'Avengers',
        desc: 'Lorem Ipsum',
        url: 'http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/57/73/18660716.jpg'
      }, {
        id: 5,
        title: 'Star Wars',
        desc: 'Lorem Ipsum',
        url: 'http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/57/73/18660716.jpg'
      }
    ]
  }
  )
}
</script>

<style>

</style>
