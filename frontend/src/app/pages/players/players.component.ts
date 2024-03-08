import { Component } from '@angular/core';
import { HeaderSecondaryComponent } from '../../components/header-secondary/header-secondary.component';
import { HeaderDetailComponent } from '../../components/header-detail/header-detail.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-players',
    standalone: true,
    templateUrl: './players.component.html',
    styleUrl: './players.component.css',
    imports: [HeaderSecondaryComponent, HeaderDetailComponent, NavbarComponent, FooterComponent]
})
export class PlayersComponent {

}
