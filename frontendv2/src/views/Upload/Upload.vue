<template>
  <div class="home">
    <div class="button-group">
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="#6EBE43"
              dark
              large
              v-bind="attrs"
              v-on="on"
              class="mb-10"
            >
              Upload de Arquivo
            </v-btn>
          </template>

          <v-card>
            <v-card-actions class="grey lighten-2"
              ><v-spacer></v-spacer
              ><v-btn icon dark color="red" @click="dialog = false"
                ><v-icon>mdi-close</v-icon></v-btn
              ></v-card-actions
            >
            <v-card-title class="text-h5 grey lighten-2 justify-center">
              Upload de Imagem
            </v-card-title>
            <v-container>
              <v-card-text>
                Clique no campo abaixo para procurar a imagem no seu computador
              </v-card-text>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
              <v-file-input
                @change="Preview_image"
                v-model="file"
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Pick an avatar"
                prepend-icon="mdi-camera"
                label="Avatar"
                solo
                >Upload</v-file-input
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <v-btn class="mb-10" color="#6EBE43" large dark @click="increment()">Acessar Pasta</v-btn>
    
    </div>
    <v-container class="d-flex justify-center" v-if="file">
      <v-card elevation="0" color="transparent">
        <v-card-title>Imagem selecionada</v-card-title>
        <v-card-actions>
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-width="200"
            max-height="200"
            :src="url"
            class="rounded"
          ></v-img>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  name: "UploadPage",
  components: {},
  data() {
    return {
      dialog: false,
      file: null,
      url: null
    };
  },
  methods: {
    Preview_image() {
      this.url = URL.createObjectURL(this.file);
      console.log(this.file);
    }
  },
};
</script>

<style scoped>
.home {
  background: url("@/assets/back.png");
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.button-group {
  display: flex;
  flex-direction: column;
}
</style>
