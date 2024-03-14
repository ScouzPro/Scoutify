import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingComponent } from './pages/landing/landing.component';
import { HeroLandingComponent } from './components/hero-landing/hero-landing.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { CarouselComponent } from './components/carousel/carousel.component';

// import { PlayerMetricsComponent } from './components/pruebaMetrics/pruebaMetrics-component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent , FooterComponent, LandingComponent, HeroLandingComponent, LoginFormComponent, RegisterFormComponent, CarouselComponent]
})
export class AppComponent {
  title = 'Scoutify';
}
