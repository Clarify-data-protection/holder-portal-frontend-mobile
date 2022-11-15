<template>
  <div>
    <v-col>
      <v-text-field
        outlined
        dense
        placeholder="Pesquise..."
        label="Pesquise..."
        hide-details="auto"
      />
    </v-col>

    <div class="d-flex">
      <v-col cols="12" v-for="(company, index) in companies" :key="index">
        <company-card @click="handleRedirect" :company="company" />
      </v-col>
    </div>
  </div>
</template>

<script>
import CompanyCard from './components/CompanyCard.vue'

import logo from '@/assets/images/logos/bitbank.png'

export default {
  components: {
    CompanyCard
  },

  methods: {
    handleRedirect(company) {
      this.$router.push({
        name: 'companyForm',
        query: { companyId: company.id }
      })
    }
  },

  data() {
    return {
      companies: [{ name: 'Ecommerce', logo, id: 1, url: 'www.ecommerce.com' }]
    }
  }
}
</script>
