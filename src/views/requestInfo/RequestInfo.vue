<template>
  <v-col>
    <v-card>
      <v-card-title class="d-flex flex-column align-center">
        Ecommerce
      </v-card-title>
      <v-card-text style="display: flex; flex-direction: column; gap: 10px">
        <div class="d-flex flex-column">
          <div>
            <strong>Site: </strong>
          </div>
          <div class="d-flex flex-row align-center">
            <span>
              {{ request.url }}
            </span>
            <v-spacer></v-spacer>
            <v-btn small icon @click="">
              <v-icon size="20">
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </div>
        </div>

        <div class="d-flex flex-column">
          <div>
            <strong>Data: </strong>
          </div>
          <div class="d-flex flex-row align-center">
            <span>
              {{ request.formattedCreatedAt }}
            </span>
          </div>
        </div>

        <div class="d-flex flex-column">
          <div>
            <strong>Tipo: </strong>
          </div>
          <div class="d-flex flex-row align-center">
            <span>
              {{ request.typeDescription }}
            </span>
          </div>
        </div>

        <div class="d-flex flex-column">
          <div>
            <strong>Status: </strong>
          </div>
          <div class="d-flex flex-row align-center">
            <span>
              {{ request.statusDescription }}
            </span>
          </div>
        </div>

        <div class="d-flex flex-column">
          <div>
            <strong>Protocolo: </strong>
          </div>
          <div class="d-flex flex-row align-center">
            <span>
              {{ request.protocol }}
            </span>
            <v-spacer></v-spacer>

            <v-btn small icon @click="">
              <v-icon size="20">
                mdi-content-copy
              </v-icon>
            </v-btn>
          </div>
        </div>

        <v-col
          v-if="request.scannedData && request.scannedData.length > 0"
          class="mt-5"
        >
          <v-row>
            <h3>
              Dados encontrados
            </h3>
          </v-row>

          <v-row>
            <v-col>
              <strong>
                Tipo
              </strong>
            </v-col>

            <v-col>
              <strong>
                Valor
              </strong>
            </v-col>
          </v-row>

          <v-row v-for="data in request.scannedData" :key="data.id">
            <v-col class="py-1">
              <span v-for="type in data.scannedDataTypes" :key="type.type">
                {{ type.typeDescription }}
              </span>
            </v-col>

            <v-col class="py-1">
              {{ data.value }}
            </v-col>
          </v-row>
        </v-col>

        <v-btn
          class="mt-3"
          @click="downloadCertificate"
          color="primary"
          small
          :disabled="!request.certificate || !request.certificate.url"
        >
          <v-icon>
            mdi-download
          </v-icon>
          Baixar certificado
        </v-btn>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import RequestClient from '@/core/clients/request.client'

export default {
  async mounted() {
    this.request = await RequestClient.findOne(this.$route.query.requestId)
  },

  data() {
    return {
      request: {}
    }
  },

  methods: {
    downloadCertificate() {
      window.open(this.request.certificate.url)
    }
  }
}
</script>
