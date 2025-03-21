import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastService } from '../../../services/toastService/toast.service';

@Component({
    selector: 'app-forgot',
    imports: [ReactiveFormsModule],
    templateUrl: './forgot.component.html',
    styleUrl: './forgot.component.css'
})
export class ForgotComponent {

  public forgotGroup : FormGroup;

  constructor(private  userService : UserService,
   private fbs : FormBuilder,
   private toastService : ToastService
  ) {
      this.forgotGroup = this.fbs.group({
        email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')], ], //meter el servicio de validacion de correo 
      });
  }

  public onReset() {
    if(this.forgotGroup.get('email')?.valid){
      this.userService.sendReset(this.forgotGroup.get('email')?.value);
    } else {
      this.toastService.show({message: 'Error en el formato de correo', text: 'Revisa el correo'});
    }
  }

}
