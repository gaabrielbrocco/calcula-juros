<template>
  <v-container class="mt-10">
    <v-row class="d-flex justify-center py-15 my-15">
      <v-col cols="5">
        <v-form>
          <div justify="center" align="center" class="mb-10 text-h4">
            Calculadora taxa de juros
          </div>
          <v-row class="mt-5">
            <v-col cols="6">
              <div>Valor do aporte inicial:</div>
              <v-text-field variant="outlined" type="number" >
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <div>Aporte mensal:</div>
              <v-text-field variant="outlined" type="number">
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <div>Taxa de juros ao ano:</div>
              <v-text-field variant="outlined" type="number" label="%">

              </v-text-field>
            </v-col>
            <v-col cols="6">
              <div>Inflação ao ano:</div>
              <v-text-field variant="outlined" type="number" label="%">

              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <div>Determine o período em anos:</div>
              <v-text-field variant="outlined" type="number">
              </v-text-field>
            </v-col>
          </v-row>

          <div class="d-flex justify-center mt-5">
            <v-btn size="large" color="green" text="calcular" @click="controller.calcular"></v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>

const { controller } = defineProps({
  controller: {
    type: Object,
    required: true,
  },
});
</script>
