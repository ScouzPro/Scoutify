import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  slides: string[] = [
    'https://media.istockphoto.com/id/1411016542/es/foto/f%C3%BAtbol-femenino-jugadora-de-f%C3%BAtbol-regateando-pelota-en-movimiento-en-el-estadio-durante-el.jpg?s=2048x2048&w=is&k=20&c=n3m0vtL__nnuFL0BuWPv60VnmHZCeCwFHlSMz58MaW0=',
    'https://images.pexels.com/photos/16588254/pexels-photo-16588254/free-photo-of-jugando-deporte-juego-partido.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    // Agrega más URL de imágenes
  ];
  currentSlide = 0;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    this.startCarousel();
  }

  startCarousel(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // Cambiar de imagen cada 5 segundos (5000 milisegundos)
  }

  stopCarousel(): void {
    clearInterval(this.intervalId);
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlide = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
  }

  nextImage(): void {
    this.stopCarousel(); // Detener el carrusel automático si está en funcionamiento
    this.nextSlide();
  }

  prevImage(): void {
    this.stopCarousel(); // Detener el carrusel automático si está en funcionamiento
    this.prevSlide();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }
}