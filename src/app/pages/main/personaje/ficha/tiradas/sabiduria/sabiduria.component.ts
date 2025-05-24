import {Component, inject, Input, OnInit} from '@angular/core';
import { PersonajeService } from '../../../service/personaje.service';
import {BASE_PATH, DescripcionesService, Sabiduria} from "@gilmith/adyd-api-client";
import {environment} from "../../../../../../../../enviorments/enviorment";

@Component({
    selector: 'app-sabiduria',
    imports: [],
    templateUrl: './sabiduria.component.html',
    styleUrl: './sabiduria.component.css',
    standalone: true,
  providers: [
    DescripcionesService,
    {provide: BASE_PATH, useValue: environment.BASE_PATH}
  ]
})
export class SabiduriaComponent implements OnInit{
  @Input() public data? : Sabiduria;
  public defensa?: string;
  public bonificacionConjuros? : string;
  public fracaso? : string;
  public inmunidad? : string;
  private readonly descripcionesService = inject(DescripcionesService)
  constructor(
    private personajeService : PersonajeService
  ) {}

  ngOnInit(): void {
    this.descripcionesService.descripcionesSearchFindByHabilidadGet('Sabiduria').subscribe(response =>  {
      this.defensa = response.find(it => it.nombre === "Ajuste defensa magica")?.descripcion;
      this.bonificacionConjuros = response.find(it => it.nombre === "Bonificacion de Conjuros")?.descripcion;
      this.fracaso = response.find(it => it.nombre === "Probabilidad de fracaso de conjuros")?.descripcion;
      this.inmunidad = response.find(it => it.nombre === "Inmunidad a conjuros")?.descripcion;
    });
    this.personajeService.setSabiduria(this.data);
  }

}
