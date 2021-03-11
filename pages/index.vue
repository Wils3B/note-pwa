<template>
  <div class="v-application--wrap home">
    <v-app-bar color="primary" dark fixed>
      <v-toolbar-title> Note App </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/search">
        <v-icon>search</v-icon>
      </v-btn>

      <v-menu transition="scale-transition" left offset-x>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
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

      <v-menu transition="scale-transition" left offset-x>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>more_vert</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/settings">
            <v-list-item-icon class="mr-2">
              <v-icon>settings</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Settings</v-list-item-title>
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

<script>
import AppPlusBtn from '~/components/PlusBtn.vue'
import AppNoteList from '~/components/NotesList.vue'
import AppNoteListColor from '~/components/NotesListColor.vue'

export default {
  name: 'HomePage',
  components: {
    AppPlusBtn,
    AppNoteList,
    AppNoteListColor,
  },
  computed: {
    notes() {
      return this.$store.state.notes.notes
    },
    sortType() {
      return this.$store.state.settings.selecteds.sortType
    },
  },
  methods: {
    sortByDate() {
      this.$store.commit('settings/changeSortType', 'date')
    },
    sortByColor() {
      this.$store.commit('settings/changeSortType', 'color')
    },
  },
}
</script>

<style lang="scss">
.home {
  .v-toolbar {
    flex-grow: 0;
  }
  .v-content {
    background-color: $light-grey;
    padding: 84px 16px 16px 16px !important;
  }
}
</style>
