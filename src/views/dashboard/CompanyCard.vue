<template>
  <v-card ripple elevation="1">
    <v-card-text class="d-flex flex-column align-center">
      <h2 class="mb-2 mt-n2">{{ company.name }}</h2>

      <v-img :src="company.logo" />
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    company: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
