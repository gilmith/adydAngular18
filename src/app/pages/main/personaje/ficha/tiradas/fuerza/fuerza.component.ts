import { Component, Input, OnInit } from '@angular/core';
import { Fuerza } from '../../../../../../models/HabilidadesModels';
import { BackendService } from '../../../../../../services/backend.service';
import { Descripciones, DescripcionMin } from '../../../../../../models/DescripcionesModel';
import { PersonajeService } from '../../../service/personaje.service';

@Component({
    selector: 'app-fuerza',
    imports: [],
    templateUrl: './fuerza.component.html',
    styleUrl: './fuerza.component.css',
    standalone:true
})
export class FuerzaComponent implements OnInit {

  @Input() public data? : Fuerza;
  public probImpacto? : string;
  public ajusteDano? : string;
  public pesoAuth? : string;
  public esfuerzoMax? : string;
  public abrirPuertas? : string;
  public doblar? : string;
  constructor(private readonly backend: BackendService,
    private personajeService : PersonajeService
  ) {}


  ngOnInit(): void {
    this.backend.getDescripciones('Fuerza').subscribe(response => {
      this.probImpacto = response.find(it => it.caracteristica === 'Probabilidad Golpe')?.description;
      this.ajusteDano = response.find(it => it.caracteristica === "Ajuste Daño")?.description;
      this.pesoAuth = response.find(it => it.caracteristica ==="Peso autorizado")?.description;
      this.esfuerzoMax = response.find(it => it.caracteristica === "Esfuerzo maximo")?.description;
      this.abrirPuertas = response.find(it => it.caracteristica === "Abrir Puertas")?.description;
      this.doblar = response.find(it => it.caracteristica === "Doblar barras/Alzar Puertas")?.description;
    })
    this.personajeService.setFuerza(this.data);
  }
}
