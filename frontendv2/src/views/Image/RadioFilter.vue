<template>
  <v-slide-item v-slot="{ active, toggle }">
    <v-alert type="info" text class="ma-4" v-if="active">
      O filtro {{ value }} está selecionado 
      <v-card  @click="toggle" rounded class="ma-3">
        <v-card-title>
          <v-icon class="pr-2">mdi-{{ icon }}</v-icon>
          {{ value }}
        </v-card-title>
        <v-img :src="src" width="250"></v-img>
      </v-card>
    </v-alert>
    <div v-else class="ma-4">
      <v-card :elevation="active ? 2 : 1" :outlined="active" @click="toggle" :color="active ? `#f7f7f7` : `#fff`" rounded>
        <v-card-title>
          <v-icon class="pr-2">mdi-{{ icon }}</v-icon>
          {{ value }}
        </v-card-title>
        <v-img :src="src" width="300"></v-img>
      </v-card>
    </div>
  </v-slide-item>
</template>
<script>
export default {
  name: "RadioFilter",
  props: ["value", "icon", "src"],
  components: {},
  data: () => ({
    val: 25
  }),
};
</script>
