import { Component } from "@angular/core";
import { HeaderSecondaryComponent } from "../../components/header-secondary/header-secondary.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { PlayersCardsComponent } from "../../components/players-cards/players-cards.component";

@Component({
  selector: "app-players",
  standalone: true,
  templateUrl: "./players.component.html",
  styleUrl: "./players.component.css",
  imports: [
    HeaderSecondaryComponent,
    PlayersCardsComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class PlayersComponent {}
