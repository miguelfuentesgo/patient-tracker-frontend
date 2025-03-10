import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Patient } from '~/services/types';
import { getPatients, addPatient, deletePatientById, getPatientById, updatePatientById } from '~/services/patient.service';

export const usePatientStore = defineStore('patient', () => {
  const patients = ref<Patient[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchPatients = async () => {
    loading.value = true;
    try {
      patients.value = await getPatients();
    } catch (err) {
      error.value = 'Error loading patients';
    } finally {
      loading.value = false;
    }
  };

  const createPatient = async (patient: Patient) => {
    try {
      console.log("Creating Patient store")
      const newPatient = await addPatient(patient);
      patients.value.push(newPatient);
    } catch (err) {
      error.value = 'Error creating patient: ' 
    }
  };

  const getPatient = async(id:number) => {
    try {
      const patient = await getPatientById(id);
      return patient
    } catch (err) {
      error.value = 'Error obtaining patient';
    }
  }

  const removePatient = async (id: number) => {
    try {
      await deletePatientById(id);
      patients.value = patients.value.filter(p => p.id !== id);
    } catch (err) {
      error.value = 'Error deleting patient'
    }
  };

  const updatePatient = async (id: number, updatedPatient: Patient) => {
    try {
      await updatePatientById(id, updatedPatient);
      const index = patients.value.findIndex(p => p.id === id);
      if (index !== -1) {
        patients.value[index] = updatedPatient;
      }
    } catch (err) {
        error.value = 'Error updating patient'
    }
  }

  return {
    patients,
    loading,
    error,
    fetchPatients,
    createPatient,
    removePatient,
    getPatient,
    updatePatient
  };
});
