<template>
  <v-app>
    <v-app-bar fixed app color="primary" class="py-1">
      <v-col>
        <v-row>
          <v-spacer></v-spacer>
          <div class="d-flex align-center">
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
        </v-row>
        <v-row>
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
        </v-row>
      </v-col>
    </v-app-bar>

    <v-main>
      <v-container style="height: 100%" class="pt-10 pb-13">
        <slot></slot>
      </v-container>
    </v-main>
    <bottom-tab-navigation v-if="isBottomVisible" />
  </v-app>
</template>

<script>
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'
import BottomTabNavigation from './components/BottomTabNavigation'

export default {
  components: {
    ThemeSwitcher,
    AppBarUserMenu,
    BottomTabNavigation
  },
  computed: {
    isBottomVisible: function() {
      return !this.$route.meta.hideTabsNavigator
    },
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
.v-app-bar ::v-deep {
  height: auto !important;

  .v-toolbar__content {
    height: auto !important;
  }
}

.navbar {
  width: 100%;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
