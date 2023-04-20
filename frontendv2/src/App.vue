<template>
  <v-app>
    <v-card class="d-flex" height="100%">
      <v-navigation-drawer permanent color="#AAB4AA" dark>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> QuitandaLab </v-list-item-title>
            <v-list-item-subtitle>
              Nematoide Photo Editor
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <router-link class="route-link" :to="item.page" v-for="item in items" :key="item.title">
          <v-list-item  link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          </router-link>
        </v-list>
      </v-navigation-drawer>
      <router-view/>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
  },

  data: () => ({
    items: [
      { title: "Editor de Imagem", icon: "mdi-image-frame", page: "/editor" },
      { title: "Relatório", icon: "mdi-file-document", page: "/article" },
    ],
  }),
};
</script>

<style scoped>
.route-link {
  text-decoration: none;
  color: #fff;
}
</style>