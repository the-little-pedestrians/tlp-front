import Vue from 'vue'
import Router from 'vue-router'

import Question from '@/components/questions/Question'
import Login from '@/components/auth/Login'

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
    }
  ]
})
