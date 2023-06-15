<template>
  <v-app>
    <v-card class="d-flex" height="100%">
      <AppBar>
        <router-view />
      </AppBar>
    </v-card>
  </v-app>
</template>

<script>
import AppBar from "@/components/AppBar.vue";

export default {
  name: "App",

  components: {
    AppBar,
  },

  data: () => ({
    items: [
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