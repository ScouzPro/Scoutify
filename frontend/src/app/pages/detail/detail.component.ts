import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeaderDetailComponent } from "../../components/header-detail/header-detail.component";

@Component({
    selector: 'app-detail',
    standalone: true,
    templateUrl: './detail.component.html',
    styleUrl: './detail.component.css',
    imports: [NavbarComponent, HeaderDetailComponent]
})
export class DetailComponent {

}
