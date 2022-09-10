<template>
  <v-card>
    <v-card-title class="d-flex flex-column align-center">
      <span>
        Disney
      </span>
      <v-img
        class="mt-1"
        contain
        src="@/assets/images/misc/logoDisney.png"
        max-width="100"
      />
    </v-card-title>
    <v-col style="display:flex; flex-direction: column; gap: 10px">
      <v-text-field
        outlined
        dense
        label="Nome Completo"
        placeholder="Nome Completo"
        hide-details
      ></v-text-field>

      <v-text-field
        outlined
        dense
        label="E-mail"
        placeholder="E-mail"
        hide-details
      ></v-text-field>

      <v-text-field
        outlined
        dense
        label="CPF"
        placeholder="CPF"
        hide-details
      ></v-text-field>

      <v-select
        outlined
        dense
        :items="types"
        label="Tipo"
        placeholder="Tipo"
        hide-details
      ></v-select>

      <v-btn color="primary">
        Enviar
      </v-btn>
    </v-col>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      types: ['Consulta', 'Revogação']
    }
  }
}
</script>
