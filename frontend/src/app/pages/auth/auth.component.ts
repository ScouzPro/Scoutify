import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css',
    imports: [FooterComponent]
})
export class AuthComponent {

}
