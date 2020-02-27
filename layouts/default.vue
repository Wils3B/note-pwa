<template>
  <v-app>
    <nuxt />
  </v-app>
</template>

<style lang="scss">
@import '~vuetify/src/styles/main.sass';

.page-enter-active,
.page-leave-active {
  transition: transform 0.4s;
  transform-origin: bottom right;
}
.page-enter,
.page-leave-active {
  transform: translateX(-100%);
}
</style>
