import { Component, OnInit } from '@angular/core';
import { HeaderSecondary2Component } from '../../components/header-secondary2/header-secondary2.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PlayerServiceService } from '../../service/player-service.service';
import { MetricsService } from '../../service/metrics.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-reports',
    standalone: true,
    templateUrl: './reports.component.html',
    styleUrl: './reports.component.css',
    imports: [HeaderSecondary2Component, NavbarComponent, FooterComponent, CommonModule]
})
export class ReportsComponent implements OnInit {

    players: any[] = [];
    playerMetricsMap: Map<string, any[]> = new Map<string, any[]>(); // Mapa para almacenar las métricas de cada jugador
    nuevasMetricas: any;
    constructor(private playerService: PlayerServiceService, private playerMetricService: MetricsService) { }
  
    ngOnInit(): void {
      this.loadPlayers();
    }
  
    async loadPlayers() {
      try {
        this.players = await this.playerService.getPlayerFollowed();
        // Cargar métricas para cada jugador
        for (const player of this.players) {
          const metrics = await this.playerMetricService.getPlayerMetrics(player.id);
          this.playerMetricsMap.set(player.id, metrics);
          console.log(metrics);
        }
      } catch (error) {
        console.error(error);
      }
    }
  
    getPlayerMetrics(playerId: string): any[] {
      return this.playerMetricsMap.get(playerId) || [];
    }

    
    formatCreatedAt(dateString: string): string {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Agrega un 0 al principio si el mes es de un solo dígito
        const day = date.getDate().toString().padStart(2, '0'); // Agrega un 0 al principio si el día es de un solo dígito
        return `${year}-${month}-${day}`;
      }
      async eliminarMetricas(playerId: string) {
        try {
          // Obtener las métricas correspondientes al jugador
          const metrics = this.playerMetricsMap.get(playerId);
          if (metrics && metrics.length > 0) {
            const metricId = metrics[0]._id; // Aquí asumo que solo hay una métrica por jugador
            // Llama al servicio para eliminar las métricas utilizando el _id de las métricas
            await this.playerMetricService.deletePlayerMetrics(metricId);
            // Vuelve a cargar los jugadores sin las métricas eliminadas
            await this.loadPlayers();
          }
        } catch (error) {
          console.error('Error al eliminar métricas:', error);
        }
      }
  }