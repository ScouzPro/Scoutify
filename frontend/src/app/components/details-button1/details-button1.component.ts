import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerServiceService } from '../../service/player-service.service'; // Asegúrate de importar el servicio correctamente
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-button1',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './details-button1.component.html',
  styleUrls: ['./details-button1.component.css']
})
export class DetailsButton1Component implements OnInit {
  player: any; // Variable para almacenar la información del jugador

  constructor(private route: ActivatedRoute, private playerService: PlayerServiceService) { }

  ngOnInit(): void {
    // Recuperar el ID del jugador de los parámetros de la ruta
    this.route.queryParams.subscribe(params => {
      const playerId = params['id'];
      if (playerId) {
        // Obtener la información del jugador por su ID
        this.playerService.getPlayerById(playerId).then(player => {
          this.player = player;
        }).catch(error => {
          console.error('Error al obtener la información del jugador:', error);
        });
      }
    });
  }
}

