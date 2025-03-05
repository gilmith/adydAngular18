import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TiradasComponent } from "./tiradas/tiradas.component";
import { Personaje } from '../../../../models/personaje';
import { RazaComponent } from "./raza/raza.component";
import { PersonajeService } from '../service/personaje.service';
import { ResumenComponent } from "./resumen/resumen.component";
import { CategoriasComponent } from "./categorias/categorias.component";

@Component({
  selector: 'app-ficha',
  standalone: true,
  imports: [CommonModule, TiradasComponent, RazaComponent, ResumenComponent, CategoriasComponent],
  templateUrl: './ficha.component.html',
  styleUrl: './ficha.component.css'
})
export class FichaComponent {

  public showPrevious : boolean = false;
  public personaje? : Personaje;
  public step = signal<number>(0);
  constructor(public servicio : PersonajeService) {}

  public actualizaPersonaje($event: Personaje) {    
    this.personaje = $event;
    this.step.update(valor => valor++);
  }

  siguiente() {
    this.step.update((anterior : number) => anterior +1)
    this.showPrevious = true;
  }
  
  anterior() {
    this.step.update((anterior : number) => anterior -1);
    }


}
