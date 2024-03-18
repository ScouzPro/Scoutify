import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterLink } from "@angular/router";
import { VideosComponent } from "../../components/videos/videos.component";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  imports: [NavbarComponent, FooterComponent, RouterLink, VideosComponent ],
})
export class HomeComponent implements OnInit {
    constructor() {}
  
    ngOnInit(): void {
      this.setupCarousel();
    }
  
    setupCarousel(): void {
      const items = document.querySelectorAll(".carousel-item");
  
      items.forEach((item) => {
        item.classList.add("hidden");
      });
      items[0].classList.remove("hidden");
    }
  
    moveCarousel(direction: number): void {
      const carouselItems = document.querySelectorAll(".carousel-item");
      let currentIndex = -1;
  
      carouselItems.forEach((item, index) => {
        if (!item.classList.contains("hidden")) {
          currentIndex = index;
        }
      });
  
      if (currentIndex !== -1) {
        carouselItems[currentIndex].classList.add("hidden");
        let nextIndex = currentIndex + direction;
        if (nextIndex < 0) {
          nextIndex = carouselItems.length - 1;
        } else if (nextIndex >= carouselItems.length) {
          nextIndex = 0;
        }
        carouselItems[nextIndex].classList.remove("hidden");
      }
    }
  }