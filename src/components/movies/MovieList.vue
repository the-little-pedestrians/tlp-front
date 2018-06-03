<template>
  <div>
    <NavBar></NavBar>
    <v-layout row flex v-if="movies">
      <v-flex md1></v-flex>
      <v-flex md2 v-for="movie in movies" :key="movie.id" class="movie-tile">
        <v-layout class="movieCard" @click.stop="dialog = true">
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
    <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="secondary">
          <v-toolbar-title>Titre du film</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon dark @click.native="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-layout row flex>
          <v-flex mb7 sm6>
            <v-card-media src='http://fr.web.img4.acsta.net/r_1280_720/pictures/17/05/09/15/47/313876.jpg' contain=true></v-card-media>
          </v-flex>
          <v-flex mb6 sm6>
            <h1>OLAAAA</h1>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
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
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,

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
  })

}
</script>

<style>

</style>
