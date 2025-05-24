import {Component, inject, Input, OnInit} from '@angular/core';
import { PersonajeService } from '../../../service/personaje.service';
import {BASE_PATH, Carisma, DescripcionesService} from "@gilmith/adyd-api-client";
import {environment} from "../../../../../../../../enviorments/enviorment";

@Component({
    selector: 'app-carisma',
    imports: [],
    templateUrl: './carisma.component.html',
    styleUrl: './carisma.component.css',
    standalone: true,
  providers: [
    DescripcionesService,
    {provide: BASE_PATH, useValue: environment.BASE_PATH}
  ]
})
export class CarismaComponent implements OnInit{

  @Input() data?: Carisma;
  private readonly descripcionesService = inject(DescripcionesService);
  constructor(private personajeService : PersonajeService
  ) {}
  public seguidores? : string;
  public lealtad? : string;
  public reaccion? : string;

  ngOnInit(): void {
    this.descripcionesService.descripcionesSearchFindByHabilidadGet('Carisma').subscribe(response => {
      this.seguidores = response.find(it => it.nombre ==="Seguidores")?.descripcion;
      this.lealtad = response.find(it => it.nombre === "lealtad")?.descripcion;
      this.reaccion = response.find(it => it.nombre === "reaccion")?.descripcion;
    });
    this.personajeService.setCarisma(this.data);
  }



}
