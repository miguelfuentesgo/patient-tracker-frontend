<template>
      <v-app-bar app fixed color="primary" dark>
        <v-toolbar-title>Gestión de Pacientes</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn to="/" text>Inicio</v-btn>
        <v-btn to="/pacientes" text>Pacientes</v-btn>
        <v-btn to="/seguimientos" text>Seguimientos</v-btn>
        <v-btn to="/registro" text>Registro</v-btn>
      </v-app-bar>
  </template>
  
  <script setup>
  // No se necesita lógica adicional por ahora.
  </script>
  
  <style lang="scss">
  .v-application {
    min-height: 100vh;
  }
  
  .v-main {
    padding-top: 64px; // Altura de la AppBar para evitar solapamiento
  }
  </style>
  