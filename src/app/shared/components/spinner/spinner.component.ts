import { Component, inject } from '@angular/core';
import { SpinnerService } from '../../../services/spinnerService/spinner.service';

@Component({
    selector: 'app-spinner',
    imports: [],
    templateUrl: './spinner.component.html',
    styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  private readonly spinnerService = inject(SpinnerService);
  isLoading = this.spinnerService.isLoading;

  


}
