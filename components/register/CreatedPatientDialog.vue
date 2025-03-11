<template>
    <v-dialog
      v-model="modelValue"
      width="auto"
    >
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Ahora puede realizar seguimientos del paciente."
        title="Paciente registrado correctamente"
      >
        <template v-slot:actions>
            <v-btn
            class="ms-auto"
            text="Cancelar"
            @click="closeDialog"
          ></v-btn>
          <v-btn
            class="ms-auto"
            text="Ver pacientes"
            variant="tonal"
            @click="goToPatientProfile"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
</template>

<script setup>
import { defineProps, defineEmits} from 'vue';
import { useRouter} from 'vue-router'
const router = useRouter()
const props = defineProps("modelValue")
const emit = defineEmits(['update:modelValue'])
const closeDialog = () => {
  emit('update:modelValue', false);
};

const goToPatientProfile = () => { 
    router.push('/pacientes')
    }
</script>