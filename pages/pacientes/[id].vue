<template>
    <div class="page-container">
        <h1>{{patient?.name}}</h1>
       
            <v-container class="patient-info">
                <v-row>
                  <v-col cols="12" md="6">
                    <span class="label"> Correo eléctrónico</span> <h2>{{ patient?.email }}</h2>
                  </v-col>
                  <v-col cols="12" md="6">
                    <span class="label"> Télefono celular</span> <h2> {{ patient?.phone }} </h2>
                  </v-col>
                </v-row>
                
                
                  <v-row>
                    <v-col cols="12" md="6">
                      <span class="label"> Enfermedad</span> <h2>{{ patient?.disease }}</h2>
                    </v-col>
                  </v-row>
            </v-container>
            <h2>Seguimientos</h2>
            <LogsTimeLine v-if="patient" :patientId="patient.id" />
            <NewLogDialog v-if="patient" :patientId="patient.id" />    

    </div>
</template>

<style lang="scss" scoped>
 .patient-info {
    border: 1px solid gray;
 }
</style>

<script setup>
import { usePatient } from '@/composables/usePatient';
import LogsTimeLine from '@/components/logs/LogsTimeLine';
import NewLogDialog from '~/components/logs/NewLogDialog';

const route = useRoute()


const { getPatientById } = usePatient()
const patient = ref(null)


onMounted(async () => {
    console.log("mounted")
    console.log(Number(route.params.id))
  const result = await getPatientById(Number(route.params.id));
  patient.value = result;
});



</script>