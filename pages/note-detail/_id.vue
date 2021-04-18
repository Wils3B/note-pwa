<template>
  <div class="v-application--wrap details">
    <v-app-bar color="primary" dark fixed>
      <v-btn icon @click="$router.go(-1)">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>
        {{ modifiedDate }}
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn :to="`/edit-note/${note.id}`" icon>
        <v-icon>edit</v-icon>
      </v-btn>

      <v-btn icon @click="onDelete">
        <v-icon>delete</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div id="text-note" v-html="note.content"></div>
    </v-main>
  </div>
</template>

<script>
import Note from '~/model/note'

export default {
  name: 'NoteDetailsPage',
  data() {
    return {
      note: new Note(),
    }
  },
  computed: {
    modifiedDate() {
      const date = new Date(this.note.modifiedAt)
      const now = new Date()
      if (
        date.getUTCDay() === now.getUTCDay() &&
        date.getUTCMonth() === now.getUTCMonth() &&
        date.getUTCFullYear() === now.getUTCFullYear()
      ) {
        return date.toTimeString().slice(0, 5)
      }
      return this.note.modifiedAt.slice(0, 10)
    },
  },
  mounted() {
    const note = this.$store.getters['notes/noteById'](Number(this.$route.params.id))
    if (note) this.note = note
    else this.$router.push('/')
  },
  methods: {
    onDelete() {
      this.$router.push('/')
      this.$store.commit('notes/deleteNote', this.note.id)
    },
  },
}
</script>

<style lang="scss">
.details {
  .v-toolbar {
    flex-grow: 0;
  }
  .v-main {
    background-color: $light-grey;
    padding: 72px 16px 0px 16px !important;
  }
  #text-note {
    height: 100%;

    &:focus {
      outline: none;
    }
    img {
      display: block;
      max-width: 100%;
    }
  }
}
</style>
