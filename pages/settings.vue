<template>
  <div class="v-application--wrap settings">
    <v-app-bar color="primary" dark fixed>
      <v-btn @click="storeSettings" icon>
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
      <v-select
        :items="$store.state.colors"
        v-model="defaultColor"
        label="Default color"
        filled
      />
      <p class="version"><em>Note PWA</em>, Version 1.0.2, Date: 2020-03-06</p>
    </v-content>
  </div>
</template>

<script>
export default {
  name: 'SettingsPage',
  data() {
    return {
      sortType: this.$store.state.settings.selecteds.sortType,
      defaultColor: this.$store.state.settings.selecteds.defaultColor
    }
  },
  methods: {
    storeSettings() {
      this.$store.commit('settings/changeSortType', this.sortType)
      this.$store.commit('settings/changeDefaultColor', this.defaultColor)
      this.$router.go(-1)
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
    background-color: white;
    padding: 64px 16px 16px 16px !important;
  }
  .version {
    text-align: center;
    position: absolute;
    bottom: 0;
  }
}
</style>
