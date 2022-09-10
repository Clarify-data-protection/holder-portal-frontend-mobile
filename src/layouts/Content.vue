<template>
  <v-app>
    <v-app-bar app flat absolute color="primary">
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <v-spacer></v-spacer>

          <theme-switcher></theme-switcher>
          <v-btn icon small class="ms-3">
            <v-badge :content="2" color="error" overlap>
              <v-icon color="white">
                mdi-bell-outline
              </v-icon>
            </v-badge>
          </v-btn>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <nav-bar />
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>
    <bottom-tab-navigation v-if="isBottomVisible" />
  </v-app>
</template>

<script>
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'
import BottomTabNavigation from './components/BottomTabNavigation'
import NavBar from './components/NavBar.vue'

export default {
  components: {
    ThemeSwitcher,
    AppBarUserMenu,
    BottomTabNavigation,
    NavBar
  },
  computed: {
    isBottomVisible: function() {
      return !this.$route.meta.hideTabsNavigator
    }
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}
</style>
