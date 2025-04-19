import {Component, inject, Input, OnInit} from '@angular/core';
import { PersonajeService } from '../../../service/personaje.service';
import {DescripcionesService, Fuerza } from 'adyd-api-client'
import {BASE_PATH} from "adyd-api-client";

@Component({
    selector: 'app-fuerza',
    imports: [],
    templateUrl: './fuerza.component.html',
    styleUrl: './fuerza.component.css',
    standalone:true,
    providers: [
      DescripcionesService,
      {provide: BASE_PATH, useValue: 'http://localhost:10004/api/bbdd/'},
    ]
})
export class FuerzaComponent implements OnInit {

  @Input() public data? : Fuerza;
  public probImpacto? : string;
  public ajusteDano? : string;
  public pesoAuth? : string;
  public esfuerzoMax? : string;
  public abrirPuertas? : string;
  public doblar? : string;

  private readonly descripcionesService = inject(DescripcionesService);

  constructor(private personajeService : PersonajeService
  ) {}


  ngOnInit(): void {
    this.descripcionesService.descripcionesSearchFindByHabilidadGet('Fuerza').subscribe(responseDescripcion => {
      this.probImpacto = responseDescripcion.find(it => it.nombre === 'Probabilidad Golpe')?.descripcion;
      this.ajusteDano = responseDescripcion.find(it => it.nombre === "Ajuste Daño")?.descripcion;
      this.pesoAuth = responseDescripcion.find(it => it.nombre ==="Peso autorizado")?.descripcion;
      this.esfuerzoMax = responseDescripcion.find(it => it.nombre === "Esfuerzo maximo")?.descripcion;
      this.abrirPuertas = responseDescripcion.find(it => it.nombre === "Abrir Puertas")?.descripcion;
      this.doblar = responseDescripcion.find(it => it.nombre === "Doblar barras/Alzar Puertas")?.descripcion;
    })
    this.personajeService.setFuerza(this.data);
  }
}
