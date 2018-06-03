<template>
  <div class="login-page">
    <transition name="loginslide">
      <!-- <div v-if="!isLoggedIn" class="login-container"> -->
      <div class="login-container">
        <div class="title">
          <h1>
            <span class="s-letter">L</span>es <span class="s-letter">P</span>etits <span class="s-letter">P</span>édestres<br>
            <span class="s-letter">D</span>ont <span class="s-letter">U</span>n <span class="s-letter">A</span>u <span class="s-letter">L</span>ion
          </h1>
        </div>
        <v-layout class="form-login" row wrap>
          <v-flex xs12 class="email">
            <v-text-field
              @keyup.enter="logIn"
              id="email"
              v-model="email"
              name="email-input"
              label="Email"
              :hide-details="true"
              color="primary"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 class="password">
            <v-text-field
              @keyup.enter="logIn"
              id="password"
              name="password-input"
              v-model="password"
              label="Password"
              :append-icon="passtype ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (passtype = !passtype)"
              :type="passtype ? 'password' : 'text'"
              :hide-details="true"
              color="primary"
            ></v-text-field>
          </v-flex>
        </v-layout>
        <div v-if="loginError" class="login-error">
          {{ loginError }}
        </div>
        <v-layout row wrap class="login-button-container">
          <v-flex xs6>
            <v-btn
              class="login-button bordered"
              flat
              color="white"
              dark
            >Password lost ?</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn
              class="login-button"
              color="accent primary--text"
              dark
              @click.stop="logIn"
            >Login</v-btn>
          </v-flex>
        </v-layout>
      </div>
    </transition>
  </div>
</template>

<script>
import { LOGIN } from '@/queries'
import { apolloClient } from '@/main'

export default {
  name: 'Login',

  data: () => ({
    loginError: null,
    email: '',
    password: '',
    passtype: true
  }),

  methods: {
    async logIn () {
      if (!this.email) {
        this.loginError = 'The Email field is required.'
        return
      }
      if (!this.password) {
        this.loginError = 'The Password field is required.'
        return
      }
      // eslint-disable-next-line
      if (!this.email.match(/^([\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+\.)*[\w\!\#$\%\&\'\*\+\-\/\=\?\^\`{\|\}\~]+@((((([a-z0-9]{1}[a-z0-9\-]{0,62}[a-z0-9]{1})|[a-z])\.)+[a-z]{2,6})|(\d{1,3}\.){3}\d{1,3}(\:\d{1,5})?)$/i)) {
        this.loginError = `The Email doesn't look valid.`
        return
      }
      this.loginError = null

      try {
        const response = await apolloClient.query({
          query: LOGIN,
          variables: {
            email: this.email,
            password: this.password
          }
        })
        if (!response.data || !response.data.logIn || !response.data.logIn.token) {
          console.error('Invalid username or password')
          throw new Error(JSON.stringify(response))
        }
        window.localStorage.setItem('token', response.data.logIn.token)
        window.localStorage.setItem('userId', response.data.logIn._id)
        this.router.push({
          path: '/'
        })
        return
      } catch (e) {
        console.error('Login failed:', e)
        this.loginError = 'Connection error!\nInvalid email or password.'
      }
    }
  }
}
</script>

<style scoped>
.login-page{
  background-image: url("../../assets/background.jpg");
  background-size: cover;
  height: 100%;
}
.login-container{
  background: #333;
  height: 100%;
  width: 40%;
  position: relative;
  left: 0%;
}
.login-container::before{
  content: close-quote;
  height: 100%;
  width: 50%;
  position: absolute;
  margin-left: 30%;
  -webkit-transform: skew(13deg);
  -moz-transform: skew(20deg);
  -o-transform: skew(20deg);
  background: #333;
  box-shadow:14px 0px 20px -10px #0000008f;
  left: 45%;
}
.form-login{
  width: 60%;
  margin-left: 20%;
  position: relative;
  border: 1px solid #ddd;
  border-radius: 4px;
}
.form-login .email, .form-login .firstname, .form-login .lastname {
  padding: 10px;
}
.form-login .password {
  padding: 10px;
  border-top: 1px solid #ddd;
}
.title{
  justify-content: center;
  position: relative;
  /* color: #333; */
  padding-top: 20%;
  padding-bottom: 20%;
}
.title .s-letter{
  color: #C52B2B;
}
.login-button-container{
  position: relative;
  align-items: center;
  margin-left: 20%;
  padding-top: 15%;
  width: 60%;
  justify-content: flex-end;
}
.login-button-container .login-button{
  font-weight: 900;
}
.loginslide-enter-active {
  animation: loginslide 1.5s;
}
.loginslide-leave-active {
  animation: loginslide 1.5s reverse;
}
@keyframes loginslide {
  from {left:-60%;}
  to {left: 0%;}
}
.fade-enter-active {
  animation: fade 3s;
}
.fade-leave-active {
  animation: fade 3s reverse;
}
@keyframes fade {
  from { opacity: 0 }
}
.login-error {
  top: 50px;
  position: relative;
  color: #ff5252;
  font-weight: 600;
}
</style>
