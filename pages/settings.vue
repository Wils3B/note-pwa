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
      <v-select
        :items="$store.state.settings.groups.sortTypes"
        v-model="sortType"
        label="Default sort type"
        filled
      />
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      sortType: this.$store.state.settings.selecteds.sortType
    }
  }
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
