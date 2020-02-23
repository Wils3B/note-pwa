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

      <v-menu transition="scale-transition" left offset-x>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-icon>sort</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="sortByDate">
            <v-list-item-content>
              <v-list-item-title>Sort by date</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="sortByColor">
            <v-list-item-content>
              <v-list-item-title>Sort by color</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <app-note-list v-if="sortType === 'date'" :notes="notes" />
      <app-note-list-color v-else :notes="notes" />

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
import AppNoteListColor from '~/components/NotesListColor.vue'

export default {
  components: {
    AppPlusBtn,
    AppNoteList,
    AppNoteListColor
  },
  computed: {
    notes() {
      return this.$store.state.notes.notes
    },
    sortType() {
      return this.$store.state.settings.sortType
    }
  },
  methods: {
    sortByDate() {
      this.$store.commit('settings/changeSortType', 'date')
    },
    sortByColor() {
      this.$store.commit('settings/changeSortType', 'color')
    }
  }
}
</script>
