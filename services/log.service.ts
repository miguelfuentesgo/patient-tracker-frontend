import api from './api';
import type { Log } from './types';

export const getLogs = async (): Promise<Log[]> => {
  const response = await api.get<Log[]>('/logs/');
  return response.data;
};

export const getLogById = async (id: number): Promise<Log> => {
  const response = await api.get<Log>(`/logs/${id}/`);
  return response.data;
};

export const addLog = async (log: Log): Promise<Log> => {
  const response = await api.post<Log>('/logs/', log);
  return response.data;
};

export const updateLogById = async (id: number, log: Log): Promise<Log> => {
  const response = await api.put<Log>(`/logs/${id}/`, log);
  return response.data;
};


export const deleteLogById = async (id: number): Promise<void> => {
  await api.delete(`/logs/${id}/`);
};
