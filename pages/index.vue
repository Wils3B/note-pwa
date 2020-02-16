<template>
  <div class="v-application--wrap">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>
        Note App
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>sort</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content class="pa-4 pb-0">
      App.
      <app-plus-btn />
    </v-content>
  </div>
</template>

<style lang="scss">
.v-toolbar {
  flex-grow: 0;
}
.v-content {
  background-color: $light-grey;
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
