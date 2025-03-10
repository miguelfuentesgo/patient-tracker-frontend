<template>
      <v-app-bar app fixed>
        <v-toolbar-title>Gestión de Pacientes</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn class="nav-btn" to="/" text>Inicio</v-btn>
        <v-btn class="nav-btn" to="/pacientes" text>Pacientes</v-btn>
        <v-btn class="nav-btn" to="/seguimientos" text>Seguimientos</v-btn>
        <v-btn class="nav-btn" text @click="handleClickOnRegister">Registro</v-btn>
      </v-app-bar>
  </template>
  
  <script setup>
    import { useRoute, useRouter } from 'vue-router'

    const route = useRoute()
    const router = useRouter()

    const handleClickOnRegister = () => {
        if(route.path == "/"){
            scrollToNewPatientForm()
        } else {
            router.push('/registro')
        }
    }
    const scrollToNewPatientForm = () => {
        const element = document.getElementById('new-patient-form-title')
            element?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
         })
        }
    
  </script>
  
  <style lang="scss" scoped>
  </style>
  