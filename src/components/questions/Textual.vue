<template>
  <div>
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

</style>
