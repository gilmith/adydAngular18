import {Component, inject, Input,  OnInit} from '@angular/core';
import {BASE_PATH, DescripcionesService, Destreza} from "adyd-api-client";
import {PersonajeService} from "../../../service/personaje.service";

@Component({
    selector: 'app-destreza',
    imports: [],
    templateUrl: './destreza.component.html',
    styleUrl: './destreza.component.css',
    standalone: true,
  providers:[
    DescripcionesService,
    { provide: BASE_PATH, useValue: 'https://localhost:10004'}
  ]
})
export class DestrezaComponent implements OnInit{
  public reaccion?: string;
  public ajusteProyectiles?: string;
  public ajusteDefensivo?: string;

  @Input() public data? :Destreza;
  private readonly descripcionesService = inject(DescripcionesService);
  constructor(private personajeService : PersonajeService
  ) {}


  ngOnInit(): void {
    this.descripcionesService.descripcionesSearchFindByHabilidadGet('Destreza')
        .subscribe(responseDescripciones => {
      this.reaccion = responseDescripciones.find(it => it.nombre === 'Ajuste Reaccion')?.descripcion;
      this.ajusteProyectiles = responseDescripciones.find(it => it.nombre === 'Ajuste Ataque Proyectiles')?.descripcion;
      this.ajusteDefensivo = responseDescripciones.find(it => it.nombre ==="Ajuste Defensivo")?.descripcion;
    })
    this.personajeService.setDestreza(this.data);
  }





}
