import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { FooterComponent } from "../../components/footer/footer.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css',
    imports: [NgIf, ReactiveFormsModule, FooterComponent]
    //NgIf es una directiva de condicionales propia de Angular, que evalua el estado de algo y lo utiliza en base a las instrucciones dadas
})
export class AuthComponent {
    //VALIDACIONES
    //Las reglas de las validaciones van aqui, en este export vamos a colocar los campos que queremos que tengan validaciones, y que van a funcionar a modo de estados,
    //con las propiedades de Angular.
    //A modo de estados, llamamos a los inputs que tenemos en el html, que tinen una propiedad de FormControl, y les pasamos la funcionalidad validators, indicando que son requeridos (las '' vacias para que no muestre nada dentro de los campos)
    name = new FormControl('', Validators.required);
    //Cuando tengamos más de una forma de validación, deben ser en un array
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required, Validators.minLength(8)]);



    //Constructor para las rutas de navegación de la pagina
    constructor (private router: Router) {}
    navigateToHeroLanding() { //Ruta que vueve a landing al pulsar btn
        this.router.navigate([""]);
    }
    
    navigateToAuthRegister() { //Ruta que navega a registro al pulsar btn
        this.router.navigate(["/register"])
    }

    navigateToHome() { //Ruta que navega a home al pulsar btn
        this.router.navigate(["/home"])
    }
}