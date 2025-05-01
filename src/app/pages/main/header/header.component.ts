import { Component, inject } from '@angular/core';
import { OffcanvasService } from '../../../services/offcanvas/offcanvas.service';
import {Router, RouterModule} from "@angular/router";

@Component({
    selector: 'app-header',
    imports: [RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: true
})
export class HeaderComponent {

  public sidebar = inject(OffcanvasService);
  public router : Router = inject(Router);

  public toggle() {
    this.sidebar.update();
  }

  logout() {
    this.router.navigateByUrl('/login').then(r => sessionStorage.removeItem('token'));
  }
}
