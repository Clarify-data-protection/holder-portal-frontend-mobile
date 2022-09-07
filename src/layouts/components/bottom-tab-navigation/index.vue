<template>
  <v-bottom-navigation
    v-model="value"
    grow
    fixed
    background-color="primary"
    mandatory
    min-height="45"
    max-height="45"
  >
    <v-btn elevation="0">
      <v-icon>mdi-television-play</v-icon>
    </v-btn>

    <v-btn elevation="0">
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn elevation="0">
      <v-icon>mdi-book</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({ value: 0 })
}
</script>

<style lang="scss" scoped>
.v-bottom-navigation .v-btn {
  min-height: 100% !important;
  background-color: var(--v-primary-color) !important;
  color: white !important;
}
</style>
