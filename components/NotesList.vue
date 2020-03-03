<template>
  <v-row class="note-list">
    <v-col
      v-for="n in notes"
      :key="n.id"
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
  name: 'NoteList',
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

<style lang="scss">
.note-list {
  margin-left: -8px;
  margin-right: -8px;

  .note-wrapper {
    padding: 8px;
  }
}
</style>
