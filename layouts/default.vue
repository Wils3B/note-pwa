<template>
  <v-app id="app" :class="$store.state.settings.selecteds.appFont">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('notes/fetchAllNotes')
  }
}
</script>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: transform 0.5s;
  transform-origin: top right;
}
.page-enter,
.page-leave-active {
  transform: rotateZ(90deg) scale(0.1);
}

#app {
  background-color: #673ab7;
  background-image: url('/images/icons/icon-144x144.png');
  background-position: center center;
  background-repeat: no-repeat;

  &.Kalam {
    font-family: Kalam, sans-serif;
  }

  &.Amita {
    font-family: Amita, sans-serif;
  }

  &.Roboto {
    font-family: Roboto, sans-serif;
  }
}
</style>
