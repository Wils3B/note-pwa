<template>
  <v-app light class="error-wrapper">
    <v-content>
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <v-btn to="/" color="primary">Homepage</v-btn>
    </v-content>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  }
}
</script>

<style lang="scss">
.error-wrapper {
  text-align: center;

  .v-content__wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $light-grey;
  }
}
</style>
