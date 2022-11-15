<template>
  <v-card @click="$emit('click')" ripple :color="color">
    <v-card-text class="white--text">
      <v-col>
        <v-row class="mb-1" align="center">
          <span class="font-weight-bold">
            {{ request.protocol }}
          </span>
          <v-spacer></v-spacer>
          <div class="d-flex flex-column">
            <span style="font-size: 12px" class="font-weight-bold">
              {{ request.formattedCreatedAt }}
            </span>
          </div>
        </v-row>

        <v-row align="center">
          <div class="d-flex flex-column">
            <span class="font-weight-bold">
              {{ request.statusDescription }}
            </span>
            <small>{{ request.url }}</small>
          </div>
        </v-row>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    request: {
      type: Object
    }
  },

  computed: {
    color() {
      // static FOUND = 4
      // static EMPTY = 5
      // static ANONYMIZED = 6
      switch (this.request.status) {
        case 4:
          return 'info'
        case 5:
        case 6:
          return 'success'

        default:
          return 'secondary'
      }

      console.log(this.request)
      return 'info'
    }
  }
}
</script>
