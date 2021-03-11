<template>
  <div class="v-application--wrap settings">
    <v-app-bar color="primary" dark fixed>
      <v-btn icon @click="storeSettings">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title> Settings </v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-select
        v-model="sortType"
        :items="$store.state.settings.groups.sortTypes"
        label="Default sort type"
        filled
      />
      <v-select
        v-model="defaultColor"
        :items="$store.state.colors"
        label="Default color"
        filled
      />
      <v-select
        v-model="appFont"
        :items="$store.state.settings.groups.fonts"
        label="App. Font"
        filled
      />
      <v-select
        v-model="autosave"
        :items="$store.state.settings.groups.autosave"
        label="Autosave"
        filled
      />
      <v-spacer />
      <p class="version"><em>Note PWA</em>, Version 1.0.2, Date: 2020-03-06</p>
    </v-main>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      ...this.$store.state.settings.selecteds,
    }
  },
  methods: {
    storeSettings() {
      this.$store.commit('settings/changeSortType', this.sortType)
      this.$store.commit('settings/changeDefaultColor', this.defaultColor)
      this.$store.commit('settings/changeAppFont', this.appFont)
      this.$store.commit('settings/changeAutosave', this.autosave)
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss">
.settings {
  .v-toolbar {
    flex-grow: 0;
  }
  .v-main__wrap {
    background-color: white;
    padding: 72px 16px 16px 16px !important;
    display: flex;
    flex-direction: column;

    & > * {
      flex: 0;
    }
  }
}
</style>
