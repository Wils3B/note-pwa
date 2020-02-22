<template>
  <div class="v-application--wrap details">
    <v-app-bar color="primary" dark fixed>
      <v-btn @click="$router.go(-1)" icon>
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>
        {{ modifiedDate }}
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>edit</v-icon>
      </v-btn>

      <v-btn @click="onDelete" icon>
        <v-icon>delete</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <div v-html="note.content"></div>
    </v-content>
  </div>
</template>

<script>
import Note from '~/model/note'

export default {
  data() {
    return {
      note: new Note()
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
    }
  },
  mounted() {
    this.note = this.$store.getters['notes/noteById'](
      Number(this.$route.params.id)
    )[0]
  },
  methods: {
    onDelete() {
      this.$router.push('/')
      this.$store.commit('notes/deleteNote', this.note.id)
    }
  }
}
</script>

<style lang="scss">
.details {
  .v-toolbar {
    flex-grow: 0;
  }
  .v-content {
    background-color: $light-grey;
    padding: 72px 16px 0px 16px !important;
  }
}
</style>
