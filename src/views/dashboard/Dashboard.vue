<template>
  <v-row>
    <v-col cols="12">
      <v-text-field
        outlined
        dense
        placeholder="Nome da empresa..."
        label="Nome da empresa..."
        hide-details
      />
    </v-col>

    <v-col
      v-for="(company, index) in companies"
      :key="index"
      class="px-1"
      cols="4"
    >
      <company-card :company="company" />
    </v-col>
  </v-row>
</template>

<script>
import CompanyCard from './CompanyCard.vue'

export default {
  components: {
    CompanyCard
  },

  data() {
    return {
      companies: [{ name: 'Disney' }]
    }
  }
}
</script>
