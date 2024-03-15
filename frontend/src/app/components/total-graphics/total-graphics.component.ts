// import { Component, OnInit, Input } from '@angular/core';
// import { Chart} from 'chart.js/auto';
// import { CommonModule } from '@angular/common';
// import { MetricsService } from '../../service/metrics.service';

// @Component({
//   selector: 'app-total-graphics',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './total-graphics.component.html',
//   styleUrl: './total-graphics.component.css'
// })
// export class TotalGraphicsComponent implements OnInit {
//   @Input() playerId:string = '';
//   public chart: Chart={} as Chart;
//    playerMetrics: any = {};
  

//   constructor(private playerMetricService: MetricsService) {}

//   async ngOnInit(){
//    await this.generateChart();
//   }

//   async generateChart() {
//     try {
//       const allMetrics = await this.playerMetricService.getPlayerMetricsById(this.playerId);
//       this.playerMetrics = allMetrics;
  
//       // Verificar si hay elementos en playerMetrics
//       if (this.playerMetrics.length > 0) {
//         // Acceder al primer objeto en playerMetrics
//         const primerObjeto = this.playerMetrics[0];
        
//         // Verificar si el primer objeto tiene la propiedad principalSkills
//         if (primerObjeto.principalSkills && primerObjeto.principalSkills.length > 0) {
//           // Acceder al primer objeto dentro de principalSkills y luego al valor totalPrincipalSkills
//           const totalPrincipalSkills = primerObjeto.principalSkills[0].totalPrincipalSkills;
//           console.log('Valor de totalPrincipalSkills:', totalPrincipalSkills);
//         } else {
//           console.log('El primer objeto en playerMetrics no tiene la propiedad principalSkills o está vacía.');
//         }
  
//         // Verificar si el primer objeto tiene la propiedad tacticalSkills
//         if (primerObjeto.tacticalSkills && primerObjeto.tacticalSkills.length > 0) {
//           // Acceder al primer objeto dentro de tacticalSkills y luego al valor tacticalTotalSkills
//           const totalTacticalSkills = primerObjeto.tacticalSkills[0].totalTacticalSkills;
//           console.log('Valor de totalTacticalsSkills:', totalTacticalSkills);
//         } else {
//           console.log('El primer objeto en playerMetrics no tiene la propiedad tacticalSkills o está vacía.');
//         }
  
//         // Verificar si el primer objeto tiene la propiedad physicalSkills
//         if (primerObjeto.physicalSkills && primerObjeto.physicalSkills.length > 0) {
//           // Acceder al primer objeto dentro de physicalSkills y luego al valor physicalTotalSkills
//           const totalPhysicalSkills = primerObjeto.physicalSkills[0].totalPhysicalSkills;
//           console.log('Valor de totalPhysicalSkills:', totalPhysicalSkills);
//         } else {
//           console.log('El primer objeto en playerMetrics no tiene la propiedad physicalSkills o está vacía.');
//         }
//         console.log(this.playerMetrics)
//       } else {
//         console.log('El array playerMetrics está vacío.');
//       }
//     } catch (error) {
//       console.error('Error al obtener las métricas del jugador:', error);
//     }
// }
// }

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
