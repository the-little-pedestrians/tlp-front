<template>
  <div class="register-page">
    <div class="register-container">
    <div class="title">
      <h1>Now that we know you better, fill this in so we can recommand awesome movies!</h1>
    </div>
    <v-layout class="form-register" row wrap>
      <v-flex xs12 class="email">
        <v-text-field
          @keyup.enter="register"
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
          @keyup.enter="register"
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
    <v-btn
      class="login-button"
      color="accent"
      dark
      @click.stop="register"
    >Register</v-btn>
  </div>
  </div>
</template>

<script>
import { apolloClient } from '@/main'
import { REGISTER } from '@/mutations'

export default {
  name: 'Login',

  data: () => ({
    email: '',
    password: '',
    registerError: null,
    passtype: true
  }),

  methods: {
    async register () {
      this.registerError = null
      try {
        const response = await apolloClient.mutate({
          mutation: REGISTER,
          variables: {
            email: this.email,
            password: this.password,
            age: this.age,
            gender: this.gender
          }
        })
        if (!response || !response.data || !response.data.addUser || !response.data.addUser._id) {
          throw new Error('Error registering')
        }
        window.localStorage.setItem('token', response.data.addUser.token)
        window.localStorage.setItem('userId', response.data.addUser._id)
        this.router.push({
          path: '/'
        })
      } catch (e) {
        console.error(e)
        this.registerError = e.message
      }
    }
  }
}
</script>

<style scoped>
.register-page{
  /* background-image: url("../../assets/background.jpg"); */
  /* background-size: cover; */
  background: #333;
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
.form-register{
  width: 40%;
  margin-left: 30%;
  position: relative;
  border-radius: 4px;
  margin-top: 50px;
  margin-bottom: 50px;
}
.form-register .email, .form-register .firstname, .form-register .lastname {
  padding: 10px;
}
.form-register .password {
  padding: 10px;
}
.title{
  justify-content: center;
  position: relative;
  /* color: #333; */
  /* padding-top: 20%; */
  /* padding-bottom: 20%; */
}
.title .s-letter{
  color: #C52B2B;
}
.login-button-container{
  position: relative;
  align-items: center;
  margin-left: 20%;
  /* padding-top: 15%; */
  width: 60%;
  justify-content: flex-end;
}
.login-button-container .login-button{
  font-weight: 900;
}
.login-error {
  top: 50px;
  position: relative;
  color: #ff5252;
  font-weight: 600;
}

.register-container{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  opacity: .95;
  padding-top: 150px;
  padding-bottom: 150px;
}
</style>
