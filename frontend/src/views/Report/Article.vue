<template>
  <div class="home pa-10">
    <v-card elevation="0" width="50%" class="pa-10">
      <image-manager></image-manager>

      <v-card-title>Relatório de Análise</v-card-title>

      <v-row align="center">
        <v-col cols="12" md="12">
          <v-text-field v-model="form.save.author" counter="25" filled hint="Deve ser informado o autor da análise"
            label="Quem está analisando as imagens?"></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-select v-model="form.save.rating" :items="form.default.rating"
            hint="Deve ser informado a qualidade do resultado do processamento" label="Resultado da imagem processada"
            filled>
          </v-select>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field solo v-model.number="sendAmoumt" color="#6EBE43" label="Quantos nematoides há na imagem?"
            hint="Infome a quantidade identificável de nematoides" min="1" max="100" type="number"
            prepend-inner-icon="mdi-plus-box" append-icon="mdi-minus-box" @click:prepend-inner="increment"
            @click:append="decrement">
          </v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-select v-model="form.save.gender" :items="form.default.gender"
            hint="Deve ser informado a taxonomia presente na amostra" label="Gêneros" filled>
          </v-select>
        </v-col>
        <v-col cols="12" md="12">
          <v-card-text>Item: {{ form.save }}</v-card-text>
          <v-card-text>Lista de valores: {{ formList }}</v-card-text>
        </v-col>
      </v-row>
      <v-row>
        <v-btn dark block color="#2c3e50" class="mb-2" @click="addFormList"><v-icon>mdi-plus</v-icon> Adicionar</v-btn>
        <v-btn dark block color="#e74c3c" class="mb-2" @click="removeAction"><v-icon>mdi-delete-variant</v-icon> Limpar</v-btn>
        <v-btn dark block color="#6EBE43" @click="downloadCSV"><v-icon>mdi-google-spreadsheet</v-icon> Baixar CSV
        </v-btn>
        <v-snackbar v-model="snackForm" :timeout="snackTimeOut">
          {{ snackFormText }}

          <template v-slot:action="{ attrs }">
            <v-btn text v-if="snackRemoveButton" @click="clearFormList">
              Accept
            </v-btn>
            <v-btn color="pink" text v-bind="attrs" @click="snackForm = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </v-row>
    </v-card>

  </div>
</template>

<script>
import ImageManager from '@/views/Image/ImageManager.vue';
import { saveAs } from 'file-saver';


export default {
  name: "ArticlePage",
  components: {
    ImageManager
  },
  data() {
    return {
      amoutValue: 0,
      snackTimeOut: 2000,
      snackRemoveButton: false,
      snackForm: false,
      snackFormText: '',
      form: {
        save: {
          author: null,
          amount: 0,
          gender: null,
          rating: null,
        },
        default: {
          gender: ["Gênero 1", "Gênero 2"],
          rating: ["Bom", "Ruim", "Péssimo"],
        },
      },
      formList: [],
    };
  },
  computed: {
    sendAmoumt() {
      return this.form.save.amount;
    }
  },
  methods: {
    increment() {
      this.form.save.amount++;
    },
    decrement() {
      if (this.form.save.amount <= 0) {
        this.form.save.amount = 0;
      } else {
        this.form.save.amount--;
      }
    },
    checkFormItem() {
      const formItem = this.form.save;
      const author = formItem.author,
        gender = formItem.gender,
        rating = formItem.rating;
      return author && gender && rating;
    },
    addFormList() {
      const defaultForm = {
        author: null,
        amount: 0,
        gender: null,
        rating: null,
      }
      if (this.checkFormItem()) {
        this.formList.push(this.form.save);
        this.form.save = defaultForm;
      } else {
        this.snackFormText = 'Preencha todos os campos antes de adicionar';
        this.snackForm = true;
        this.snackRemoveButton = false;
        this.snackTimeOut = 2000;
      }
    },

    removeAction(){
      this.snackFormText = 'Tem certeza que deseja excluir todas as linhas da planilha?';
      this.snackForm = true;
      this.snackRemoveButton = true;
      this.snackTimeOut = 5000
    },
    
    clearFormList() {
      this.formList = [];
      this.snackForm = false;
    },
    convertJsonInCSV(jsonObj){
      const header = Object.keys(jsonObj[0]);
      const csvHeader = header.join(', ');

      var values = [csvHeader];

      jsonObj.map((item) => {
        const itemValues = Object.values(item);
        const valueString = itemValues.join(', ');
        values.push(valueString);
      });
      const csvContent = values.join('\n');
      console.log(csvContent);
      return csvContent;
    },
    downloadCSV(){
      if(this.formList.length == 0){
        this.snackFormText = 'Adicione pelo menos uma rodada de valores a lista antes de salvar um arquivo';
        this.snackForm = true;
        this.snackRemoveButton = false;
        this.snackTimeOut = 2000;
      }
      else {
        const csv = this.convertJsonInCSV(this.formList);
        var blob = new Blob([csv], {type: "text/plain;charset=utf-8"});
        saveAs(blob, "Relatorio.csv");
      }
    }
  },
};
</script>

<style scoped>
.home {
  background: url("@/assets/back.png");
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
