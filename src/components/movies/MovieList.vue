<template>
  <div>
    <v-layout row flex v-if="movies">
      <v-flex md1></v-flex>
      <v-flex md2 v-for="movie in movies" :key="movie.id" class="movie-tile">
        <v-layout @click.stop="dialog = true">
          <v-flex md10 sm7 offset-sm1>
            <v-card>
              <v-card-media :src="movie.url" height="220px">
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
          <v-spacer></v-spacer>
          <v-btn icon dark @click.native="dialog = false">
            <v-icon color="red" >close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-layout row flex>
          <v-flex mb5 sm4>
            <v-card-media class="v-card" height="630px" src='http://fr.web.img4.acsta.net/r_1280_720/pictures/17/05/09/15/47/313876.jpg'></v-card-media>
          </v-flex>
          <v-flex flex mb5 sm7>
            <h1>Les Patriotes - L'histoire Vrai</h1>
            <p class="titreAuteur">par Leroy Jenkins, Françoise Hardy et Danny Boon - Marvel Studio</p>
            <v-spaccer></v-spaccer>
            <p class="description">Depuis déjà plusieurs générations, la musique est bannie dans la famille de Miguel. Un vrai déchirement pour le jeune garçon dont le rêve ultime est de devenir un musicien aussi accompli que son idole, Ernesto de la Cruz. Bien décidé à prouver son talent, Miguel, par un étrange concours de circonstances, se retrouve propulsé dans un endroit aussi étonnant que coloré : le Pays des Morts. Là, il se lie d’amitié avec Hector, un gentil garçon mais un peu filou sur les bords. Ensemble, ils vont accomplir un voyage extraordinaire qui leur révèlera la véritable histoire qui se cache derrière celle de la famille de Miguel…</p>
            <v-spaccer></v-spaccer>
            <h3 class="acteur" align-left>Acteurs</h3>
            <v-spaccer></v-spaccer>
            <v-layout row flex v-if="movies">
              <v-flex flex md1></v-flex>
              <v-flex md12 v-for="actor in actors" :key="actor.id">
                <v-layout class="movieCard">
                  <v-flex sm8 offset-sm2>
                    <v-card>
                      <v-card-media :src="actor.url" height="200px">
                      </v-card-media>
                      </v-card>
                      <v-card-title>{{ actor.name }}</v-card-title>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-btn flat class="text"><v-icon class="like" color="red">favorite_border</v-icon></v-btn>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
    </div>
</template>

<script>
export default {
  name: 'MovieList',
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
    ],

    actors: [{
      id: 1,
      name: 'Leeroy Jenkins',
      url: 'https://pm1.narvii.com/6789/5104a0e41783d490b1e08a5d1cdbaeaf6b98b730v2_128.jpg'
    }, {
      id: 2,
      name: 'Leeroy Jenkins',
      url: 'https://pm1.narvii.com/6789/5104a0e41783d490b1e08a5d1cdbaeaf6b98b730v2_128.jpg'
    }, {
      id: 3,
      name: 'Leeroy Jenkins',
      url: 'https://pm1.narvii.com/6789/5104a0e41783d490b1e08a5d1cdbaeaf6b98b730v2_128.jpg'
    }, {
      id: 4,
      name: 'Leeroy Jenkins',
      url: 'https://pm1.narvii.com/6789/5104a0e41783d490b1e08a5d1cdbaeaf6b98b730v2_128.jpg'
    }
    ]
  })
}
</script>

<style>

.v-card
{
  margin-top: 2px;
}
h1{
  text-align: justify;
  padding-left: 50px;
  padding-top: 50px;
}
.titreAuteur{
  text-align: justify;
  padding-left: 50px;
  font-style: italic;
}
.acteur{
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: justify;
  padding-left: 50px;
}
.text{
  margin-top: 50px;
  font-size: 20px;
}
.like{
  transition-duration: .2s;
}
.like:hover{
  transform: scale(1.2);
  transition-duration: .2s;
}
.description{
  text-align: justify;
  padding-left: 50px;
  margin-top: 50px;
}
</style>
