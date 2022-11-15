<template>
  <v-bottom-navigation
    :value="currentPage"
    @change="handleChangePage"
    grow
    fixed
    background-color="primary"
    mandatory
    min-height="50"
    max-height="50"
  >
    <v-btn elevation="0">
      <span>Home</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn elevation="0">
      <span>Solitações</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn elevation="0">
      <span>Vazamentos</span>
      <v-icon>mdi-incognito</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    currentPage: 1,

    pages: {
      0: 'registrations',
      1: 'requests',
      2: 'leaks'
    }
  }),

  watch: {
    $route: {
      handler: function(route) {
        const found = Object.entries(this.pages).find(
          ([_, name]) => name === route.name
        )

        if (found) this.currentPage = +found[0]
      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    handleChangePage(val) {
      this.$router.push(this.pages[val] || this.pages[0])

      return
    }
  }
}
</script>

<style lang="scss" scoped>
.v-bottom-navigation .v-btn {
  min-height: 100% !important;
  background-color: var(--v-primary-color) !important;
  color: white !important;
}

.theme--light.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: #a7a7a7 !important;
}

.v-btn > .v-btn__content .v-icon {
  color: #fff !important;
}

.v-btn__content span {
  color: #fff !important;
}
</style>
