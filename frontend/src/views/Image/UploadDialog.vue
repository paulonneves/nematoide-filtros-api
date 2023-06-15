<template>
  <div class="upload">
    <v-card>
      <v-toolbar class="grey lighten-2">
        
        <v-card-title class="text-h5  justify-center">
        Upload de Imagem
      </v-card-title>
      <v-spacer></v-spacer>
        <v-btn icon dark color="red" @click="$emit('update:dialog', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container>
        <v-card-text>
          Clique no campo abaixo para procurar a imagem no seu computador
        </v-card-text>
      </v-container>

      <v-divider></v-divider>

      <v-card-actions>
        <v-file-input
          @change="Preview_image"
          v-model="fileModelInput"
          accept="image/png, image/jpeg, image/bmp"
          placeholder="Clique para Upload da imagem"
          prepend-icon="mdi-camera"
          label="Imagem"
          solo
          >Upload</v-file-input
        >
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>

export default {
  props: ["url", "dialog", 'filename', 'filemodel'],
  emits: ["update:url", "update:dialog", "update:filename", "update:filemodel"],
  data: () => ({
    fileModelInput: null,
    urlModel: null,
    nameModel: ''
  }),
  methods: {
    Preview_image() {
      this.urlModel = URL.createObjectURL(this.fileModelInput);
      this.nameModel =  this.fileModelInput.name
      this.$emit("update:url", this.urlModel);
      this.$emit("update:filename", this.nameModel);
      this.$emit("update:filemodel", this.fileModelInput);
    },
  },
};
</script>
  