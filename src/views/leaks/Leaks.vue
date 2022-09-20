<template>
  <div class="wrap">
    <v-text-field
      outlined
      dense
      placeholder="Pesquise..."
      label="Pesquise..."
      hide-details="auto"
      v-model="search"
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

class Leak {
  constructor(name, date) {
    this.name = name
    this.date = date
  }
}

export default {
  components: {
    LeakCard,
    LeakInfoDialog
  },

  data() {
    return {
      leaks: Array.from({ length: 7 }, (_, i) => i),
      // leaks: [
      //   new Leak('Facebook', '01/08/2019'),
      //   new Leak('Disney', '01/08/2019')
      // ],
      showLeakInfo: false,
      search: ''
    }
  },
  computed: {
    filteredList() {
      return this.leaks.filter(leak => {
        return leak.toLowerCase().includes(this.search.toLowerCase())
      })
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
