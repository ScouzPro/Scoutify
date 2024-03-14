import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from  'chart.js/auto'
import { ModalNewReportComponent } from '../modal-new-report/modal-new-report.component';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [ModalNewReportComponent],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.css'
})
export class GraphComponent implements OnInit{


public chart!: Chart;

ngOnInit(): void {
  
  const data = {
    labels: [
      'Shot',
      'Heading',
      'Association',
      'Right Foot',
      'Left Foot',
      'Long Passes',
      'Dribbling',
      'Reflexes',
      'Crosses'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 90, 81, 56, 55, 40, 76, 98],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'My Second Dataset',
      data: [28, 48, 40, 19, 96, 27, 100, 78, 54],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

this.chart = new Chart("chart",{
  type:'radar' as ChartType,
  data,
}) 

}
}
