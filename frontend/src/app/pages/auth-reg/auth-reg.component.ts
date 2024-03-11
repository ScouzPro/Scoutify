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
    navigateToHeroLanding() {
        this.router.navigate([""]);
    }
    
    navigateToAuth() {
        this.router.navigate(["/login"])
    }

}
