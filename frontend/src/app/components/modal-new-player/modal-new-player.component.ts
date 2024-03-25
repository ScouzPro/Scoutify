import { Component} from '@angular/core';
import { PlayerServiceService } from '../../service/player-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

<<<<<<< HEAD
=======

>>>>>>> main
@Component({
  selector: 'app-modal-new-player',
  templateUrl: './modal-new-player.component.html',
  standalone: true,
  imports :[FormsModule, CommonModule],
  styleUrls: ['./modal-new-player.component.css']
})
export class ModalNewPlayerComponent{
<<<<<<< HEAD

=======
  
  modalPlayerCreated: boolean = false;
>>>>>>> main
  constructor(private playerService: PlayerServiceService) { }

  showModal() {
    const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }
<<<<<<< HEAD

=======
 openCreatePlayer() {
    this.modalPlayerCreated = true;
  }
>>>>>>> main
  async submitForm(form: any) {
    if (form.valid) {
      const newPlayer = form.value;
      await this.playerService.CreatePlayer(newPlayer);
<<<<<<< HEAD
      this.closeModal();
    }
  }

=======
      this.openCreatePlayer();    
      
      
    }
  }
>>>>>>> main
  closeModal() {
    const modal = document.getElementById('my_modal_4') as HTMLDialogElement;
    if (modal) {
      modal.close();
<<<<<<< HEAD
=======
      
>>>>>>> main
    }
  }
}