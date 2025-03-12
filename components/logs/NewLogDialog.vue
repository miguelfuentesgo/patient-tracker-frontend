<template>
    <div class="pa-4 text-center">
        <v-dialog
          v-model="dialog"
          max-width="600"
        >
          <template v-slot:activator="{ props: activatorProps }">
            <NewLogButton v-bind="activatorProps"/>
          </template>
    
          <v-card
            prepend-icon="mdi-account"
            title="Agrega una nota para el paciente"
          >
            <v-card-text>
              <v-card-text>
            <v-textarea label="Nueva nota" v-model="newLog"></v-textarea>
        </v-card-text>
            </v-card-text>
    
            <v-divider></v-divider>
    
            <v-card-actions>
              <v-spacer></v-spacer>
    
              <v-btn
                text="Cancelar"
                variant="plain"
                @click="closeDialog"
              ></v-btn>
    
              <v-btn
                text="Agregar"
                variant="tonal"
                @click="addNewLog"
                :loading="addingLog"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
</template>

<script setup>

import { ref } from 'vue'

import { defineProps } from 'vue';
import NewLogButton from '@/components/logs/NewLogButton';
import { useLogStore } from '~/store/log.store';
import { useRouter } from 'vue-router';

const newLog = ref('')
const props = defineProps(['patientId']);
const dialog = ref(false)
const addingLog = ref(false)
const router = useRouter()
const logStore = useLogStore()

const closeDialog = () => {
  dialog.value = false
};

const addNewLog = async () => {

  if (!props.patientId) {
    console.error('patientId is undefined');
    return;
  }
  addingLog.value = true;
  try {
    await logStore.createLog({
      note: newLog.value,
      patient: Number(props.patientId),
    });
    newLog.value = ''; // Limpiar el campo después de crear
    closeDialog();
    //router.go(0)
  } catch (e) {
    console.error('Error creating log:', e);
  } finally {
    addingLog.value = false;
  }

}

</script>