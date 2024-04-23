
import { Injectable } from '@angular/core';
import axios, {AxiosResponse} from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  constructor() { }

  async getPlayerMetrics(playerId: string): Promise<any> {
    try {
<<<<<<< HEAD
      const response = await axios.get(`http://localhost:3001/metrics/${playerId}`);
=======
      const response = await axios.get(`https://scouzpro-znd8.onrender.com/metrics/${playerId}`);
>>>>>>> main
      
      
      // Verifica si la respuesta es un objeto
      if (typeof response.data === 'object' && !Array.isArray(response.data)) {
        // Si la respuesta es un objeto, envuélvelo en un array
        const formattedData = [response.data];
        return formattedData;
      } else {
        // Si la respuesta es un array o cualquier otro tipo, devuelve la respuesta como está
        return response.data;
      }
      
    } catch (error) {
      console.error(error);
      return []; // Retorna un arreglo vacío en caso de error
    }
  }

  async submitMetrics(formData: any): Promise<any> {
    try {
<<<<<<< HEAD
      const response = await axios.post('http://localhost:3001/metrics', formData);
=======
      const response = await axios.post('https://scouzpro-znd8.onrender.com/metrics', formData);
>>>>>>> main
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  async editPlayerMetrics(playerId: string, updatedMetrics: any): Promise<any> {
    try {
<<<<<<< HEAD
      const response = await axios.put(`http://localhost:3001/metrics/${playerId}`, updatedMetrics);
=======
      const response = await axios.put(`https://scouzpro-znd8.onrender.com/metrics/${playerId}`, updatedMetrics);
>>>>>>> main
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deletePlayerMetrics(_id: string): Promise<any> {
    try {
      const options = {
        headers: {
          'auth': localStorage.getItem('token admin')!
        }
      }
<<<<<<< HEAD
      const response = await axios.delete(`http://localhost:3001/metrics/${_id}`, options);
=======
      const response = await axios.delete(`https://scouzpro-znd8.onrender.com/metrics/${_id}`, options);
>>>>>>> main
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getPlayerMetricsById(playerId: string): Promise<any> {
    try {
<<<<<<< HEAD
      const response = await axios.get(`http://localhost:3001/metrics/${playerId}`);      
=======
      const response = await axios.get(`https://scouzpro-znd8.onrender.com/metrics/${playerId}`);      
>>>>>>> main
      return response.data;
    } catch (error) {
      console.error(error);
      return []; // Retorna un arreglo vacío en caso de error
    }
  }
}

