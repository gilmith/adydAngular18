import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

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
    private route: ActivatedRoute
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
    console.log('Aqui hace la navegacion', this.loginFormGroup.controls['email']);
  }

}
