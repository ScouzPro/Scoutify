import { Component, OnInit } from '@angular/core';
import { HeaderSecondaryComponent } from '../../components/header-secondary/header-secondary.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PlayerServiceService } from '../../service/player-service.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-players',
    standalone: true,
    templateUrl: './players.component.html',
    styleUrls: ['./players.component.css'],
    imports: [HeaderSecondaryComponent,  NavbarComponent, FooterComponent, CommonModule, NgxPaginationModule, FormsModule, RouterModule]
})
export class PlayersComponent implements OnInit {
    playersFollowed: any[] = [];
    filteredPlayers: any[] = [];
    equipoFiltro: string = '';
    posicionFiltro: string = '';
    edadFiltro: string | null = null;
    nacionalidadFiltro: string[] = [];
    pesoFiltro: string | null = null;
    pieDominanteFilter: string | null = null;
    estaturaFiltro: string | null = null;
    pageSize = 6; // Número de jugadores por página (3 filas x 3 columnas)
    currentPage = 1; // Página actual
    nacionalidadesUnicas: string[] = ['España', 'Venezuela', 'Ecuador', 'Perú', 'México']; // Lista de nacionalidades
    rangosEdad: string[] = ['18-25', '26-30', '31-35', '36-40', '41+']; // Lista de rangos de edad
    rangosPeso: string[] = ['45-60', '61-80', '81-100', '101-130']; // Lista de rangos de peso
    rangosEstatura: string[] = ['140-160', '161-180', '181-200']; // Lista de rangos de estatura
    piesDominantes: string[] = ['Derecho', 'Izquierdo', 'Ambos']; // Lista de pies dominantes

    constructor(private playerService: PlayerServiceService) {}

    ngOnInit() {
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

            if (this.equipoFiltro && player.actualTeam.toLowerCase() !== this.equipoFiltro.toLowerCase()) {
                pasaFiltro = false;
            }

            if (this.posicionFiltro && player.position.toLowerCase() !== this.posicionFiltro.toLowerCase()) {
                pasaFiltro = false;
            }

            if (this.nacionalidadFiltro.length > 0 && !this.nacionalidadFiltro.includes(player.nationality)) {
                pasaFiltro = false;
            }

            if (this.edadFiltro) {
                const [edadMin, edadMax] = this.edadFiltro.split('-').map(Number);
                if (player.age < edadMin || player.age > edadMax) {
                    pasaFiltro = false;
                }
            }

            if (this.pesoFiltro) {
                const [pesoMin, pesoMax] = this.pesoFiltro.split('-').map(Number);
                if (player.weight < pesoMin || player.weight > pesoMax) {
                    pasaFiltro = false;
                }
            }

            if (this.estaturaFiltro) {
                const [estaturaMin, estaturaMax] = this.estaturaFiltro.split('-').map(Number);
                if (player.height < estaturaMin || player.height > estaturaMax) {
                    pasaFiltro = false;
                }
            }

            if (this.pieDominanteFilter && player.strongFoot.toLowerCase() !== this.pieDominanteFilter.toLowerCase()) {
                pasaFiltro = false;
            }

            return pasaFiltro;
        });

        console.log('Datos filtrados:', this.filteredPlayers); // Mostrar los datos filtrados en la consola
    }

    limpiarFiltros() {
        this.equipoFiltro = '';
        this.posicionFiltro = '';
        this.edadFiltro = null;
        this.nacionalidadFiltro = [];
        this.pesoFiltro = null;
        this.pieDominanteFilter = null;
        this.estaturaFiltro = null;

        // Volver a filtrar con los filtros limpios
        this.filtrarJugadores();
    }
}