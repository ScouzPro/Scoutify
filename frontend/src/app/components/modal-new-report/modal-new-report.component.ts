import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from '../../service/player-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-modal-new-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-new-report.component.html',
  styleUrl: './modal-new-report.component.css'
})
export class ModalNewReportComponent implements OnInit {
  players: any[]  = [];
  isModalOpen: boolean = false;
  
  constructor(private playerService: PlayerServiceService) {}

  ngOnInit(): void {
      this.getPlayerData();
  }

  async getPlayerData(){
    this.players = await this.playerService.getPlayerFollowed();
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
