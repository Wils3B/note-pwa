<template>
  <div class="v-application--wrap search">
    <v-app-bar color="primary" dark fixed>
      <v-btn icon class="mr-4" @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>

      <v-text-field
        hide-details
        prepend-inner-icon="search"
        single-line
        autofocus
        clearable
        type="search"
        placeholder="Search here"
        clear-icon="clear"
        @input="onInput"
      />
    </v-app-bar>

    <v-main>
      <div v-show="results.length === 0" class="no-results">No resulsts</div>
      <div v-show="results.length !== 0">
        <h3>Search results ({{ results.length }})</h3>
        <app-notes-list :notes="results" />
      </div>
      <app-plus-btn />
    </v-main>
  </div>
</template>

<style lang="scss">
.search {
  .v-toolbar {
    flex-grow: 0;
  }
  .v-main {
    background-color: $light-grey;
    padding: 72px 16px 0px 16px !important;
  }
  .no-results {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

<script>
import AppPlusBtn from '~/components/PlusBtn.vue'
import AppNotesList from '~/components/NotesList.vue'

export default {
  name: 'SearchPage',
  components: {
    AppPlusBtn,
    AppNotesList,
  },
  data() {
    return {
      results: [],
    }
  },
  computed: {
    notes() {
      return this.$store.state.notes.notes
    },
  },
  methods: {
    onInput(event) {
      this.results = []
      if (event === '') return
      for (let i = 0, c = this.notes.length; i < c; i++) {
        if (this.notes[i].content.search(event) >= 0) this.results.push(this.notes[i])
      }
    },
  },
}
</script>
