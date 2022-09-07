<template>
  <v-card>
    <v-card-text class="d-flex flex-column align-center">
      <h2 class="mb-2">{{ company.name }}</h2>

      <v-img src="@/assets/images/misc/logoDisney.png" />
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
