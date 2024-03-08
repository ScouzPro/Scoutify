import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-auth-reg',
    standalone: true,
    templateUrl: './auth-reg.component.html',
    styleUrl: './auth-reg.component.css',
    imports: [FooterComponent]
})
export class AuthRegComponent {

}
