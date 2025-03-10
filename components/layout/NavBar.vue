<template>
      <v-app-bar app fixed>
        <v-toolbar-title>Gestión de Pacientes</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn class="nav-btn" to="/" text>Inicio</v-btn>
        <v-btn class="nav-btn" to="/pacientes" text>Pacientes</v-btn>
        <v-btn class="nav-btn" to="/seguimientos" text>Seguimientos</v-btn>
        <v-btn class="nav-btn" to="/registro" text>Registro</v-btn>
      </v-app-bar>
  </template>
  
  <script setup>
  // No se necesita lógica adicional por ahora.
  </script>
  
  <style lang="scss" scoped>
  </style>
  