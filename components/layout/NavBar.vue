<template>
      <v-app-bar app fixed>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="d-sm-none"></v-app-bar-nav-icon>
        <v-toolbar-title class="title"><img src="/logo.jpeg" alt="" height="50px"></v-toolbar-title>
  
        <v-spacer></v-spacer>
        <div class="d-none d-sm-flex">
            <v-btn class="nav-btn" to="/" text>Inicio</v-btn>
            <v-btn class="nav-btn" to="/pacientes" text>Pacientes</v-btn>
            <v-btn class="nav-btn" to="/seguimientos" text>Seguimientos</v-btn>
            <v-btn class="nav-btn" text @click="handleClickOnRegister">Registro</v-btn>
        </div>
        
      </v-app-bar>

      <v-navigation-drawer
    v-model="drawer"
    app
    temporary
    class="d-sm-none"
  >
    <v-list>
      <v-list-item link to="/">
        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/pacientes">
        <v-list-item-title>Pacientes</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/seguimientos">
        <v-list-item-title>Seguimientos</v-list-item-title>
      </v-list-item>
      <v-list-item @click="handleClickOnRegister">
        <v-list-item-title>Registro</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  </template>
  
  <script setup>
    import { useRoute, useRouter } from 'vue-router'

    const route = useRoute()
    const router = useRouter()
    const drawer = ref(false);

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
  