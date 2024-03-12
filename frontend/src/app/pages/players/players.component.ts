import { Component, OnInit } from '@angular/core';
import { HeaderSecondaryComponent } from '../../components/header-secondary/header-secondary.component';
import { HeaderDetailComponent } from '../../components/header-detail/header-detail.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PlayerServiceService } from '../../service/player-service.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-players',
    standalone: true,
    templateUrl: './players.component.html',
    styleUrl: './players.component.css',
    imports: [HeaderSecondaryComponent, HeaderDetailComponent, NavbarComponent, FooterComponent, CommonModule]
})
export class PlayersComponent implements OnInit {
    playersFollowed: any[] = [];
    filteredPlayers: any[] = [];
  equipoFiltro: string = '';
  posicionFiltro: string = '';
  edadFiltro: number | null = null;
  // Agrega más propiedades de filtro según sea necesario
  
    constructor(private playerService: PlayerServiceService) {}
  
    ngOnInit(): void {
      this.loadPlayersFollowed();
    }
  
    async loadPlayersFollowed() {
        try {
          this.playersFollowed = await this.playerService.getPlayerFollowed();
          this.filteredPlayers = this.playersFollowed; // Inicialmente, muestra todos los jugadores
        } catch (error) {
          console.error("Error loading players followed:", error);
        }
      }
    
      filtrarJugadores() {
        this.filteredPlayers = this.playersFollowed.filter(player => {
          let pasaFiltro: boolean = true;
    
          if (this.equipoFiltro && player.actualTeam !== this.equipoFiltro) {
            pasaFiltro = false;
          }
    
          if (this.posicionFiltro && player.position !== this.posicionFiltro) {
            pasaFiltro = false;
          }
    
          if (this.edadFiltro && player.age !== this.edadFiltro) {
            pasaFiltro = false;
          }
    
          // Agrega más condiciones para otros filtros según sea necesario
    
          return pasaFiltro;
        });
    }
   
  }