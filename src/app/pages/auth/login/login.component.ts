import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { Authorize } from '../interfaces/authorize';
import { Login } from '../interfaces/login';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule], //si no tengo el router module no van a funcionar los links porque son standalone
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  public loginFormGroup: FormGroup;   



  constructor (private fbs : FormBuilder,
    private router: Router,
    private userService : UserService,
  ) {
    this.loginFormGroup = this.fbs.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(4)]]   

    });  
  }

  public isValidField(campo :string) : boolean  {
    return  this.loginFormGroup.controls[campo].invalid &&  this.loginFormGroup.controls[campo].touched;
  }

  public onLogin(){
    const login : Login = {
      usuario: this.loginFormGroup.get('email')?.value,
      password: this.loginFormGroup.get('password')?.value
    }
    this.userService.login(login).subscribe({
      next : (value : Authorize) => {
        sessionStorage.setItem('token', value.token);
        this.router.navigateByUrl('/main');
      },
      error : (err : HttpErrorResponse) => {
        console.log('error');
        //this.toatService.show({message : 'Error en el logado', text : 'de momento consulta el pete'});
      }
    })
  }

}
