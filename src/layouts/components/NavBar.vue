<template>
  <div class="navbar">
    <v-btn
      v-if="goBack"
      elevation="0"
      x-small
      absolute
      left
      @click="$router.go(-1)"
      color="transparent"
      class="white--text"
    >
      <v-icon size="30">
        mdi-chevron-left
      </v-icon>
    </v-btn>
    <span>
      {{ currentPage }}
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    currentPage: function() {
      return this.$route.meta.title || ''
    },
    goBack: function() {
      return this.$route.meta.goBack
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  padding-bottom: 5px;
  background: var(--v-primary-base);
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
