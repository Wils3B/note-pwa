<template>
  <v-card class="note-card">
    <v-img
      v-if="note.hasImage()"
      :src="note.getFirstImage()"
      height="64px"
    ></v-img>
    <v-card-text>
      {{ note.content }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
