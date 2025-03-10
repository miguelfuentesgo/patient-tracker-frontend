import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Log } from '~/services/types';
import { getLogs, addLog, getLogById, deleteLogById, updateLogById } from '~/services/log.service';

export const useLogStore = defineStore('log', () => {
  const logs = ref<Log[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchLogs = async () => {
    loading.value = true;
    try {
      logs.value = await getLogs();
    } catch (err) {
      error.value = 'Error loading logs';
    } finally {
      loading.value = false;
    }
  };

  const createLog = async (log: Log) => {
    try {
      const newLog = await addLog(log);
      logs.value.push(newLog);
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

  return {
    logs,
    loading,
    error,
    fetchLogs,
    createLog,
    removeLog,
    getLog,
    updateLog
  };
});
