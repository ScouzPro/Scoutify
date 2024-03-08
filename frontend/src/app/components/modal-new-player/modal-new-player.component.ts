// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-modal-new-player',
//   standalone: true,
//   imports: [],
//   templateUrl: './modal-new-player.component.html',
//   styleUrl: './modal-new-player.component.css'
// })
// export class ModalNewPLayerComponent {

// }

import { Component, AfterViewInit } from '@angular/core';
import { PlayerServiceService } from '../../service/player-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-new-player',
  templateUrl: './modal-new-player.component.html',
  standalone: true,
  imports :[FormsModule],
  styleUrls: ['./modal-new-player.component.css']
})
export class ModalNewPlayerComponent implements AfterViewInit {

  constructor(private playerService: PlayerServiceService) { }

  ngAfterViewInit() {
    // Llamar a showModal() después de que Angular haya renderizado el componente
    this.showModal();
  }

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


