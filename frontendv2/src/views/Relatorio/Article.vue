<template>
  <div class="home">
    <v-card elevation="0" width="50%" class="pa-10">
      <v-card-title>Relatório de Análise</v-card-title>
      <v-row align="center">
        <v-col cols="12" md="12">
          <v-text-field
            v-model="form.save.author"
            counter="25"
            filled
            hint="This field uses counter prop"
            label="Quem está analisando as imagens?"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-select
            v-model="form.save.rating"
            :items="form.default.rating"
            hint="This field uses counter prop"
            label="Resultado da imagem processada"
            filled
          >
          </v-select>
        </v-col>

        <v-col cols="12" md="12">
          <v-slider
            v-model="form.save.amount"
            color="#6EBE43"
            label="Quantos nematoides há na imagem?"
            hint="Be honest"
            min="1"
            max="100"
            thumb-label
          ></v-slider>
        </v-col>

        <v-col cols="12" md="12">
          <v-select
            v-model="form.save.gender"
            :items="form.default.gender"
            hint="This field uses counter prop"
            label="Gêneros"
            filled
          >
          </v-select>
        </v-col>
        <v-col cols="12" md="12">
            <v-card-text>{{ form.save }}</v-card-text>
        </v-col>
      </v-row>
      <v-card-actions><v-btn block dark color="#6EBE43" @click="generateReport">Generate PDF</v-btn></v-card-actions>
    </v-card>
    <div>
     <VueHtml2pdf
        :show-layout="false"
        :float-layout="true"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="myPDF"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"
        ref="html2Pdf"
    >
        <section slot="pdf-content">
            <v-card elevation="0" class="pa-10">
                <v-card-title>Relatório de Análise</v-card-title>
                <v-card-text>O presente autor dessa análise identificou que o filtro selecionado apresentou performance {{form.save.rating}},
                    Sendo possível identificar {{form.save.amount}} nematoides.</v-card-text>
                <v-card-text>Foi percebido, também, o gênero {{ form.save.gender }}.</v-card-text>
                <v-card-text>Assinado: {{form.save.author}}</v-card-text>
            </v-card>
        </section>
    </VueHtml2pdf>
   </div>
  </div>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'

export default {
  name: "ArticlePage",
  components: {
      VueHtml2pdf
  },
  data() {
    return {
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
    };
  },
  methods: { 
        generateReport () {
            this.$refs.html2Pdf.generatePdf()
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
