<template>
    <v-form v-model="valid" validate-on="submit lazy" @submit.prevent="submit">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Nombre completo"
              required
            />
          </v-col>
  
          <v-col cols="12" md="6">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Correo electrónico"
              required
            />
          </v-col>
        </v-row>
    <v-row>
        <v-col cols="12" md="6">
            <v-text-field
              v-model="phone"
              :rules="phoneRules"
              label="Número de teléfono celular"
              required
            />
        </v-col>
        <v-col cols="12" md="6">
            <v-text-field
              v-model="disease"
              :rules="diseaseRules"
              label="Enfermedad"
              required
            />
        </v-col>
    </v-row>
    <v-row>
        <v-btn
        :loading="loading"
        class="mt-2"
        text="Registrar paciente"
        type="submit"
        block
      ></v-btn>
    </v-row>
      </v-container>
    </v-form>
  </template>
  <style lang="scss">
    .v-form {
        padding: 20px;
    }
  </style>
  
  <script setup>
  import { ref } from 'vue'
  
  // Variables reactivas
  const valid = ref(false)
  const name = ref('')
  const email = ref('')
  const phone = ref('')
  const disease = ref('')
  const loading = ref(false)
  
  // Reglas de validación para nombre
  const nameRules = [
    (value) => !!value || 'El nombre es obligatorio.',
    (value) => (value && value.length >= 10) || 'El nombre debe ser mayor a 10 caracteres.',
  ]
  


  const emailRules = [
    (value) => !!value || 'El correo eléctrónico es obligatorio.',
    (value) => /.+@.+\..+/.test(value) || 'Correo electrónico invalido.',
  ]

  const phoneRules = [
    (value) => !!value || 'El número de teléfono celular es obligatorio.',
    (value) => (value && value.length >= 10 && value.length < 13)  || 'El número de télefono celular debe tener un longitud entre 10 y 12 caracteres.',
  ]

  const diseaseRules = [
    (value) => !!value || 'El nombre de la enfermedad  es obligatorio.'
  ]

  const submit = async (event) => {
    loading.value = true
    console.log("Registering...")

    await new Promise((resolve) => setTimeout(resolve, 3000))

    console.log("Patient registered")
    loading.value = false
}



  </script>
  