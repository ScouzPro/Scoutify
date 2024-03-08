import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import axios from 'axios'; // Importa Axios

@Component({
  selector: 'app-player-metrics',
  templateUrl: './pruebaMetrics.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class PlayerMetricsComponent implements OnInit {

  playerMetrics: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.getPlayerMetrics();
  }

  getPlayerMetrics(): void {
    axios.get('http://localhost:3001/metrics/')
      .then(response => {
        this.playerMetrics = response.data;
        console.log('Player metrics:', this.playerMetrics);
      })
      .catch(error => {
        console.error('Error fetching player metrics:', error);
      });
  }
}
