import { Component } from '@angular/core';
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
[x: string]: any;
    formUser = new FormGroup({
        'userName': new FormControl('', [Validators.required]),
        'password': new FormControl('', [Validators.required])
    });
password: any;
name: any;

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


    
    loginUser() {
        if (this.formUser.valid) {
            const credentials = {
                userName: this.formUser.value.userName,
                password: this.formUser.value.password // Aquí está el acceso al valor del campo de contraseña del formulario
            };
            
            this.userService.loginUser(credentials).subscribe(
                (response) => {
                    // Aquí puedes manejar la respuesta del backend, como guardar el token de autenticación en el almacenamiento local y redirigir al usuario a la página de inicio.
                    console.log(response); // Solo para fines de demostración, puedes implementar una lógica específica aquí
                    // Redirigir al usuario a la página de inicio, por ejemplo:
                    // this.router.navigate(["/home"]);
                },
                (error) => {
                    console.log(error); // Manejar el error de autenticación, por ejemplo, mostrar un mensaje de error al usuario
                }
            );
        } else {
            // Si el formulario no es válido, puedes mostrar un mensaje de error o realizar alguna acción adecuada.
            console.log("Formulario no válido");
        }
    }
}
