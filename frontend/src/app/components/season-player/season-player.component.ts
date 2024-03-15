import { Component, OnInit,Input } from '@angular/core';
import { SeasonService } from '../../service/season-service.service'; 
import { CommonModule } from '@angular/common';// Asegúrate de importar el servicio SeasonService

@Component({
  selector: 'app-season-player',
  standalone: true,
  templateUrl: './season-player.component.html',
  styleUrls: ['./season-player.component.css'],
  imports: [CommonModule]
})
export class SeasonPlayerComponent implements OnInit {
  @Input() playerId: string = '';// Variable para almacenar el ID del jugador
  seasonData: any = {}; // Variable para almacenar los datos de temporada

  constructor(private seasonService: SeasonService) { }

  ngOnInit(): void {
    // Llamar al método para obtener los datos de temporada cuando el componente se inicializa
    this.getSeasonValues();
  }

  async getSeasonValues(): Promise<void> {
    try {
      // Llamar al servicio para obtener los datos de temporada
      const response = await this.seasonService.getSeasonValues(this.playerId);
      this.seasonData = response;
      console.log('Objeto para la tabla season',this.seasonData);
    } catch (error) {
      console.error('Error fetching season data:', error);
    }
  }

  async updateSeasonPlayer(updateSeason: any): Promise<void> {
    try {
      // Llamar al servicio para actualizar los datos de temporada del jugador
      const response = await this.seasonService.updateSeasonPlayer(this.playerId, updateSeason);
      // Actualizar los datos de temporada después de la actualización
      this.getSeasonValues();
    } catch (error) {
      console.error('Error updating season data:', error);
    }
  }
}

  


