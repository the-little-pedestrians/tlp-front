<template>
  <div class="textual">
    <v-text-field :label="label" :value="value"></v-text-field>
  </div>
</template>

<script>
export default {
  name: 'Textual',
  props: ['label', 'value']
}
</script>

<style scoped>
  .textual {
    width: 300px;
    margin: auto;
  }
</style>
