import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors  } from '@angular/forms';
import { UserService } from '../services/user.service';
import { catchError, map, Observable, of } from 'rxjs';
import * as bootstrap from 'bootstrap'; 
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements AfterViewInit{

  public registerForm : FormGroup;
  @ViewChild('toast') snackElement! : ElementRef;
  private toast : any;

  ngAfterViewInit(): void {
    const snnack = this.snackElement.nativeElement;
    this.toast = new bootstrap.Toast(snnack);
    
  }

constructor(private fbs : FormBuilder, registerService:  UserService) {
  this.registerForm = this.fbs.group({
    usuario: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')], this.checkMail(registerService)], //meter el servicio de validacion de correo 
    password: ['', [Validators.required, Validators.minLength(4)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4)]]
  },{
    validators :[this.validPassword('password', 'confirmPassword')]
  });
}
  validPassword(arg0: string, arg1: string): ValidationErrors | null {
    return ( formGroup: AbstractControl ): ValidationErrors | null => {
      const fieldValue1 = formGroup.get(arg0)?.value;
      const fieldValue2 = formGroup.get(arg1)?.value;
      if ( fieldValue1 !== fieldValue2 ) {
        formGroup.get(arg0)?.setErrors({ notEqual: true });
        return { notEqual: true }
      }
      formGroup.get(arg1)?.setErrors(null);
      return null;
    }
  }

// esto por defecto recarga la pagina si no tiene un FormGroup enlazado en la etiqueta form
public onSend() {
  console.log('Aun no implementado')
}


private checkMail(registerService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const mail = control.value;
    return registerService.checkMail(mail)
      .pipe(
        map(response => {
          if (response.usuario){
            this.toast.show();
            return { email: true }; // Invalid
          } 
          return { email: false }; // Valid
        }),
        catchError(error => {
          console.error(error);
          return of({ email: true }); // Handle error as invalid
        })
      );
  };
}
    
    
    // .pipe(
    //   map((response: ResponseMail) => {
    //     return response ? { email: true } : null;
    //   }),
    //   catchError((error: HttpErrorResponse) => {
    //     console.log('Error lanza un snack');
    //     // Retorna null si hay un error para evitar bloquear la validación
    //     return of(null);
    //   })
    //);
 
}


