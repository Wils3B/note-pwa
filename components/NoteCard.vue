<template>
  <v-card
    :class="'lt-' + note.color"
    :to="`/note-detail/${note.id}`"
    class="note-card"
  >
    <v-img
      v-if="note && note.hasImage"
      :src="note.getFirstImage()"
      height="100px"
    ></v-img>
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
  props: {
    note: {
      type: Object,
      default() {
        return new Note('new note')
      }
    }
  },
  computed: {
    noteText() {
      const str = this.note.textContent
      if (this.note.hasImage && str.length > 22)
        return `${str.slice(0, 18)} ...`
      else if (!this.note.hasImage && str.length > 95)
        return `${str.slice(0, 92)} ...`
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
    }
  }
}
</script>

<style lang="scss">
.note-card {
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
      margin: 0;
      text-overflow: ellipsis;
      padding-bottom: 0px;
    }

    &.footer-text {
      font-size: 12px;
      padding-top: 2px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
