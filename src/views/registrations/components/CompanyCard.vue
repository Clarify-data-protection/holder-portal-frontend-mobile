<template>
  <v-card @click="handleClick" ripple elevation="1">
    <v-card-text class="d-flex flex-column align-center">
      <strong>{{ company.name }}</strong>
      <v-img :src="company.logo" max-width="50px" />
      <small>{{ company.url }}</small>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$emit('click', this.company)
    }
  },

  props: {
    company: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  font-size: 2.5vh;
}
</style>
