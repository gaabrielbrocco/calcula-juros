<template>
  <v-container class="mt-10">
    <v-row class="d-flex justify-center py-15 my-15">
      <v-col cols="5">
        <v-form>
          <div justify="center" align="center" class="mb-10 text-h3">
            Calculadora taxa de juros
          </div>
          <v-row class="mt-5">
            <v-col cols="6">
              <div>Valor do aporte inicial:</div>
              <v-text-field
                variant="outlined"
                type="number"
                v-model.number="aporteInicial"
              >
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <div>Aporte mensal:</div>
              <v-text-field
                variant="outlined"
                type="number"
                v-model.number="aporteMensal"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <div>Taxa de juros ao ano:</div>
              <v-text-field
                variant="outlined"
                type="number"
                label="%"
                v-model.number="taxaJuros"
              >
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <div>Determine o período em meses:</div>
              <v-text-field
                variant="outlined"
                type="number"
                v-model.number="periodo"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <div class="d-flex justify-center mt-5">
            <v-btn
              size="large"
              color="green"
              text="calcular"
              @click="calculaJuros"
            ></v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
    <v-row>
      <v-data-table
        density="compact"
        hover
        items-per-page="25"
        :headers="headers"
        :items="resultados"
      >
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { colunas } from "../const/colunas";

const aporteInicial = ref(0);
const aporteMensal = ref(0);
const taxaJuros = ref(0);
const periodo = ref(0);
const resultados = ref([]);
const colunasTabela = ref(colunas);
const headers = ref([
{
      title: "Meses",
      key: "meses",
    },
    {
      title: "Valor inicial",
      key: "valorInicial",
    },
    {
      title: "Aporte",
      key: "aporte",
    },
    {
      title: "Rendimento",
      key: "rendimento",
    },
    {
      title: "Valor final",
      key: "valorFinal",
    },
]);

const calculaJuros = () => {
  let saldo = aporteInicial.value;
  let porcentagemTaxa = taxaJuros.value / 100 / 12;
  let resultado = [];

  for (let i = 0; i < periodo.value; i++) {
    let valorInicialMes = i === 0 ? saldo.toFixed(2) : resultado[i - 1].valorFinal;
    saldo = valorInicialMes * (1 + porcentagemTaxa) + aporteMensal.value;

    resultado.push({
      meses: i + 1,
      valorInicial: formatarParaMoeda(parseFloat(valorInicialMes)),
      aporte: aporteMensal.value,
      rendimento: formatarParaMoeda(parseFloat((saldo - valorInicialMes - aporteMensal.value).toFixed(2))),
      valorFinal: saldo.toFixed(2)
    });
  }

  resultados.value = resultado;
  console.log(resultados.value);
};

const formatarParaMoeda = (valorNumerico) => {
  const valorConvertido = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  }).format(valorNumerico);
  return valorConvertido;
};

// F = P*(1+J)N

</script>
