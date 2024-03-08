import { Component } from '@angular/core';
import { HeaderSecondaryComponent } from '../../components/header-secondary/header-secondary.component';
import { HeaderDetailComponent } from '../../components/header-detail/header-detail.component';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [HeaderSecondaryComponent, HeaderDetailComponent],
  templateUrl: './players.component.html',
  styleUrl: './players.component.css'
})
export class PlayersComponent {

}
