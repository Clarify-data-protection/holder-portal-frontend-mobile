<template>
  <v-app>
    <v-app-bar app flat absolute color="primary">
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <v-spacer></v-spacer>

          <theme-switcher></theme-switcher>
          <v-btn icon small class="ms-3">
            <v-icon color="white">
              {{ icons.mdiBellOutline }}
            </v-icon>
          </v-btn>
          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>
    <bottom-tab-navigation />
  </v-app>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub } from '@mdi/js'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'
import BottomTabNavigation from './components/bottom-tab-navigation'

export default {
  components: {
    ThemeSwitcher,
    AppBarUserMenu,
    BottomTabNavigation
  },

  computed: {
    crumbs: function() {
      let pathArray = this.$route.path.split('/')
      pathArray.shift()
      console.log(pathArray)
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? '/' + breadcrumbArray[idx - 1].path + '/' + path
            : '/' + path,
          text: this.$route.matched[idx].meta.breadCrumb || path
        })
        return breadcrumbArray
      }, [])
      return breadcrumbs
    }
  },

  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub
      }
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
