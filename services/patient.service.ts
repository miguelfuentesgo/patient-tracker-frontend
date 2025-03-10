import api from './api';
import type { Patient, PatientValidation } from './types';


export const getPatients = async (): Promise<Patient[]> => {
  const response = await api.get<Patient[]>('/patients/');
  return response.data;
};


export const getPatientById = async (id: number): Promise<Patient> => {
  const response = await api.get<Patient>(`/patients/${id}/`);
  return response.data;
};


export const addPatient = async (patient: Patient): Promise<Patient> => {
    console.log(`adding ${patient}`)
  const response = await api.post<Patient>('/patients/', patient);
  return response.data;
};

export const updatePatientById = async (id: number, patient: Patient): Promise<Patient> => {
  const response = await api.put<Patient>(`/patients/${id}/`, patient);
  return response.data;
};


export const deletePatientById = async (id: number): Promise<void> => {
  await api.delete(`/patients/${id}/`);
};


export const validatePatient = async (email: string): Promise<PatientValidation> => {
  const response = await api.get<PatientValidation>(`/validate/${email}/`);
  return response.data;
};
