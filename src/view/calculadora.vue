<template>
    <dialog-form :controller="controller"/>
  </template>
  
  <script setup>
  import {calculadoraController} from "../controller/calculadoraController";
  import DialogForm from "../components/dialog-form.vue";
  
  const controller = calculadoraController();
  </script>
  
  <style>
  
  </style>