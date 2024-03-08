import { Component } from '@angular/core';
import { ModalNewPlayerComponent} from '../../components/modal-new-player/modal-new-player.component';
@Component({
  selector: 'app-players',
  standalone: true,
  imports: [ ModalNewPlayerComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {

}
