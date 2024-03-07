import { Component } from '@angular/core';
import { IconsNavbarComponent } from "../icons-navbar/icons-navbar.component";

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'] // Usa styleUrls en lugar de styleUrl
    ,
    imports: [IconsNavbarComponent]
})
export class NavbarComponent {

}

