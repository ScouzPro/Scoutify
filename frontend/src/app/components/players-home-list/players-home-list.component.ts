import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../player-service.service';

@Component({
  selector: 'app-players-home-list',
  templateUrl: './players-home-list.component.html',
  styleUrls: ['./players-home-list.component.css']
})
export class PlayersHomeListComponent implements OnInit {
  players: any[] = [];

  constructor(private playerService: PlayerServiceService) { }

  ngOnInit(): void {
    this.loadPlayers();
  }

  async loadPlayers() {
    this.players = await this.playerService.getPlayerFollowed();
  }
}