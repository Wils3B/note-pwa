<template>
  <div class="v-application--wrap search">
    <v-app-bar color="primary" dark fixed>
      <v-btn @click="$router.go(-1)" icon class="mr-4">
        <v-icon>arrow_back</v-icon>
      </v-btn>

      <v-text-field
        hide-details
        prepend-icon="search"
        single-line
        autofocus
        clearable
        type="search"
        placeholder="Search here"
      ></v-text-field>

      <v-btn icon>
        <v-icon>clear</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      App search page.
      <app-plus-btn />
    </v-content>
  </div>
</template>

<style lang="scss">
.search {
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
