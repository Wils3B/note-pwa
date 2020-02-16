<template>
  <div class="v-application--wrap">
    <v-toolbar color="primary" dark>
      <v-btn icon>
        <v-icon>check</v-icon>
      </v-btn>
      <v-toolbar-title>
        New Note
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>attach_file</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>color_lens</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      New note
    </v-content>
  </div>
</template>

<style lang="scss">
.v-toolbar {
  flex-grow: 0;
}
.v-content {
  background-color: white;
}
</style>
