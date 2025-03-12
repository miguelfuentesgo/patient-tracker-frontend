<template>
  <v-container>
    <div class="no-logs" v-if="logs.length == 0">
      <p>No hay seguimientos para este paciente</p>
    </div>
    <v-timeline v-else align="start" class="time-line">
      <v-timeline-item v-for="log in logs" :key="log.id">
        <div>
          <div class="text-h6">{{toDate(log.date)}}</div>
          <p>
            {{ log.note }}
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
    
  </v-container>  
  
  </template>

  <style lang="scss" scoped>
    .time-line{
      margin: auto 20px;
    }

    .no-logs{
      display: flex;
      justify-content: center;
      align-content: center;
    }
</style>

  <script setup lang="ts">
  import { ref, watch, onMounted, defineProps } from 'vue';
    import type { Log } from '@/services/types';
  import { useLogStore } from '~/store/log.store';
  
  const props = defineProps<{
    patientId: number;
  }>();
  
  const logStore = useLogStore();
  const logs = ref<Log[]>([]);
  

  const loadLogs = async() => {
    logs.value = await logStore.getLogsFromPatientId(props.patientId);
  };

  const toDate = (value) => {
    const date = new Date(value)
    return date.toLocaleString()
}
  
  onMounted(() => {
    loadLogs();
  });
  

  watch(() => props.patientId, () => {
    loadLogs();
  });

  watch(() => logStore.logs, () => loadLogs(), { deep: true });
  </script>