import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Log } from '~/services/types';
import { getLogs, addLog, getLogById, deleteLogById, updateLogById } from '~/services/log.service';

export const useLogStore = defineStore('log', () => {
  const logs = ref<Log[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);


  const sortLogs = () => {
    logs.value.sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });
  };

  const fetchLogs = async () => {
    loading.value = true;
    try {
      logs.value = await getLogs();
      sortLogs()
    } catch (err) {
      error.value = 'Error loading logs';
    } finally {
      loading.value = false;
    }
  };

  const createLog = async (log: Log) => {
    console.log("CREATING LOG", log)
    try {
      await addLog(log);
      await fetchLogs()
    } catch (err) {
      error.value = 'Error creating log';
    }
  };

  const getLog = async(id:number) => {
    try {
      const log = await getLogById(id);
      return log
    } catch (err) {
      error.value = 'Error obtaining log';
    }
  }

  const removeLog = async (id: number) => {
    try {
      await deleteLogById(id);
      logs.value = logs.value.filter(l => l.id !== id);
    } catch (err) {
      error.value = 'Error deleting log'
    }
  };

  const updateLog = async (id: number, updatedLog: Log) => {
    try {
      await updateLogById(id, updatedLog);
      const index = logs.value.findIndex(l => l.id === id);
      if (index !== -1) {
        logs.value[index] = updatedLog;
      }
    } catch (err) {
        error.value = 'Error updating log'
    }
  }

  const getLogsFromPatientId = async(patientId: number): Promise<Log[]> => {
    await fetchLogs()
    return logs.value.filter(log => log.patient === patientId)
  }

  return {
    logs,
    loading,
    error,
    fetchLogs,
    createLog,
    removeLog,
    getLog,
    updateLog,
    getLogsFromPatientId
  };
});
