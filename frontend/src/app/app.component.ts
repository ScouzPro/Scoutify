import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingComponent } from './pages/landing/landing.component';
import { HeroLandingComponent } from './components/hero-landing/hero-landing.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
=======
import { VideosComponent } from './components/videos/videos.component';

>>>>>>> main

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
<<<<<<< HEAD
    imports: [RouterOutlet, ReactiveFormsModule, NavbarComponent , FooterComponent, LandingComponent, HeroLandingComponent, LoginFormComponent, RegisterFormComponent]
=======
    imports: [RouterOutlet, ReactiveFormsModule, NavbarComponent , FooterComponent, LandingComponent, HeroLandingComponent, LoginFormComponent, RegisterFormComponent, VideosComponent]
>>>>>>> main
})
export class AppComponent {
  title = 'Scoutify';
}
