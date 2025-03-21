import { Component, Input, OnInit } from '@angular/core';
import { Constitucion } from '../../../../../../models/DescripcionesModel';
import { BackendService } from '../../../../../../services/backend.service';
import { PersonajeService } from '../../../service/personaje.service';

@Component({
    selector: 'app-constitucion',
    imports: [],
    templateUrl: './constitucion.component.html',
    styleUrl: './constitucion.component.css'
})
export class ConstitucionComponent implements OnInit{

  @Input() public data? : Constitucion;

  public ajusteGolpe? : string;
  public shock? : string;
  public resureccion? : string;
  public veneno? : string;
  public regeneracion? : string;
  constructor(private readonly backend : BackendService,
    private personajeService : PersonajeService
  ) {}

  ngOnInit(): void {
    this.backend.getDescripciones('Constitucion').subscribe(response => {
      this.ajusteGolpe = response.find(it => it.caracteristica === "Ajuste Punto de Golpe")?.description;
      this.shock = response.find(it => it.caracteristica === "Shock de Sistema")?.description;
      this.resureccion = response.find(it => it.caracteristica  === "Superviviencia a la resureccion")?.description;
      this.veneno = response.find(it => it.caracteristica === "Proteccion contra veneno")?.description;
      this.regeneracion = response.find(it => it.caracteristica === "Regeneracion")?.description;
    });
    this.personajeService.setConstitucion(this.data);
  }

}
