import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerServiceService } from '../../service/player-service.service'; // Asegúrate de importar el servicio correctamente
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-player1',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './button-player1.component.html',
  styleUrls: ['./button-player1.component.css']
})
export class ButtonPlayer1Component implements OnInit {
  players: any[] = [];
  selectedPlayerId: string | null = null; // Variable para almacenar el ID del jugador seleccionado
  
  constructor(private router: Router, private playerService: PlayerServiceService) { }

  ngOnInit(): void {
    console.log('Probando botón');
    this.getPlayers();
  }

  getPlayers() {
    fetch('http://localhost:3001/player')
      .then(response => response.json())
      .then(data => {
        this.players = data;
      })
      .catch(error => {
        console.error('Error al obtener los jugadores', error);
      });
  }

  viewPlayerDetails(id: string) {
    if (id) {
      // Guardar el ID del jugador seleccionado
      this.selectedPlayerId = id;
      
      this.playerService.getPlayerById(id).then(player => {
        if (player) {
          this.router.navigate(['/graph'], { queryParams: { id } });
        } else {
          console.error('No se pudo encontrar al jugador con el ID:', id);
        }
      }).catch(error => {
        console.error('Error al obtener la información del jugador:', error);
      });
    } else {
      console.error('El ID del jugador es indefinido o nulo');
    }
  }

  modalOpen: boolean = false;

  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }
}
