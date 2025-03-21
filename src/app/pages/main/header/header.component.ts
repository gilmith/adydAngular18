import { Component, inject } from '@angular/core';
import { OffcanvasService } from '../../../services/offcanvas/offcanvas.service';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {

  public sidebar = inject(OffcanvasService);

  public toogle() {
    this.sidebar.update();
  }

}
