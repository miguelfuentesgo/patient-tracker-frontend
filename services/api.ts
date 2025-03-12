import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.72.144.115:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;