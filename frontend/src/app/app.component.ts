import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingComponent } from './pages/landing/landing.component';
import { HeroLandingComponent } from './components/hero-landing/hero-landing.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
<<<<<<< HEAD
import { CarouselComponent } from './components/carousel/carousel.component';

// import { PlayerMetricsComponent } from './components/pruebaMetrics/pruebaMetrics-component';

=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> origin/develop

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
<<<<<<< HEAD
    imports: [RouterOutlet, NavbarComponent , FooterComponent, LandingComponent, HeroLandingComponent, LoginFormComponent, RegisterFormComponent, CarouselComponent]
=======
    imports: [RouterOutlet, ReactiveFormsModule, NavbarComponent , FooterComponent, LandingComponent, HeroLandingComponent, LoginFormComponent, RegisterFormComponent]
>>>>>>> origin/develop
})
export class AppComponent {
  title = 'Scoutify';
}
