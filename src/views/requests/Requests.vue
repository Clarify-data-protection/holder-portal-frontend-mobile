<template>
  <div class="d-flex flex-column">
    <v-col>
      <v-text-field
        outlined
        dense
        placeholder="Pesquise..."
        label="Pesquise..."
        hide-details="auto"
      />
    </v-col>
    <v-col v-if="requests.data.length > 0">
      <request-card
        class="mb-2"
        v-for="(request, index) in requests.data"
        :key="index"
        :request="request"
        @click="() => handleRedirect(request)"
      />
    </v-col>
    <v-col v-else>
      <span>
        Nenhuma Solicitação criada
      </span>
    </v-col>
  </div>
</template>

<script>
import RequestCard from './components/RequestCard.vue'

import RequestClient from '@/core/clients/request.client'

export default {
  components: {
    RequestCard
  },

  async mounted() {
    this.requests = await RequestClient.findAll()
  },

  methods: {
    handleRedirect(request) {
      this.$router.push({
        name: 'requestInfo',
        query: { requestId: request.id }
      })
    }
  },

  data() {
    return {
      requests: {
        data: []
      }
    }
  }
}
</script>
