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
  
    constructor(private playerService: PlayerServiceService) {}
  
    ngOnInit(): void {
      this.loadPlayersFollowed();
    }
  
    async loadPlayersFollowed() {
      try {
        this.playersFollowed = await this.playerService.getPlayerFollowed();
      } catch (error) {
        console.error("Error loading players followed:", error);
      }
    }
  }
