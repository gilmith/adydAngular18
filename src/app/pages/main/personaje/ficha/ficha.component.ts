import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TiradasComponent } from "./tiradas/tiradas.component";
import { Personaje } from '../../../../models/personaje';

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [CommonModule, TiradasComponent],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {


  public showPrevious : boolean = false;
  public personaje? : Personaje;
  //public step = signal<number>(0);
  public step : number = 0;

  public actualizaPersonaje($event: Personaje) {    
    this.personaje = $event;
    //this.step.update(valor => valor++);
  }

}
