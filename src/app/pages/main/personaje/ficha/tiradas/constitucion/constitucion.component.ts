import {Component, inject, Input, OnInit} from '@angular/core';
import { PersonajeService } from '../../../service/personaje.service';
import {BASE_PATH, Constitucion, DescripcionesService} from "@gilmith/adyd-api-client";

@Component({
    selector: 'app-constitucion',
    imports: [],
    templateUrl: './constitucion.component.html',
    styleUrl: './constitucion.component.css',
    standalone: true,
  providers: [
    DescripcionesService,
    {provide: BASE_PATH, useValue: 'https://localhost:10004/api/bbdd'}
  ]
})
export class ConstitucionComponent implements OnInit{

  @Input() public data? : Constitucion;

  public ajusteGolpe? : string;
  public shock? : string;
  public resureccion? : string;
  public veneno? : string;
  public regeneracion? : string;
  private readonly descripcionesService = inject(DescripcionesService);


  constructor(private personajeService : PersonajeService) {}

  ngOnInit(): void {
    this.descripcionesService.descripcionesSearchFindByHabilidadGet('Constitucion').subscribe(responseDescription => {
      this.ajusteGolpe = responseDescription.find(it => it.nombre === "Ajuste Punto de Golpe")?.descripcion;
      this.shock = responseDescription.find(it => it.nombre === "Shock de Sistema")?.descripcion;
      this.resureccion = responseDescription.find(it => it.nombre  === "Superviviencia a la resureccion")?.descripcion;
      this.veneno = responseDescription.find(it => it.nombre === "Proteccion contra veneno")?.descripcion;
      this.regeneracion = responseDescription.find(it => it.nombre === "Regeneracion")?.descripcion;
    });
    this.personajeService.setConstitucion(this.data);
  }

}
