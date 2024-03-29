<template>
  <v-card :class="'lt-' + note.color" :to="`/note-detail/${note.id}`" class="note-card">
    <v-img v-if="firstImage" :src="firstImage" height="100px"></v-img>
    <v-card-text class="main-text">
      <p v-text="noteText" />
    </v-card-text>
    <v-spacer />
    <v-card-text class="footer-text">
      <span>
        {{ modifiedDate }}
      </span>
      <v-icon v-if="note.voices.length" size="16">mic</v-icon>
    </v-card-text>
  </v-card>
</template>

<script>
import Note from '~/model/note'

export default {
  name: 'NoteCard',
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  computed: {
    noteText() {
      if (!this.note.id || !this.note.content) return ''
      let str = Note.textContent(this.note)
      str = str[0].toUpperCase() + str.slice(1)
      if (Note.hasImage(this.note) && str.length > 22) return `${str.slice(0, 18)} ...`
      else if (!Note.hasImage(this.note) && str.length > 95) return `${str.slice(0, 92)} ...`
      return str
    },
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
    firstImage() {
      if (Note.hasImage(this.note)) return Note.getFirstImage(this.note)
      return undefined
    },
  },
}
</script>

<style lang="scss">
.note-card.v-card {
  height: 100%;
  max-height: 160px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

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

  .v-card__text {
    padding: 8px 8px 2px 8px;

    &.main-text > p {
      height: 100%;
      max-height: 100%;
      margin: 0;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-bottom: 0px;
      line-height: 1.4;
    }

    &.footer-text {
      font-size: 12px;
      padding-top: 2px;
      display: flex;
      justify-content: space-between;
      font-weight: 700;
    }
  }
}
</style>
