<template>
  <div class="v-application--wrap results">
    <v-app-bar color="primary" dark fixed>
      <v-btn @click="$router.go(-1)" icon class="mr-4">
        <v-icon>arrow_back</v-icon>
      </v-btn>

      <v-toolbar-title>Search results</v-toolbar-title>
    </v-app-bar>

    <v-content>
      App search results page.
      <app-plus-btn />
    </v-content>
  </div>
</template>

<style lang="scss">
.results {
  .v-toolbar {
    flex-grow: 0;
  }
  .v-content {
    background-color: $light-grey;
    padding: 72px 16px 0px 16px !important;
  }
}
</style>

<script>
import AppPlusBtn from '~/components/PlusBtn.vue'

export default {
  components: {
    AppPlusBtn
  }
}
</script>
