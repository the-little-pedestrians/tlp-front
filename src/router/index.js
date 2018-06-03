import Vue from 'vue'
import Router from 'vue-router'
import Question from '@/components/questions/Question'
import Recommandations from '@/components/movies/Recommandations'
import Login from '@/components/auth/Login'
import Register from '@/components/auth/Register'

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
      path: '/recommanded',
      name: 'Recommandations',
      component: Recommandations
    }
  ]
})
