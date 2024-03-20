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
    formUser = new FormGroup({
        'userName': new FormControl('', [Validators.required]),
        'password': new FormControl('', [Validators.required])
    });
username: any;
password: any;
showAlert= false;

    alertMessage: string ='';

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
            userName: this.formUser.value.userName,
            password: this.formUser.value.password
          };
          console.log(credentials);
          
          this.userService.loginUser(credentials).subscribe(
            (response) => {
              console.log('Login con éxito:', response);
              this.alertMessage = '¡Bienvenido, ' + credentials.userName + '!';
              setTimeout(() => {
                this.navigateToHome();
              }, 2000); 
              // Reset showAlert to hide the alert
              this.showAlert = false;
            },
            (error) => {
              console.error('Error en el usuario/contraseña:', error);
              this.alertMessage = 'Error en usuario/contraseña';
            }
          );
        } else {
          console.log("Formulario no válido");
          this.showAlert = true;
        }
      }
   

    }