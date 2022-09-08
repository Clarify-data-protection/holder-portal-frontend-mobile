<template>
  <div class="navbar">
    {{ currentPage }}
  </div>
</template>

<script>
export default {
  computed: {
    currentPage: function() {
      return this.$route.name
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
}
</style>
