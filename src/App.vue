<template>
  <v-app dark>
    <transition name="pageChange" mode="out-in">
      <v-content>
        <router-view></router-view>
      </v-content>
    </transition>
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

.pageChange-enter-active {
  animation: scaleUp .7s ease both;
}
.pageChange-leave-active {
  animation: fade .7s ease both;
}
@keyframes scaleUp {
  from { opacity: 0; transform: scale(1); }
  1% { opacity: 0; transform: scale(.8); }
  to { opacity: 1; transform: scale(1); }
}
@keyframes fade {
  to { opacity: 0; }
}

body {
  background: #333;
}
</style>
