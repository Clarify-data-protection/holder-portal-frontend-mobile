<template>
  <div class="wrap">
    <v-text-field
      outlined
      dense
      placeholder="Pesquise..."
      label="Pesquise..."
      hide-details="auto"
    />

    <leak-card
      v-for="(leak, index) in leaks"
      :key="index"
      @click="showLeakInfo = true"
    />

    <leak-info-dialog :show.sync="showLeakInfo" />
  </div>
</template>

<script>
import LeakCard from './components/LeakCard.vue'
import LeakInfoDialog from './components/LeakInfoDialog.vue'

export default {
  components: {
    LeakCard,
    LeakInfoDialog
  },

  data() {
    return {
      leaks: Array.from({ length: 50 }, (_, i) => i),
      showLeakInfo: false
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
