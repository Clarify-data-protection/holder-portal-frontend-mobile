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
        <company-card @click="handleRedirect" :company="company" />
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

  methods: {
    handleRedirect(company) {
      this.$router.push({ name: 'companyForm', params: { company } })
    }
  },

  data() {
    return {
      companies: [
        { name: 'Disney', logo, id: 1 },
        { name: 'Disney', logo, id: 2 },
        { name: 'Disney', logo, id: 3 },
        { name: 'Disney', logo, id: 4 }
      ]
    }
  }
}
</script>
