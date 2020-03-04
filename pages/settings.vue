<template>
  <div class="v-application--wrap settings">
    <v-app-bar color="primary" dark fixed>
      <v-btn @click="$router.go(-1)" icon>
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>
        Settings
      </v-toolbar-title>
    </v-app-bar>

    <v-content>
      is the newest girl
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage'
}
</script>

<style lang="scss">
.settings {
  .v-toolbar {
    flex-grow: 0;
  }
  .v-content {
    background-color: $light-grey;
    padding: 64px 16px 16px 16px !important;
  }
}
</style>
