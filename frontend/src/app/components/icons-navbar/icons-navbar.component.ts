import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-icons-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './icons-navbar.component.html',
  styleUrl: './icons-navbar.component.css'
})
export class IconsNavbarComponent {

  router = inject(Router);

  onClickLogout(){
    localStorage.removeItem('token de admin');
    this.router.navigate(['login'])

  }
}