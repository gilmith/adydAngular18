import { Component, inject, OnInit } from '@angular/core';
import { BackendService } from '../../../../../services/backend.service';
import { Alineamientoe } from '../../../../../models/AlineamientoModel';
import { PersonajeService } from '../../service/personaje.service';
import {CommonModule, NgClass} from "@angular/common";

@Component({
  selector: 'app-alineamiento',
  imports: [CommonModule],
  templateUrl: './alineamiento.component.html',
  styleUrl: './alineamiento.component.css',
})
export class AlineamientoComponent implements OnInit{


  private backend = inject(BackendService);
  public alineamientos : Alineamientoe[] = [];
  public personaje = inject(PersonajeService);
  public alineamientoSeleccionado?: number;

  constructor() {}


  ngOnInit(): void {
    this.backend.getAlinemaientos().subscribe(response => {
      this.alineamientos = response;
    })

  }

  dividirEnFilas(array: Alineamientoe[], elementosPorFila: number): any[][] {
    const filas = [];
    for (let i = 0; i < array.length; i += elementosPorFila) {
      filas.push(array.slice(i, i + elementosPorFila));
    }
    return filas;
  }

  selectAlineamiento(id: number,nombre: string) {
    this.alineamientoSeleccionado = id;
    this.personaje.personaje.alineamiento = nombre;
  }

}
