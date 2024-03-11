import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css',
    imports: [FooterComponent]
})
export class AuthComponent {
    constructor (private router: Router) {}
    navigateToHeroLanding() {
        this.router.navigate([""]);
    }
    
    navigateToAuthRegister() {
        this.router.navigate(["/register"])
    }
}