<template>
  <div class="v-application--wrap new-note">
    <v-app-bar color="primary" dark fixed>
      <v-btn icon @click="saveNote(true)">
        <v-icon>check</v-icon>
      </v-btn>
      <v-toolbar-title> {{ note ? 'Edit' : 'New' }} Note </v-toolbar-title>
      <v-spacer></v-spacer>

      <input id="attach" ref="attachFile" type="file" name="attach" class="d-none" />

      <v-menu transition="scale-transition" left offset-x>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>attach_file</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-subheader>Attach a file</v-subheader>
          <v-list-item @click="attachImage">
            <v-list-item-icon class="mr-2">
              <v-icon>image</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Image</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu transition="scale-transition" left offset-x>
        <template #activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>color_lens</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-subheader>COLORS</v-subheader>
          <v-list-item v-for="(c, index) in colors" :key="index" @click="color = c">
            <v-list-item-avatar :class="'lt-' + c" class="mr-2"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>
                {{ c }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main :class="'lt-' + color">
      <div id="text-editor" ref="textEditor" autofocus></div>
    </v-main>
    <v-snackbar v-model="alertSave" top right timeout="2000" color="secondary">
      Note Saved
    </v-snackbar>
  </div>
</template>

<script>
import Squire from '@superhuman/squire-rte'
import Note from '~/model/note'

export default {
  name: 'NoteEditPage',
  data() {
    return {
      editor: null,
      color: this.$store.state.settings.selecteds.defaultColor,
      note: null,
      timerId: null,
      alertSave: false,
    }
  },
  computed: {
    colors() {
      return this.$store.state.colors
    },
  },
  mounted() {
    this.editor = new Squire(this.$refs.textEditor)
    this.$refs.attachFile.addEventListener('change', () => {
      const files = this.$refs.attachFile.files
      if (files.length === 0) return
      if (files[0].type.indexOf('image/') === 0) this.openImage(files[0])
    })

    const noteId = this.$route.params.id || 'new'
    if (noteId !== 'new') {
      this.note = this.$store.getters['notes/noteById'](Number(this.$route.params.id))
      this.editor.setHTML(this.note.content)
      this.color = this.note.color
    }

    // Autosave settings
    const autosaveTime = this.$store.getters['settings/autosaveInMillis']
    if (autosaveTime) {
      this.startAutosave(autosaveTime)
    }
  },
  beforeDestroy() {
    this.stopAutoSave()
  },
  methods: {
    attachImage() {
      document.getElementById('attach').click()
    },
    openImage(file) {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        const result = reader.result
        this.editor.insertHTML(`<img src="${result}" />`)
      }
    },
    autosave() {
      this.saveNote()
      this.alertSave = true
    },
    startAutosave(time) {
      this.timerId = setInterval(this.autosave, time)
    },
    stopAutoSave() {
      clearInterval(this.timerId)
    },
    saveNote(back = false) {
      const note = new Note(this.editor.getHTML())
      note.color = this.color
      if (this.note) {
        note.id = this.note.id
        if (Note.textContent(note).trim() !== '') this.$store.commit('notes/editNote', note)
        else this.$store.commit('notes/deleteNote', note.id)
      } else if (Note.textContent(note).trim() !== '') {
        this.$store.commit('notes/saveNote', note)
        this.note = note
      }
      if (back) this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss">
.new-note {
  .v-toolbar {
    flex-grow: 0;
  }
  .v-main {
    background-color: white;
    padding: 72px 16px 16px 16px !important;

    &.lt-purple {
      background-color: $lt-purple;
    }
    &.lt-yellow {
      background-color: $lt-yellow;
    }
    &.lt-green {
      background-color: $lt-green;
    }
    &.lt-brown {
      background-color: $lt-brown;
    }
    &.lt-red {
      background-color: $lt-red;
    }
    &.lt-blue {
      background-color: $lt-blue;
    }
  }
  .v-avatar {
    border: 1px solid black;
  }
  #text-editor {
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
.v-avatar {
  border: 1px solid $lt-purple;

  &.lt-purple {
    background-color: $lt-purple;
  }
  &.lt-yellow {
    background-color: $lt-yellow;
  }
  &.lt-green {
    background-color: $lt-green;
  }
  &.lt-brown {
    background-color: $lt-brown;
  }
  &.lt-red {
    background-color: $lt-red;
  }
  &.lt-blue {
    background-color: $lt-blue;
  }
}
</style>
