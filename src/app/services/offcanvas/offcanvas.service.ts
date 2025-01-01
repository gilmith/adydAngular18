import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OffcanvasService {


  constructor() { }

  private _open = signal<boolean>(true);

  get open() {
    return this._open.asReadonly();
  }

  public hide() {
    this._open.set(false);
  }

  public show() {
    this._open.set(true);
  }

  public getData() : boolean{
    return this._open();
  }

  update() {
    this._open.update(value => !value);
  }
  

}
