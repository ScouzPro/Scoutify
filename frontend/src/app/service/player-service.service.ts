import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor() { }

  async CreatePlayer(newPlayer: any) {
    try {
      // Aquí puedes incluir solo los campos que deseas enviar al servidor
      // jejeje
      const playerData = {
        name: newPlayer.name,
        age: newPlayer.age,
        actualTeam: newPlayer.actualTeam,
        photo: newPlayer.photo,
        dorsal: newPlayer.dorsal,
        nationality: newPlayer.nationality,
        position: newPlayer.position,
        weight: newPlayer.weight,
        height: newPlayer.height,
        strongFoot: newPlayer.strongFoot
      };

      const response = await axios.post('http://localhost:3001/player', playerData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getPlayerFollowed(): Promise<any> {
    try {
      const response = await axios.get('http://localhost:3001/player');
      // Filtrar los campos que necesitas del JSON
      const filteredData = response.data.map((player: any) => ({
        name: player.name,
        actualTeam: player.actualTeam,
        age:player.age,
        id:player._id,
        photo: player.photo,
        weight: player.weight,
        nationality: player.nationality,
        height:player.height,
        strongFoot:player.strongFoot
      }));
      return filteredData;
    } catch (error) {
      console.error(error);
      return []; // Retorna un arreglo vacío en caso de error
    }
  }
  async getPlayerById(playerId: string): Promise<any> {
    
    try {
      const response = await axios.get(`http://localhost:3001/player/${playerId}`);
      console.log('Datos del jugador obtenidos:', response.data); // Agregar este console.log
      
      return response.data; // Devuelve directamente los datos de la respuesta
    } catch (error) {
      console.error(error);
      return null; // Retorna null en caso de error
    }
}
}  