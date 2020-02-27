<template>
  <v-app id="app">
    <nuxt />
  </v-app>
</template>

<style lang="scss">
@import '~vuetify/src/styles/main.sass';

.page-enter-active,
.page-leave-active {
  transition: transform 0.4s;
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
}
</style>
