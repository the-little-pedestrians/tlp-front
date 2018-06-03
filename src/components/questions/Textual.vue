<template>
  <div class="textual">
    <v-layout row flex style="align-items: center">
      <v-flex xs10>
        <v-text-field autofocus :label="label" v-model="value" @keyup.enter="$emit('validate', value)">
        </v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn icon flat @click="$emit('validate', value)">
          <v-icon>
            done
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Textual',
  props: ['label', 'value'],
  data: () => ({
    val: ''
  }),
  created () {
    this.val = this.value
  }
}
</script>

<style scoped>
  .textual {
    width: 400px;
    margin: auto;
  }
</style>
