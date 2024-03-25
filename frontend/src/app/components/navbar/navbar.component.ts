import { Component, OnInit } from "@angular/core";
import { IconsNavbarComponent } from "../icons-navbar/icons-navbar.component";
import { Router, RouterModule } from "@angular/router";
import { CarouselComponent } from "../carousel/carousel.component";

@Component({
    selector: "app-navbar",
    standalone: true,
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
    imports: [IconsNavbarComponent, RouterModule, CarouselComponent]
})
export class NavbarComponent implements OnInit {
  title = "web-app";

  ngOnInit(): void {
    initFlowbite();
  }
  navigateToLandingComponent() {
    throw new Error("Method not implemented.");
  }
  constructor(private router: Router) {}

  navigateToInicio() {
    this.router.navigate(["/"]);
  }

  navigateToPlayers() {
    this.router.navigate(["/players"]);
  }

  navigateToReports() {
    this.router.navigate(["/reports"]);
  }
  navigateToGraph() {
    this.router.navigate(["/graph"]);
  }
}

function initFlowbite() {
  throw new Error("Function not implemented.");
}
