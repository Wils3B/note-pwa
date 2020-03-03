<template>
  <div class="note-list-color">
    <section v-for="(el, index) of sorted" :key="index">
      <h3>{{ el.color }} ( {{ el.notes.length }} )</h3>
      <app-note-list :notes="el.notes" />
    </section>
  </div>
</template>

<script>
import AppNoteList from '~/components/NotesList.vue'

export default {
  name: 'NoteListColor',
  components: {
    AppNoteList
  },
  props: {
    notes: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sorted() {
      if (this.notes.length === 0) return []
      const colors = this.$store.state.colors
      const values = colors
        .map((color) => {
          return {
            color,
            notes: this.notes.filter((note) => note.color === color)
          }
        })
        .filter((el) => el.notes.length !== 0)
        .sort((a, b) => b.notes.length - a.notes.length)
      return values
    }
  }
}
</script>

<style lang="scss">
.note-list-color {
  section {
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid gray;
  }
}
</style>
