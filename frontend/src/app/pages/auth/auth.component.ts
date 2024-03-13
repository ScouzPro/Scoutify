import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    //Las reglas de las validaciones van aqui, en este export vamos a colocar los campos que queremos que tengan validaciones, y que van a funcionar a modo de estados, con las propiedades de Angular.

    //GETTERS
    get name(){
        return this.formUser.get('name') as FormControl; //acceso al grupo, luego a la propiedad get y luego al valor
    }
    get email(){
        return this.formUser.get('email') as FormControl; //acceso al grupo, luego a la propiedad get y luego al valor
    }
    get password(){
        return this.formUser.get('password') as FormControl; //acceso al grupo, luego a la propiedad get y luego al valor
    }
    
    //Para asegurarnos que todas las validaciones paran en el formulario antes de enviar:Ç
    //GRUPO DE CONTROLADORES 
    formUser = new FormGroup({ //esto a la cabeda del form
        'name': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]/)]),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
    })


    //A modo de estados, llamamos a los inputs que tenemos en el html, que tinen una propiedad de FormControl, y les pasamos la funcionalidad validators, indicando que son requeridos (las '' vacias para que no muestre nada dentro de los campos)
    //CONTROLADORES DE FORMULARIO
    // name = new FormControl('', Validators.required);
    //Cuando tengamos más de una forma de validación, deben ser en un array
    // email = new FormControl('', [Validators.required, Validators.email]);
    // password = new FormControl('', [Validators.required, Validators.minLength(8)]);



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