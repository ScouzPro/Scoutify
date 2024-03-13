import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderDetailComponent } from "../../components/header-detail/header-detail.component";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayerServiceService } from '../../service/player-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  imports: [NavbarComponent, HeaderDetailComponent, CommonModule]
})
export class DetailComponent implements OnInit {
  player: any;

  constructor(
    private route: ActivatedRoute,
    private playerService: PlayerServiceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const playerId = params['id'];
      this.loadPlayerDetails(playerId);
    });
  }

  loadPlayerDetails(playerId: string) {
    this.playerService.getPlayerById(playerId)
      .then(player => {
        this.player = player;
      })
      .catch(error => {
        console.error('Error loading player details:', error);
      });
  }
}