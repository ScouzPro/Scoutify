import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UsersService } from '../../service/users.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-auth-reg',
    templateUrl: './auth-reg.component.html',
    standalone: true,
    imports :[CommonModule, ReactiveFormsModule],
    styleUrls: ['./auth-reg.component.css']
})
export class AuthRegComponent {
    //VALIDACIONES
    //GETTERS
    get name(){
        return this.formNewUser.get('name') as FormControl; //acceso al grupo, luego a la propiedad get y luego al valor
    }
    get lastName(){
        return this.formNewUser.get('lastName') as FormControl; //acceso al grupo, luego a la propiedad get y luego al valor
    }
    get username(){
        return this.formNewUser.get('username') as FormControl; //acceso al grupo, luego a la propiedad get y luego al valor
    }
    get email(){
        return this.formNewUser.get('email') as FormControl; //acceso al grupo, luego a la propiedad get y luego al valor
    }
    get password(){
        return this.formNewUser.get('password') as FormControl; //acceso al grupo, luego a la propiedad get y luego al valor
    }
    get repeatPassword(){
        return this.formNewUser.get('repeatPassword') as FormControl; //acceso al grupo, luego a la propiedad get y luego al valor
    }
    get terms(){
        return this.formNewUser.get('terms') as FormControl; //acceso al grupo, luego a la propiedad get y luego al valor
    }

    //GRUPO DE CONTROLADORES 
    formNewUser = new FormGroup({ //esto a la cabeza del form
        'name': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
        'lastName': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]+$/)]),
        'username': new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]/)]),
        'email': new FormControl('', [Validators.required, Validators.email]),
        'password': new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)]),
        'repeatPassword': new FormControl('', Validators.required),
        'terms': new FormControl(false) // Add a FormControl for the checkbox
    }, { validators: this.passwordMatchValidator }); // Add custom validator for matching passwords)

    //Constructor para las rutas de navegación de la pagina
    constructor (private userService: UsersService, private router: Router) {}

    navigateToHeroLanding() { //Ruta que vueve a landing al pulsar btn
        this.router.navigate([""]);
    }
    
    navigateToAuth() { //Ruta que navega a login al pulsar btn
        this.router.navigate(["/login"])
    }

    navigateToHome() { //Ruta que navega a home al pulsar btn
        this.router.navigate(["/home"])
    }

    // Custom validator function to check if passwords match
    passwordMatchValidator(control: AbstractControl) { // Change parameter type to AbstractControl
        const password = control.get('password')?.value;
        const repeatPassword = control.get('repeatPassword')?.value;
        
        if (password === repeatPassword) {
            return null; // Passwords match, return null (no error)
        } else {
            return { mismatch: true }; // Passwords don't match, return an error object
        }
    }

    showTermsError = false; // Variable to track the error message for terms acceptance
    onSubmit() {
        if (this.formNewUser.valid && this.formNewUser.get('terms')?.value) {
            // Hide the error message if there's no error
            this.showTermsError = false;
            // Llama al servicio para crear el nuevo usuario
            this.userService.createUser(this.formNewUser.value).subscribe(
                response => {
                    // Aquí puedes manejar la respuesta del servidor si es necesario
                    console.log('Usuario creado con éxito:', response);
                    // Navega a la página de inicio u otra página después de crear el usuario
                    this.navigateToHome();
                },
                error => {
                    // Maneja el error si ocurre alguno durante la solicitud HTTP
                    console.error('Error al crear el usuario:', error);
                    // Puedes mostrar un mensaje de error al usuario si lo deseas
                }
            );
        } else {
            // Show the error message if terms are not accepted
            this.showTermsError = true;
        }
    }
}
