<template>
  <v-bottom-navigation
    :value="currentPage"
    @change="handleChangePage"
    grow
    fixed
    background-color="primary"
    mandatory
    min-height="60"
    max-height="60"
  >
    <v-btn elevation="0">
      <span>Descubra</span>
      <v-icon>mdi-compass-outline</v-icon>
    </v-btn>

    <v-btn elevation="0">
      <span>Home</span>
      <v-icon>mdi-home-outline</v-icon>
    </v-btn>

    <v-btn elevation="0">
      <span>Vazamentos</span>
      <v-icon>mdi-incognito</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ currentPage: 1 }),

  methods: {
    handleChangePage(val) {
      const pages = {
        0: 'home',
        1: 'home',
        2: 'leaks'
      }

      this.$router.push(pages[val] || pages[0])

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
</style>
