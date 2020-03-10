<template>
  <div class="note-list-color">
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="(el, index) of sorted" :key="index">
        <v-expansion-panel-header expand-icon="expand_more">
          {{ el.color }} ( {{ el.notes.length }} )
        </v-expansion-panel-header>
        <v-expansion-panel-content color="brown">
          <app-note-list
            :notes="el.notes"
            :sizes="{ cols: 12, sm: 6, md: 4, lg: 3, xl: 2 }"
          />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
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
  .v-expansion-panel-content__wrap {
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
</style>
