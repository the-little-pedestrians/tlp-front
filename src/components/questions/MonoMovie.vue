<template>
    <div class="monoMovie">
        <div class="container-monoMovie">
            <v-layout>
                <v-flex sm4 offset-sm4>
                <v-card class="monoMovie">
                    <v-card-media contain=true height="400px" :src="movie.url"></v-card-media>
                    <v-card-actions>
                        <v-flex md4 align-center flexbox>
                            <v-btn flat color="orange"><v-icon>thumb_down</v-icon></v-btn>
                        </v-flex>
                        <v-spacer></v-spacer>
                        <v-flex md4 align-center flexbox>
                            <v-btn flat color="red"><v-icon>favorite</v-icon></v-btn>
                        </v-flex>
                    </v-card-actions>
                </v-card>
                </v-flex>
            </v-layout>
        </div>
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
  }),

  props: [
    'movie'
  ]
}
</script>

<style scoped>
.monoMovie{
  padding-top: 10px;
  border-radius: 6px;
}
</style>
