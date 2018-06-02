<template>
  <div class="login-page">
    <transition name="loginslide">
      <!-- <div v-if="!isLoggedIn" class="login-container"> -->
      <div class="login-container">
        <div class="title">
          <h1><span class="s-letter">L</span>es <span class="s-letter">P</span>etits <span class="s-letter">P</span>édestres</h1>
        </div>
        <v-layout class="form-login" row wrap>
          <v-flex xs12 class="email">
            <v-text-field
              id="email"
              v-model="email"
              name="email-input"
              label="Email"
              :hide-details="true"
              color="primary"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 class="password">
              <!-- @keyup.enter="logIn({ email, password})" -->
            <v-text-field
              id="password"
              name="password-input"
              v-model="password"
              label="Mot de passe"
              :append-icon="passtype ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (passtype = !passtype)"
              :type="passtype ? 'password' : 'text'"
              :hide-details="true"
              color="primary"
            ></v-text-field>
          </v-flex>
          <v-flex v-if="isRegistering" xs12 class="firstname">
            <v-text-field
              id="firstname"
              v-model="firstname"
              name="firstname-input"
              label="Prénom"
              :hide-details="true"
              color="primary"
            ></v-text-field>
          </v-flex>
          <v-flex v-if="isRegistering" xs12 class="lastname">
            <v-text-field
              id="lastname"
              name="lastname-input"
              v-model="lastname"
              label="Nom"
              :hide-details="true"
              color="primary"
            ></v-text-field>
              <!-- @keyup.enter="logIn({ email, lastname})" -->
          </v-flex>
        </v-layout>
        <!-- <div v-if="loginError" class="login-error">
          {{ loginError }}
        </div> -->
        <transition name="fade" mode="out-in">
          <v-layout v-if="isRegistering" row wrap class="login-button-container">
            <v-flex xs6>
              <v-btn
                flat
                class="login-button bordered"
                color="white"
                dark
                @click.stop="isRegistering = false"
              >Retour</v-btn>
            </v-flex>
            <v-flex xs6>
              <v-btn
                class="login-button"
                color="accent"
                dark
              >Valider</v-btn>
                <!-- @click.stop="register({ email, password, firstname, lastname })" -->
            </v-flex>
          </v-layout>
          <v-layout v-else row wrap class="login-button-container">
            <v-flex xs6>
              <v-btn
                class="login-button bordered"
                flat
                color="white"
                dark
                @click.stop="isRegistering = true"
              >S'enregister</v-btn>
            </v-flex>
            <v-flex xs6>
              <v-btn
                class="login-button"
                color="accent primary--text"
                dark
              >Se connecter</v-btn>
                <!-- @click.stop="logIn({ email, password })" -->
            </v-flex>
          </v-layout>
        </transition>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Login',

  data: () => ({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    passtype: true,
    isRegistering: false
  })
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
