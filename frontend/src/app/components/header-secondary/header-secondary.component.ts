import { Component } from '@angular/core';
import { ModalNewPlayerComponent } from '../modal-new-player/modal-new-player.component';

@Component({
  selector: 'app-header-secondary',
  standalone: true,
  imports: [ModalNewPlayerComponent],
  templateUrl: './header-secondary.component.html',
  styleUrl: './header-secondary.component.css'
})
export class HeaderSecondaryComponent {

}
