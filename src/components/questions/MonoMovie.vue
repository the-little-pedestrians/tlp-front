<template>
    <div class="monoMovie">
        <div class="container-monoMovie">
            <v-layout>
                <v-flex sm4 offset-sm4>
                    <v-card class="monoMovie">
                        <!-- <v-card-title>
                            <v-card-title class="title">{{ movie.title }}</v-card-title>
                        </v-card-title> -->
                        <v-card-media height="550px" :src="movie.url">
                        </v-card-media>
                        <v-card-actions class="actions">
                            <v-layout row flex style="align-items: center; height: 100%">
                                <v-flex xs4>
                                    <v-btn large icon class="bordered" @click="$emit('dislike', movie.id)" flat color="primary"><v-icon large>thumb_down</v-icon></v-btn>
                                </v-flex>
                                <v-flex xs4 offset-xs4>
                                    <v-btn large icon class="bordered bordered-red" @click="$emit('like', movie.id)" flat color="accent"><v-icon large>favorite</v-icon></v-btn>
                                </v-flex>
                            </v-layout>
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
.monoMovie {
  padding-top: 10px;
  border-radius: 6px;
}

.title {
    font-weight: 700;
}

.bordered-red {
    border-color: #C52B2B;
}

.actions {
    width: 100%;
    align-content: center;
    /* background: #ffffff85; */
}
</style>
