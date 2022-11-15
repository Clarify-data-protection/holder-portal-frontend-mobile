<template>
  <v-col>
    <v-card>
      <v-card-title class="d-flex flex-column align-center">
        <strong>
          {{ company.name }}
        </strong>
        <small class="mt-1">
          {{ company.url }}
        </small>
        <v-img class="mt-1" contain :src="company.logo" max-width="100" />
      </v-card-title>
      <v-col style="display:flex; flex-direction: column; gap: 10px">
        <v-text-field
          v-model="request.name"
          outlined
          dense
          label="Nome Completo *"
          placeholder="Nome Completo *"
          :rules="[v => !!v || 'Obrigatório']"
          hide-details
        />

        <v-text-field
          v-model="request.email"
          outlined
          dense
          label="E-mail *"
          placeholder="E-mail *"
          :rules="[v => !!v || 'Obrigatório']"
          hide-details
        />

        <v-text-field
          v-model="request.cpf"
          outlined
          dense
          label="CPF *"
          placeholder="CPF *"
          :rules="[v => !!v || 'Obrigatório']"
          hide-details
        />

        <v-select
          v-model="request.type"
          outlined
          dense
          :items="types"
          label="Tipo *"
          placeholder="Tipo *"
          :rules="[v => !!v || 'Obrigatório']"
          hide-details
        />

        <v-btn @click="handleClick" color="primary">
          Enviar
        </v-btn>
      </v-col>
    </v-card>

    <v-dialog v-model="loading" persistent width="300">
      <v-card color="primary" dark>
        <v-card-text class="pa-2">
          <v-progress-linear indeterminate color="white" />
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-snackbar :timeout="4000" v-model="snackbar" color="success">
      <span>
        Solicitação aberta com sucesso
      </span>
      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar = false">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-col>
</template>

<script>
import logo from '@/assets/images/logos/bitbank.png'

import RequestClient from '../../core/clients/request.client'

export default {
  data() {
    return {
      snackbar: false,
      loading: false,
      request: {
        name: '',
        email: '',
        cpf: '',
        type: ''
      },
      company: { name: 'Ecommerce', logo, id: 1, url: 'www.ecommerce.com' },
      types: [
        {
          text: 'Revogação dos dados',
          value: 1
        },
        {
          text: 'Consulta dos dados',
          value: 2
        }
      ]
    }
  },

  methods: {
    async handleClick() {
      this.loading = true
      try {
        await RequestClient.createOne(this.request)
      } catch (error) {
        console.log(error)
      }
      this.loading = false
      this.snackbar = true

      this.$router.push({
        name: 'requests'
      })
    }
  }
}
</script>
