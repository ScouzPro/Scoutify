import { Component } from '@angular/core';
import { ModalNewPLayerComponent } from '../../components/modal-new-player/modal-new-player.component';
@Component({
  selector: 'app-players',
  standalone: true,
  imports: [ ModalNewPLayerComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {

}
