import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-confirm',
    imports: [RouterModule],
    templateUrl: './confirm.component.html',
    styleUrl: './confirm.component.css'
})
export class ConfirmComponent implements OnInit {

  public ok? : boolean;

  constructor(private readonly router : ActivatedRoute,
    private readonly authservice : UserService
  ) {}

  public ngOnInit(): void {
    this.router.params.subscribe(ruta => {
      this.authservice.confirm(ruta['id']).subscribe({
        next : (value : boolean) => {
          console.log('value ', value);
          this.ok = value;
        }
      })
    });
  }

}
