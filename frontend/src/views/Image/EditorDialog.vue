<template>
  <div class="editor">
    <v-card elevation="0">
      <v-toolbar class="grey lighten-2">

        <v-card-title class="text-h5  justify-center">
          Editor de Imagem
        </v-card-title>
        <v-spacer></v-spacer>
        <v-btn icon dark color="red" @click="$emit('update:dialog', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-actions class="justify-center"> </v-card-actions>
      <v-card-title>Seleção</v-card-title>
      <v-slide-group v-model="slideGroup" class="pa-4" show-arrows>
        <div v-for="(item, index) in filterData" :key="index" class="slide">

          <RadioFilter :value="item.name" :icon="item.icon" :src="`./example-filter/${item.name}.png`" />

        </div>
      </v-slide-group>
      <v-card-title>Intensidade</v-card-title>
      <v-slider v-model="filterWeight" class="ma-2" color="orange darken-3" min="1" max="200" thumb-label></v-slider>
      <div v-if="fileIsNull">
        <v-btn block dark color="#6EBE43" @click="snackbar = true">
          Submeter parâmetros de filtro
        </v-btn>
        <v-snackbar v-model="snackbar" :timeout="timeoutSnackbar">
          Faça upload de uma imagem

          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
      <div v-else>
        <v-btn block dark color="#6EBE43" @click="submitImage">
          Submeter parâmetros de filtro
        </v-btn>
      </div>

    </v-card>
  </div>
</template>

<script lang="js">
import axios from "axios";
import RadioFilter from './RadioFilter.vue';

export default {
  name: "EditorDialog",
  props: ['file', 'dialog', 'fileImageFilter'],
  emits: ['update:dialog', 'update:fileImageFilter'],
  components: {
    RadioFilter
  },

  data: () => ({
    snackbar: false,
    timeoutSnackbar: 2000,
    slideGroup: 0,
    filterWeight: 10,
    tab: null,
    filterData: [
      { icon: "border-radius", name: "sobel" },
      { icon: "image-filter-tilt-shift", name: "roberts" },
      { icon: "image-auto-adjust", name: "lighten" },
      { icon: "blur", name: "blur" },
      { icon: "border-outside", name: "canny" },
    ],
  }),
  computed: {
    fileIsNull() {
      return this.file == null
    },
  },


  methods: {
    submitImage() {
      const filtername = this.filterData[this.slideGroup].name;
      console.log(filtername)
      axios
        .post(
          "http://127.0.0.1:8000/upload?filtername=" +
          filtername +
          "&base64_output=true",
          {
            file: this.file,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((response) => {
          const urlBase = `data:image/jpeg;base64,${response.data}`;
          this.$emit("update:fileImageFilter", urlBase);
          this.$emit("update:dialog", false);
        });
        

    }
  }

};
</script>
