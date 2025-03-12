<template>
    <v-table class="logs-table" fixed-header>
      <thead>
        <tr>
          <th class="text-left">
            Fecha
          </th>
          <th class="text-left">
            Nota
          </th>
          <th class="text-left">
            Paciente
          </th>
          <th class="text-left">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in logStore.logs"
          :key="item.id"
        >
          <td>{{ toDate(item.date) }}</td>
          <td>{{ item.note }}</td>
          <td>{{ getPatient(item.patient).name }}</td>
          <td>
            <span class="link-to-profile" @click="goToProfile(item.patient)">
                Ver perfil
            </span>
            
          </td>
        </tr>
      </tbody>
    </v-table>
</template>

<style lang="scss" scoped>
    .logs-table {
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
import { useLogStore } from '~/store/log.store';
import { usePatientStore } from '~/store/patient.store';



const logStore = useLogStore()
const patientStore = usePatientStore()
const router = useRouter()

const loadLogs = async() => {
    try {
        await logStore.fetchLogs()
    } catch (e) {
        console.log("Error loading patients")
    }
    
}

const goToProfile = (id) => {
    router.push("/pacientes/"+id)
}

const getPatient = (id) => {
    const patient = patientStore.getPatientFromStore(id)
    if (patient == undefined){
        console.log("Patient not found")
        return
    }
    return patient
}

const toDate = (value) => {
    const date = new Date(value)
    return date.toLocaleString()
}

onMounted(() => {
    loadLogs()
})
</script>