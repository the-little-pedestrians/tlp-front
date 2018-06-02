<template>
  <v-app dark>
    <!-- <v-navigation-drawer app></v-navigation-drawer>
    <v-toolbar app></v-toolbar> -->
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- <v-footer app></v-footer> -->
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body, main.content, .main>.container {
  height: 100%;
}

#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ccc;
  height: 100%;
}

.bordered {
  border: 1px solid #ddd;
}
</style>
