<template>
  <v-card class="editor mx-auto" width="100%">
    <v-navigation-drawer permanent color="#F7F7F7">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"
            ><v-icon>mdi-tune</v-icon>Filtros</v-list-item-title
          >
          <v-list-item-subtitle>
            Filtro aplicado a imagem
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <div class="item-list" v-for="(item, index) in filterData" :key="index">
        <v-list-item @click="submitImage(item.name)" link>
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-navigation-drawer>

    <v-container class="photo-layout">
      <v-toolbar dense>
        <v-tabs v-model="tab">
          <v-tab>Editor</v-tab>
          <v-tab>Arquivo</v-tab>
        </v-tabs>
      </v-toolbar>

      <v-tabs-items v-model="tab" width="100%">
        <v-tab-item>
          <v-card color="#F7F7F7">
            <v-sheet
              color="#F7F7F7"
              elevation="0"
              height="70vh"
              width="100%"
              rounded="true"
              class="d-flex justify-center align-center"
            >
              <v-img
                v-if="dataimage"
                lazy-src="https://picsum.photos/id/11/10/6"
                :src="dataimage"
                max-height="80%"
                max-width="70%"
                class="rounded"
              ></v-img>
              <v-img
                v-else-if="url"
                lazy-src="https://picsum.photos/id/11/10/6"
                :src="url"
                max-height="80%"
                max-width="70%"
                class="rounded"
              ></v-img>
              <v-img
                v-else
                lazy-src="https://picsum.photos/id/11/10/6"
                src="https://picsum.photos/id/11/500/300"
                max-height="70%"
                max-width="50%"
                class="rounded"
              ></v-img>
            </v-sheet>
            <v-card-actions
              ><v-btn v-if="dataimage" block dark color="#6EBE43"  download="image.jpg" :href="dataimage"
                >Salvar Imagem como PDF</v-btn
              ></v-card-actions
            >
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card elevation="1" height="70vh" width="100%" rounded="true">
            <div class="upload-tab">
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
                      <v-card-title
                        class="text-h5 grey lighten-2 justify-center"
                      >
                        Upload de Imagem
                      </v-card-title>
                      <v-container>
                        <v-card-text>
                          Clique no campo abaixo para procurar a imagem no seu
                          computador
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
                <v-btn class="mb-10" color="#6EBE43" large dark
                  >Acessar Pasta</v-btn
                >
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
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
  </v-card>
</template>

<style scoped>
.editor {
  display: flex;
  justify-content: space-between;
}

.upload-tab {
  background: url("@/assets/back.png");
  width: 100%;
  height: 70vh;
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


<script>
import axios from "axios";

export default {
  name: "EditorPage",

  components: {},

  data: () => ({
    tab: null,
    filterData: [
      { icon: "border-radius", name: "sobel" },
      { icon: "image-filter-tilt-shift", name: "roberts" },
      { icon: "image-auto-adjust", name: "lighten" },
      { icon: "blur", name: "blur" },
      { icon: "border-outside", name: "canny" },
    ],
    dialog: false,
    file: null,
    dataimage: null,
    url: null,
  }),
  methods: {
    Preview_image() {
      this.url = URL.createObjectURL(this.file);
      this.dataimage = null;
      console.log(this.file);
    },
    submitImage(filterSelected) {
      console.log("how");
      const { imageFileResponse } = axios
        .post(
          "http://127.0.0.1:8000/upload?filtername=" +
            filterSelected +
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
          this.dataimage = `data:image/jpeg;base64,${response.data}`;
        });

      console.log(imageFileResponse);
    },
  },
};
</script>
