<template>
  <v-row>
    <v-col
      v-for="(n, index) in notes"
      :key="index"
      cols="6"
      sm="4"
      md="3"
      lg="2"
      class="note-wrapper"
    >
      <app-note-card :note="n" />
    </v-col>
  </v-row>
</template>

<script>
import AppNoteCard from '~/components/NoteCard.vue'

export default {
  components: {
    AppNoteCard
  },
  props: {
    notes: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.note-wrapper {
  padding: 8px;
}
</style>
