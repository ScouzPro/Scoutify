import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../../service/player-service.service';
import { MetricsService } from '../../service/metrics.service';
import { CommonModule } from '@angular/common';
import { Chart} from 'chart.js/auto';
@Component({
  selector: 'app-metrics-graphics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metrics-graphics.component.html',
  styleUrl: './metrics-graphics.component.css',  
})
export class MetricsGraphicsComponent implements OnInit {

  public chart: Chart={} as Chart;
  public playerMetricsMap: Map<string, any> = new Map<string, any>(); // Mapa para almacenar las métricas de los jugadores

  constructor(private playerService: PlayerServiceService, private playerMetricService: MetricsService) {}

  async ngOnInit() {
    await this.loadPlayers();
    this.generateChart();
  }

  async loadPlayers() {
    try {
      const players = await this.playerService.getPlayerFollowed();
      for (const player of players) {
        const metrics = await this.playerMetricService.getPlayerMetrics(player.id);
        this.playerMetricsMap.set(player.id, metrics);
        
      }
    } catch (error) {
      console.error(error);
    }
  }

  generateChart(): void {
    // Obtener datos para el gráfico
    const labels = ['1ºSemana', '2ºSemana', '3ºSemana'];
    const datasets: any[] = [];
  
    // Obtener la lista de jugadores
    this.playerService.getPlayerFollowed().then(players => {
      // Recorrer las métricas de los jugadores
      this.playerMetricsMap.forEach((metrics, playerId) => {
        // Encontrar el jugador correspondiente en la lista de jugadores
        const player = players.find((player:any) => player.id === playerId);
        const playerName = player ? player.name : 'Nombre Desconocido';
  
        // Obtener los valores de averageTotalSkills
        const data = metrics.map((metric: any) => metric.averageTotalSkills);
  
        datasets.push({
          label: playerName,
          data: data,
          fill: false,
          borderColor: this.getRandomColor(),
          tension: 0.5
        });
      });
  
      // Configurar el objeto de datos del gráfico
      const data = {
        labels: labels,
        datasets: datasets
      };
  
      // Crear el gráfico
      this.chart = new Chart("myChart", {
        type: 'line',
        data: data,
        options: {} // Puedes agregar opciones personalizadas aquí si es necesario
      });
    }).catch(error => {
      console.error('Error al obtener la lista de jugadores:', error);
    });
  }

  // Método para generar un color aleatorio para los bordes del gráfico
  getRandomColor(): string {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }
}