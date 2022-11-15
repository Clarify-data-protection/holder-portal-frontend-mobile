<template>
  <v-dialog
    :value="show"
    @click:outside="$emit('update:show', !show)"
    scrollable
  >
    <v-card>
      <v-card-title class="text-h6 grey lighten-2">
        <span> {{ leak.name }} </span>

        <v-btn absolute right icon @click="$emit('update:show', !show)">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <p v-html="leak.description"></p>
      </v-card-text>
      <v-divider></v-divider>

      <v-card-actions class="d-flex flex-column align-start leak-info">
        <div>
          <strong>Data:</strong> <span>{{ leak.breachDate }} </span>
        </div>
        <div>
          <strong>Contas vazadas:</strong> <span>{{ leak.leakedCount }}</span>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      Type: Boolean,
      required: true
    },

    leak: {
      type: Object
    }
  }
}
</script>

<style lang="css" scoped>
.leak-info div span {
  font-size: 14px;
}
</style>
