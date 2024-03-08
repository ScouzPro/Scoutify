import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  constructor() { }

  async CreatePlayer(newPlayer: any) {
    try {
      const response = await axios.post('http://localhost:3001/players', newPlayer);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

