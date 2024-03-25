import { Component } from '@angular/core';
import { ModalNewPlayerComponent } from '../modal-new-player/modal-new-player.component';
import { ModalNewReportComponent } from '../modal-new-report/modal-new-report.component';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> main
@Component({
  selector: 'app-header-secondary2',
  standalone: true,
  imports: [ModalNewPlayerComponent, ModalNewReportComponent],
  templateUrl: './header-secondary2.component.html',
  styleUrl: './header-secondary2.component.css'
})
export class HeaderSecondary2Component {

<<<<<<< HEAD
=======
  constructor(private router: Router) {}

  navigateToMetricGraph() {
    this.router.navigate(['/graph']);
  }

>>>>>>> main
}
