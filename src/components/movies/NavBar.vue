<template>
  <v-toolbar class="nav">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title><span class="s-letter">L</span>es <span class="s-letter">P</span>etits <span class="s-letter">P</span>édestres</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn color="error" flat>Log out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.nav{
    position: relative;
    margin-bottom: 15px;
}
.s-letter{
  color: #C52B2B;
}
</style>
