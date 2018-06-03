import Vue from 'vue'
import Router from 'vue-router'

import Question from '@/components/questions/Question'
import Login from '@/components/auth/Login'
import MonoMovie from '@/components/questions/MonoMovie'
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
