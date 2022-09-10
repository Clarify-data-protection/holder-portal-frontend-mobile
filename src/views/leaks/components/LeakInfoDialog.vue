<template>
  <v-dialog :value="show" @click:outside="$emit('update:show', !show)">
    <v-card>
      <v-card-title class="text-h6 grey lighten-2">
        <span>
          Vazamento Facebook
        </span>

        <v-btn absolute right icon @click="$emit('update:show', !show)">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </v-card-text>

      <v-divider></v-divider>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      Type: Boolean,
      required: true
    }
  }
}
</script>
