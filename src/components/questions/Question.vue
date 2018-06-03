<template>
  <div v-if="question">
    <h1 class="title accent--text">{{ question.title }}</h1>
    <div class="question">
      <transition name="pageChange" mode="out-in">
        <Textual @validate="validateText" v-if="question.type === 'textual'" :label="question.label" :value="question.value"></Textual>
        <MultiMovies v-if="question.type === 'multi'" :movies="question.movies" @selected="likeMovie"></MultiMovies>
        <MonoMovie @like="likeMovie" @dislike="dislikeMovie" v-if="question.type === 'mono'" :movie="question.movie"></MonoMovie>
      </transition>
    </div>
    <div class="skip">
      <v-btn @click="skip" flat color="primary" class="bordered">Skip</v-btn>
    </div>
  </div>
</template>

<script>
import { apolloClient } from '@/main'
import MonoMovie from './MonoMovie'
import MultiMovies from './MultiMovies'
import Textual from './Textual'
import { INIT_MOVIES } from '@/queries'
import moment from 'moment'

export default {
  name: 'Question',
  components: {
    MonoMovie,
    MultiMovies,
    Textual
  },
  data: () => ({
    index: 0,
    movies: [],
    questions: []
  }),
  created () {
    this.getMovies()
  },
  methods: {
    likeMovie (id) {
      this.goNext()
    },
    dislikeMovie (id) {
      this.goNext()
    },
    validateText (value) {
      this.goNext()
    },
    skip () {
      this.goNext()
    },
    goNext () {
      if (this.index === this.questions.length - 1) {
        // this.index = 0
        this.$router.push('/done')
        return
      }
      this.index += 1
    },
    async getMovies () {
      const { data: { getInitMovies } } = await apolloClient.query({
        query: INIT_MOVIES
      })
      this.movies = getInitMovies.map(movie => ({
        url: `https://image.tmdb.org/t/p/w400${movie.poster_path}`,
        formattedDate: moment(movie.release_date).format('MM/YYYY'),
        ...movie
      }))
      this.questions = [
        {
          type: 'multi',
          title: 'Which movie do you prefer?',
          movies: this.movies.slice(0, 5)
        }, {
          type: 'mono',
          title: 'Do you like this movie?',
          movie: this.movies[5]
        }, {
          type: 'multi',
          title: 'Chose one of these movies',
          movies: this.movies.slice(6, 11)
        }, {
          type: 'mono',
          title: 'What about this one?',
          movie: this.movies[11]
        }, {
          type: 'textual',
          title: 'We have guessed your age!',
          label: 'Age',
          value: 25
        }
      ]
    }
  },
  computed: {
    question () {
      return this.questions[this.index]
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 3em !important;
}

.title {
  margin: 40px;
}

.question {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
}

.skip {
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 10%;
}

.pageChange-enter-active {
  animation: scaleUp .7s ease both;
}
.pageChange-leave-active {
  animation: fade .7s ease both;
}
@keyframes scaleUp {
  from { opacity: 0; transform: scale(1); }
  1% { opacity: 0; transform: scale(.8); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes fade {
  to { opacity: 0; }
}
</style>
