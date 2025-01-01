import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  public isLoading = signal<boolean>(false);

  public hide() {
    this.isLoading.set(false);
  }

  public show() {
    this.isLoading.set(true);
  }

}
