import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerServiceService } from '../../service/player-service.service';
import { MetricsService } from '../../service/metrics.service';
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-new-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {
  playerId: string = '';
  player: any[] = [];
  metrics:any[];

  constructor(private route: ActivatedRoute, private playerService: PlayerServiceService, private metricsService: MetricsService) { 
    this.metrics =[]
  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(params => {
      this.playerId = params['id'];
    });
    
    await this.getPlayerDetails();
    await this.getPlayerMetrics(this.playerId);
  }

  async getPlayerDetails() {
    try {
      this.player = await this.playerService.getPlayerById(this.playerId);
      console.log(this.player);
    } catch (error) {
      console.error(error);
    }
  }

  async getPlayerMetrics(playerId: string): Promise<void> {
    try {
      this.metrics = await this.metricsService.getPlayerMetrics(playerId);
      console.log('Datos de métricas:', this.metrics);
    } catch (error) {
      console.error(error);
      this.metrics = []; // Asigna un arreglo vacío en caso de error
    }
  }
}



