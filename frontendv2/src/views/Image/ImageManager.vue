<template>
    <v-card class="d-flex align-center justify-center" elevation="0">
      <v-img max-width="60%" :src="fileUrlInput" class="rounded">
        <v-toolbar dense elevation="1" dark>
          <v-toolbar-title>{{ sendImageName }}</v-toolbar-title>
  
          <v-spacer></v-spacer>
  
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <!-- Tela Upload Arquivos -->
              <v-dialog v-model="dialogUploadImage" width="500">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item link v-bind="attrs" v-on="on">
                    <v-list-item-icon>
                      <v-icon>mdi-upload</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Upload Imagem</v-list-item-title>
                  </v-list-item>
                </template>
                <UploadDialog :url.sync="fileUrlInput" :dialog.sync="dialogUploadImage" :filename.sync="imagePathName" :filemodel.sync="fileModelInput"/>
                
              </v-dialog>
  
              <!-- Tela Editor de Filtros -->
              <v-dialog v-model="dialogEditorImage" width="700">
                <template v-slot:activator="{ on, attrs }">
                  <v-list-item link v-bind="attrs" v-on="on">
                    <v-list-item-icon>
                      <v-icon>mdi-image</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Editor de Imagem</v-list-item-title>
                  </v-list-item>
                </template>
  
                <EditorDialog :file.sync="fileModelInput" :dialog.sync="dialogEditorImage" :fileImageFilter.sync="fileImageFilter"/>
              </v-dialog>
            </v-list>
          </v-menu>
        </v-toolbar>
        
      </v-img>
    </v-card>
  </template>
    
  <script>
  import EditorDialog from "./EditorDialog.vue";
  import UploadDialog from "./UploadDialog.vue";
  
  export default {
  
    components: {
        UploadDialog,
        EditorDialog
    },
  
    data: () => ({
      imagePathName: 'flores.jpg',
      dialogUploadImage: false,
      dialogEditorImage: false,
      fileImageFilter: 'oxi',
      fileModelInput: null,
      fileUrlInput:
        "example-filter/original.jpg",
    }),
    watch: {
      fileImageFilter(){
        this.changeUrlImage();
      }
    },
    computed: {
      sendImageName(){
        return this.imagePathName;
      }
    },
    methods: {
      changeUrlImage(){
        this.fileUrlInput = this.fileImageFilter;
      }
    },
  };
  </script>
  