<template>
  <div>
    <h1 class="title accent--text">{{ question.title }}</h1>
    <div class="question">
      <transition name="pageChange" mode="out-in">
        <Textual v-if="question.type === 'textual'" :label="question.label" :value="question.value"></Textual>
        <MultiMovies v-if="question.type === 'multi'" :movies="question.movies"></MultiMovies>
        <MonoMovie v-if="question.type === 'mono'" :movie="question.movie"></MonoMovie>
      </transition>
    </div>
    <div class="skip">
      <v-btn @click="skip" flat color="primary" class="bordered">Passer cette question</v-btn>
    </div>
  </div>
</template>

<script>
import MonoMovie from './MonoMovie'
import MultiMovies from './MultiMovies'
import Textual from './Textual'

export default {
  name: 'Question',
  components: {
    MonoMovie,
    MultiMovies,
    Textual
  },
  data: () => ({
    index: 0,
    questions: [
      {
        type: 'multi',
        title: 'Quel film préferrez-vous ?',
        movies: [
          {
            id: 1,
            title: 'Le Parrain',
            desc: 'Lorem Ipsum'
          }, {
            id: 2,
            title: 'Titanic',
            desc: 'Lorem Ipsum'
          }, {
            id: 3,
            title: 'Les Bronzés',
            desc: 'Lorem Ipsum'
          }, {
            id: 4,
            title: 'Avengers',
            desc: 'Lorem Ipsum'
          }, {
            id: 5,
            title: 'Star Wars',
            desc: 'Lorem Ipsum'
          }
        ]
      }, {
        type: 'mono',
        title: 'Aimez-vous ce film ?',
        movie: {
          id: 2,
          title: 'Titanic',
          desc: 'Lorem Ipsum'
        }
      }, {
        type: 'textual',
        title: 'A-t-on deviné votre âge ?',
        label: 'Age',
        value: 25
      }
    ]
  }),

  methods: {
    skip () {
      if (this.index === this.questions.length - 1) {
        this.index = 0
        return
      }

      this.index += 1
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
