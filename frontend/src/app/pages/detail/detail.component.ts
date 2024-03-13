import { NavbarComponent } from "../../components/navbar/navbar.component";

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerServiceService } from '../../service/player-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  imports: [NavbarComponent,  CommonModule]
})
export class DetailComponent implements OnInit {
  player: any;
playerId: any;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const playerId = params['id']; // Utiliza directamente playerId aquí
      console.log('playerId:', playerId); // Imprime el playerId
      this.loadPlayerDetails(playerId);
    });
  }

  async loadPlayerDetails(playerId: string) {
    try {
      const response = await this.playerService.getPlayerById(playerId);
      if (response && response.length > 0) { // Verifica si hay al menos un elemento en el array
        const playerData = response[0]; // Accede al primer elemento del array
        this.player = {
          name: playerData.name,
          actualTeam: playerData.actualTeam,
          age: playerData.age,
          id: playerData._id,
          photo: playerData.photo,
          weight: playerData.weight,
          nationality: playerData.nationality,
          height: playerData.height,
          dorsal: playerData.dorsal,
          strongFoot: playerData.strongFoot
        };
        console.log('Datos del jugador cargados:', this.player);
      } else {
        console.error('No se encontraron datos para el jugador con ID:', playerId);
      }
    } catch (error) {
      console.error('Error al cargar los detalles del jugador:', error);
    }
  }
  
  
}
