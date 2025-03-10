export interface Patient {
    id?: number;
    name: string;
    email: string;
    phone: string;
    disease: string;
    logs?: Log[];
  }
  
  export interface Log {
    id?: number;
    patient: number;
    note: string;
    date?: string;
  }
  
  export interface PatientValidation {
    exists: boolean;
    data?: any;
  }