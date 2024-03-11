import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-auth-reg',
    standalone: true,
    templateUrl: './auth-reg.component.html',
    styleUrl: './auth-reg.component.css',
    imports: [FooterComponent]
})
export class AuthRegComponent {
    constructor (private router: Router) {}
    navigateToHeroLanding() { //Ruta que vueve a landing al pulsar btn
        this.router.navigate([""]);
    }
    
    navigateToAuth() { //Ruta que navega a login al pulsar btn
        this.router.navigate(["/login"])
    }

    navigateToHome() { //Ruta que navega a home al pulsar btn
        this.router.navigate(["/home"])
    }

}
