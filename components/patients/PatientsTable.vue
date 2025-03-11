<template>
    <v-table  class="patients-table" fixed-header>
      <thead>
        <tr>
          <th class="text-left">
            Nombre paciente
          </th>
          <th class="text-left">
            Correo electrónico
          </th>
          <th class="text-left">
            Enfermedad
          </th>
          <th class="text-left">
            Seguimientos
          </th>
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in patientStore.patients"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.disease }}</td>
          <td>{{ item.logs.length }}</td>
          <td>
            <span class="link-to-profile" @click="goToProfile(item.id)">
                Ver perfil
            </span>
            
          </td>
        </tr>
      </tbody>
    </v-table>
</template>

<style lang="scss" scoped>
    .patients-table {
        flex: 1;
        overflow-y: auto;
    }

    .link-to-profile{
        cursor: pointer;
        &:hover {
            text-decoration: underline;
          }
    }

</style>

<script setup>

import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
import { usePatientStore } from '~/store/patient.store';



const patientStore = usePatientStore()
const router = useRouter()

const LoadPatients = async() => {
    try {
        await patientStore.fetchPatients()


    } catch (e) {
        console.log("Error loading patients")
    }
    
}

const goToProfile = (id) => {
    router.push("/pacientes/"+id)
}

onMounted(() => {
    LoadPatients()
})
</script>