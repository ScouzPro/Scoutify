import { Component } from '@angular/core';
import { HeaderSecondary2Component } from '../../components/header-secondary2/header-secondary2.component';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-reports',
    standalone: true,
    templateUrl: './reports.component.html',
    styleUrl: './reports.component.css',
    imports: [HeaderSecondary2Component, NavbarComponent, FooterComponent]
})
export class ReportsComponent {

}
