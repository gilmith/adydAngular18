import {Component, inject, Input, OnInit} from '@angular/core';
import { PersonajeService } from '../../../service/personaje.service';
import {DescripcionesService, Inteligencia} from "adyd-api-client";

@Component({
    selector: 'app-inteligencia',
    imports: [],
    templateUrl: './inteligencia.component.html',
    styleUrl: './inteligencia.component.css',
    standalone: true
})
export class InteligenciaComponent implements OnInit{

  @Input() public data? : Inteligencia;
  public idiomas? :string;
  public nivelConjuros? : string;
  public aprender? : string;
  public maxConjuros? : string | undefined;
  public inmunidad? : string;
  private readonly descripcionesService = inject(DescripcionesService);

  constructor(
    private personajeService : PersonajeService
  ) {}


  ngOnInit(): void {
    this.descripcionesService.descripcionesSearchFindByHabilidadGet('Inteligencia').subscribe(response => {
      this.idiomas = response.find(it => it.nombre === "Numero de lenguajes")?.descripcion;
      this.nivelConjuros = response.find(it => it.nombre === "Nivel de conjuros")?.descripcion;
      this.aprender = response.find(it => it.nombre === "Oportunidad de aprender conjuros")?.descripcion;
      this.maxConjuros = response.find(it => it.nombre === "Numero maximo de conjuros")?.descripcion;
      this.inmunidad = response.find(it => it.nombre === "Inmunidad de conjuros")?.descripcion;
    });
    this.personajeService.setInteligencia(this.data);

  }

}
