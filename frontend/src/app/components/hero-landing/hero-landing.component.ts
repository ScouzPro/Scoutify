import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import { RegisterFormComponent } from '../register-form/register-form.component';

@Component({
  selector: 'app-hero-landing',
  standalone: true,
  imports: [LoginFormComponent, RegisterFormComponent],
  templateUrl: './hero-landing.component.html',
  styleUrl: './hero-landing.component.css'
})
export class HeroLandingComponent {
  constructor(private router: Router) {} // Inject Router service

  navigateToLogin() {
    this.router.navigate(['/login']); //Ruta que navega al componente login, importar el componente
    
  }
  navigateToRegister() {
    this.router.navigate(['/register']); 
  }

}
