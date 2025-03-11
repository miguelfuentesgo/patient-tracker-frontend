import { usePatientStore } from '@/store/patient.store';
import type { Patient } from '@/services/types';

export const usePatient = () => {
  const patientStore = usePatientStore();

  const getPatientById = async(id: number): Promise<Patient | undefined> => {
    return await patientStore.getPatientFromDB(id)
  };

  return {
    getPatientById
  };
};