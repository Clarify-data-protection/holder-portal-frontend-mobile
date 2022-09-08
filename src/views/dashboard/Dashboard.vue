<template>
  <v-col>
    <v-row class="mb-3">
      <v-text-field
        outlined
        dense
        placeholder="Nome da empresa..."
        label="Nome da empresa..."
        hide-details="auto"
      />
    </v-row>

    <v-row>
      <v-col
        v-for="(company, index) in companies"
        :key="index"
        class="pa-1"
        cols="4"
      >
        <company-card :company="company" />
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import CompanyCard from './CompanyCard.vue'

import logo from '@/assets/images/misc/logoDisney.png'

export default {
  components: {
    CompanyCard
  },

  data() {
    return {
      companies: [
        { name: 'Disney', logo },
        { name: 'Disney', logo },
        { name: 'Disney', logo },
        { name: 'Disney', logo }
      ]
    }
  }
}
</script>
