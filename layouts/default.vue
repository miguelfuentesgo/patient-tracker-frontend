<template>
    <v-app>
      <nav-bar />
  
      <v-main>
        <slot />
      </v-main>
    </v-app>
  </template>
  
  <script setup>
    import  NavBar  from "@/components/layout/NavBar"
  </script>
  
  <style lang="scss">
  .v-application {
    min-height: 100vh;
  }
  
  .v-main {
    padding-top: 64px; // Altura de la AppBar para evitar solapamiento
  }
  </style>
  