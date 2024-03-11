import { Component} from '@angular/core';
import { PlayerServiceService } from '../../service/player-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-new-player',
  templateUrl: './modal-new-player.component.html',
  standalone: true,
  imports :[FormsModule],
  styleUrls: ['./modal-new-player.component.css']
})
export class ModalNewPlayerComponent{

  constructor(private playerService: PlayerServiceService) { }

  showModal() {
    const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

  async submitForm(form: any) {
    if (form.valid) {
      const newPlayer = form.value;
      await this.playerService.CreatePlayer(newPlayer);
      this.closeModal();
    }
  }

  closeModal() {
    const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }
}