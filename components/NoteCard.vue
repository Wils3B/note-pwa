<template>
  <v-card class="note-card">
    <v-img
      v-if="note.hasImage()"
      :src="note.getFirstImage()"
      height="64px"
    ></v-img>
    <v-card-text class="main-text">
      <p v-text="note.content" />
    </v-card-text>
    <v-card-text class="footer-text">
      <span>
        {{ note.modifiedAt }}
      </span>
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

<style lang="scss">
.note-card {
  height: 100%;
  max-height: 170px;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .v-card__text {
    padding: 8px;

    &.main-text > p {
      height: 100;
      margin: 0;
      text-overflow: ellipsis;
      text-align: center;
    }
  }
}
</style>
