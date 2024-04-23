import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LandingComponent } from './pages/landing/landing.component';
import { HeroLandingComponent } from './components/hero-landing/hero-landing.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { VideosComponent } from './components/videos/videos.component';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ReactiveFormsModule, RecaptchaV3Module, HttpClientModule, NavbarComponent , FooterComponent, LandingComponent, HeroLandingComponent, LoginFormComponent, RegisterFormComponent, VideosComponent],
    providers: [
      {
        provide: RECAPTCHA_V3_SITE_KEY,
    useValue: 'pon_la_key_de_google',
      },
    ],
  })


export class AppComponent {
  title = 'Scoutify';
}
