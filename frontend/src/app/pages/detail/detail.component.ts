import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";

@Component({
    selector: 'app-detail',
    standalone: true,
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.css',
    imports: [NavbarComponent]
})
export class DetailComponent {

}
