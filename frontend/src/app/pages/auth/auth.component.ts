import { Component } from '@angular/core';
<<<<<<< HEAD
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
=======
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FooterComponent, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  formUser = new FormGroup({
      'username': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
  });
  showAlert= false;
  alertMessage: string = '';
  AlertMessage = false

  constructor(private router: Router, private userService: UsersService) {}

  navigateToHeroLanding() {
      this.router.navigate([""]);
  }

  navigateToAuthRegister() {
      this.router.navigate(["/register"])
  }

  navigateToHome() {
      this.router.navigate(["/home"])
  }

  // Custom function to check all fields have a value, correct or not
  areAllFieldsFilled(): boolean {
      const formValues = this.formUser.value as { [key: string]: string | null };
      for (const key in formValues) {
          if (formValues.hasOwnProperty(key)) {
              const value: string | null = formValues[key]; 
              if (!value) {
                  return false; 
              }
          }
      }
      return true; 
  }
showTermsError = false; 


onSubmit() {
    if (this.formUser.valid) {
        const credentials = {
            username: this.formUser.value.username,
            password: this.formUser.value.password
        };

        this.userService.loginUser(credentials).subscribe(
            (response) => {
                console.log('Login con éxito:', response);
                this.alertMessage = '¡Bienvenido, ' + credentials.username + '!';
                this.AlertMessage = true;
                setTimeout(() => {
                    this.navigateToHome();
                }, 2000);
            },
            (error) => {
                console.error('Error al logear:', error);
                this.alertMessage = 'Error en usuario/contraseña';
                this.AlertMessage = true; // Mostrar la alerta
                this.showAlert = true;

                // Ocultar la alerta después de 3 segundos
                setTimeout(() => {
                    this.AlertMessage = false;
                }, 2000);
            }
        );
    } else {
        this.alertMessage = 'Por favor, complete todos los campos correctamente.';
        this.AlertMessage = true; // Mostrar la alerta
        this.showAlert = true;
        setTimeout(() => {
            this.AlertMessage = false;
        }, 2000);
    }
}


  }
>>>>>>> main
