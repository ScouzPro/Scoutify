import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
import { MetricsService } from '../../service/metrics.service';

@Component({
  selector: 'app-total-graphics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './total-graphics.component.html',
  styleUrl: './total-graphics.component.css'
})
export class TotalGraphicsComponent implements OnInit {
  @Input() playerId: string = '';
  @ViewChild('donutChart') donutChart!: ElementRef;
  public chart: Chart<'doughnut', number[], string> | null = null;
  playerMetrics: any = {};

  constructor(private playerMetricService: MetricsService) {}

  async ngOnInit() {
    await this.generateChart();
  }

  async generateChart() {
    try {
      const allMetrics = await this.playerMetricService.getPlayerMetricsById(this.playerId);
      this.playerMetrics = allMetrics;

      let totalPrincipalSkills = 0;
      let totalTacticalSkills = 0;
      let totalPhysicalSkills = 0;

      if (this.playerMetrics.length > 0) {
        const primerObjeto = this.playerMetrics[0];

        if (primerObjeto.principalSkills && primerObjeto.principalSkills.length > 0) {
          totalPrincipalSkills = primerObjeto.principalSkills[0].totalPrincipalSkills;
        }

        if (primerObjeto.tacticalSkills && primerObjeto.tacticalSkills.length > 0) {
          totalTacticalSkills = primerObjeto.tacticalSkills[0].totalTacticalSkills;
        }

        if (primerObjeto.physicalSkills && primerObjeto.physicalSkills.length > 0) {
          totalPhysicalSkills = primerObjeto.physicalSkills[0].totalPhysicalSkills;
        }
      }

      // Configurar los datos para el gráfico
      const data = {
        labels: ['Principal Skills', 'Tactical Skills', 'Physical Skills'],
        datasets: [{
          data: [totalPrincipalSkills, totalTacticalSkills, totalPhysicalSkills],
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }],
        hoverOffset: 4
      }; 

      // Crear el gráfico de donut
      this.chart = new Chart("chart", {
        type: 'doughnut',
        data: data,
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top'
            }
          },
          
        }
      });

    } catch (error) {
      console.error('Error al obtener las métricas del jugador:', error);
    }
  }
}
