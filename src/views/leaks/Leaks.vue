<template>
  <div class="wrap">
    <v-text-field
      outlined
      dense
      placeholder="Pesquise..."
      label="Pesquise..."
      hide-details="auto"
    />

    <leak-card v-for="(leak, index) in leaks" :key="index"></leak-card>
  </div>
</template>

<script>
import LeakCard from './components/LeakCard.vue'

export default {
  components: {
    LeakCard
  },

  data() {
    return {
      leaks: Array.from({ length: 50 }, (_, i) => i)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
