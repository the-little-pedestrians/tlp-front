import Vue from 'vue'
import Router from 'vue-router'

import Question from '@/components/questions/Question'
import Login from '@/components/auth/Login'
import MonoMovie from '@/components/questions/MonoMovie'
import MovieList from '@/components/movies/MovieList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Question',
      component: Question
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/MonoMovie',
      name: 'MonoMovie',
      component: MonoMovie
    },
    {
      path: '/MovieList',
      name: 'MovieList',
      component: MovieList
    }
  ]
})
