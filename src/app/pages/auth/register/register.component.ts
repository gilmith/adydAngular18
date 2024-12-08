import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  public registerForm : FormGroup;

constructor(private fbs : FormBuilder) {
  this.registerForm = this.fbs.group({});
}

// esto por defecto recarga la pagina si no tiene un FormGroup enlazado en la etiqueta form
public onSend() {
  console.log('Aun no implementado')
}

}
