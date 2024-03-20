import { Component } from '@angular/core';
import { IconsNavbarComponent } from "../icons-navbar/icons-navbar.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'] // Usa styleUrls en lugar de styleUrl
    ,
    imports: [IconsNavbarComponent]
})
export class NavbarComponent {
navigateToLandingComponent() {
throw new Error('Method not implemented.');
}
    constructor(private router: Router) { }

  navigateToInicio() {
    this.router.navigate(['/']);
  }

  navigateToPlayers() {
    this.router.navigate(['/players']);
  }

  navigateToReports() {
    this.router.navigate(['/reports']);
  }
  navigateToGraph() {
    this.router.navigate(['/graph']);
  }
}



