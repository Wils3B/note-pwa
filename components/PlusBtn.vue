<template>
  <v-btn fixed dark fab color="primary" class="plus-btn" to="/edit-note/new">
    <v-icon>add</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'PlusButton'
}
</script>

<style scoped>
.plus-btn {
  bottom: 16px;
  right: 16px;
}
</style>
