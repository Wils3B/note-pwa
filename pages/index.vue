<template>
  <div class="v-application--wrap home">
    <v-app-bar color="primary" dark fixed>
      <v-toolbar-title>
        Note App
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/search">
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>sort</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <app-note-list :notes="notes" />
      <app-note-list :notes="notes" />

      <app-plus-btn />
    </v-content>
  </div>
</template>

<style lang="scss">
.home {
  .v-toolbar {
    flex-grow: 0;
  }
  .v-content {
    background-color: $light-grey;
    padding: 64px 16px 0px 16px !important;
  }
}
</style>

<script>
import AppPlusBtn from '~/components/PlusBtn.vue'
import AppNoteList from '~/components/NotesList.vue'

export default {
  components: {
    AppPlusBtn,
    AppNoteList
  },
  computed: {
    notes() {
      return this.$store.state.notes.notes
    }
  }
}
</script>
