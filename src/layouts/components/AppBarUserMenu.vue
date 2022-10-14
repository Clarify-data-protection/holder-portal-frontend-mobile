<template>
  <v-menu
    offset-y
    left
    nudge-bottom="14"
    min-width="230"
    content-class="user-profile-menu-content"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-badge
        bottom
        color="success"
        overlap
        offset-x="12"
        offset-y="12"
        class="ms-4"
        dot
      >
        <v-avatar size="40px" v-bind="attrs" v-on="on">
          <v-img :src="require('@/assets/images/avatars/1.png')"></v-img>
        </v-avatar>
      </v-badge>
    </template>
    <v-list>
      <div class="pb-3 pt-2">
        <v-badge
          bottom
          color="success"
          overlap
          offset-x="12"
          offset-y="12"
          class="ms-4"
          dot
        >
          <v-avatar size="40px">
            <v-img :src="require('@/assets/images/avatars/1.png')"></v-img>
          </v-avatar>
        </v-badge>
        <div
          class="d-inline-flex flex-column justify-center ms-3"
          style="vertical-align:middle"
        >
          <span class="text--primary font-weight-semibold mb-n1">
            John Doe
          </span>
        </div>
      </div>

      <v-divider></v-divider>

      <v-list-item link to="/about-us">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            mdi-information-outline
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Sobre App</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            mdi-account-outline
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Perfil</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            mdi-bell
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Notificação</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-badge inline color="error" content="2"> </v-badge>
        </v-list-item-action>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list-item link to="/LGPD">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            mdi-security
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>LGPD</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link to="/faq">
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            mdi-help-circle-outline
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>FAQ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            mdi-email-outline
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Contato</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            mdi-file-lock
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Politica de Privacidade</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            mdi-cog-outline
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Configuração</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            mdi-logout-variant
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Sair</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
