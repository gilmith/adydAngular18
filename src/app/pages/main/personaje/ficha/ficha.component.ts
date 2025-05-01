import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TiradasComponent } from "./tiradas/tiradas.component";
import { Personaje } from '../../../../models/personaje';
import { RazaComponent } from "./raza/raza.component";
import { PersonajeService } from '../service/personaje.service';
import { CategoriasComponent } from "./categorias/categorias.component";
import { AlineamientoComponent } from './alineamiento/alineamiento.component';
import {DatosJugadorComponent} from "./datos-jugador/datos-jugador.component";

@Component({
    selector: 'app-ficha',
    imports: [CommonModule, TiradasComponent, RazaComponent, CategoriasComponent, AlineamientoComponent, DatosJugadorComponent],
    providers: [PersonajeService],
    templateUrl: './ficha.component.html',
    styleUrl: './ficha.component.css',
    standalone: true
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
