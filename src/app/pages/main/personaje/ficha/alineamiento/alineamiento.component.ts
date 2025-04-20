import { Component, inject, OnInit } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import {CommonModule} from "@angular/common";
import {Alignment, AlineamientoService, BASE_PATH} from "@gilmith/adyd-api-client";


@Component({
  selector: 'app-alineamiento',
  imports: [CommonModule],
  templateUrl: './alineamiento.component.html',
  styleUrl: './alineamiento.component.css',
  providers:[
    AlineamientoService,
    {provide: BASE_PATH, useValue:'https://localhost:10004/api/bbdd'},
  ]
})
export class AlineamientoComponent implements OnInit{


  private alineamientoService = inject(AlineamientoService);
  public alineamientos: Alignment[] = [];
  public personaje = inject(PersonajeService);
  public alineamientoSeleccionado?: number;

  constructor() {}


  ngOnInit(): void {
    this.alineamientoService.findAllAlignments().subscribe(response => {
      this.alineamientos = response;
    })

  }

  dividirEnFilas(array: Alignment[], elementosPorFila: number): any[][] {
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
