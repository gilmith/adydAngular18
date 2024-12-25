import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors, ValidatorFn  } from '@angular/forms';
import { UserService } from '../services/user.service';
import { catchError, debounceTime, map, Observable, of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { ToastService } from '../../../services/toastService/toast.service';
import { ResponseMail } from '../interfaces/response-mail';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  providers: [ToastService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit{

  public registerForm : FormGroup;
  @ViewChild('toast') snackElement! : ElementRef;
  public disabled: boolean = true;

  

constructor(private fbs : FormBuilder, 
            private registerService:  UserService,
          private toastService: ToastService) {
  this.registerForm = this.fbs.group({
    usuario: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')], this.checkMail(this.registerService)], //meter el servicio de validacion de correo 
    password: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d).{8,}$')]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^(?=.*[a-zA-Z])(?=.*\\d).{8,}$')]]
  });
}

  ngOnInit(): void {
    this.registerForm.valueChanges.pipe(debounceTime(500)).subscribe(() => {
      this.checkPasswords();
    })
  }
  private checkPasswords()  {
    const password = this.registerForm.get('password');
    const confirmPassword = this.registerForm.get('confirmPassword');

    if (password?.valid && confirmPassword?.valid && password.value !== confirmPassword.value) {
      this.toastService.show({message: 'Error', text: 'Las contraseñas no coinciden', type: 'error'});
      this.registerForm.setErrors({ notEqual: true });
    } else if(password?.valid && confirmPassword?.valid && password.value === confirmPassword.value){
      this.disabled = false
      this.registerForm.setErrors(null);
    } else {
      this.registerForm.setErrors(null);
    }

  }

// esto por defecto recarga la pagina si no tiene un FormGroup enlazado en la etiqueta form
public onSend() {
  this.registerService.register({
    usuario :this.registerForm.controls['email'].value, 
    password: this.registerForm.controls['password'].value
  }).subscribe({
    next : (value : ResponseMail)=> {
      if(value.codigoError && value.mensaje){
        this.toastService.show({
          mensajeInput : value.mensaje,
          message : value.mensaje,
          text : 'Error interno de la aplicacion',
          type: 'error'
        });
      }
    },
    error :(value : HttpErrorResponse) => {
      console.log(value);
    }
  });
}


private checkMail(registerService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const mail = control.value;
    return registerService.checkMail(mail)
      .pipe(
        map(response => {
          if (response?.usuario){  
            this.toastService.show({message: 'Usuario ya registrado', text: 'El correo ya ha sido registrado', type: 'error', linkText: 'Recuperar contraseña'});        
            return { email: true }; // Invalid
          } 
          return { email: false }; // Valid
        }),
        catchError(error => {
          console.error(error)
          return of({ email: true }); // Handle error as invalid
        })
      );
  };
}

 
}


