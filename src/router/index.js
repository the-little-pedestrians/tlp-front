import Vue from 'vue'
import Router from 'vue-router'

import Question from '@/components/questions/Question'
import MonoMovie from '@/components/questions/MonoMovie'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'
import recommandation from '@/components/movies/recommandation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      name: 'Question',
      component: Question
    },
    {
      path: '/done',
      name: 'Register',
      component: Register
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
      path: '/recommandation',
      name: 'recommandation',
      component: recommandation
    }
  ]
})
