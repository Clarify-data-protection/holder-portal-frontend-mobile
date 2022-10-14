<template>
  <v-form>
    <v-row>
      <v-col cols="12" md="3">
        <h4>Sobre aplicativo</h4>
        <p>Lorem ipsum dolor</p>
      </v-col>
      <v-col cols="12" md="3">
        <h4>Samuel</h4>
        <v-img :src="require('@/assets/images/avatars/1.png')"></v-img>
        <p>Lorem ipsum dolor</p>
      </v-col>

      <v-col cols="12" md="3">
        <h4>Gabriel</h4>
        <v-img :src="require('@/assets/images/avatars/1.png')"></v-img>
        <p>Lorem ipsum dolor</p>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const firstname = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)

    return {
      firstname,
      email,
      mobile,
      password,
      checkbox
    }
  }
}
</script>
