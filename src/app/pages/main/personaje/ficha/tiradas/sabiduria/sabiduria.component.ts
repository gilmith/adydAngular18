import { Component, Input, OnInit } from '@angular/core';
import { Sabiduria } from '../../../../../../models/HabilidadesModels';
import { BackendService } from '../../../../../../services/backend.service';
import { PersonajeService } from '../../../service/personaje.service';

@Component({
  selector: 'app-sabiduria',
  standalone: true,
  imports: [],
  templateUrl: './sabiduria.component.html',
  styleUrl: './sabiduria.component.css'
})
export class SabiduriaComponent implements OnInit{
  @Input() public data? : Sabiduria;
  public defensa?: string;
  public bonificacionConjuros? : string;
  public fracaso? : string;
  public inmunidad? : string;
  constructor(private readonly backend : BackendService,
    private personajeService : PersonajeService
  ) {}

  ngOnInit(): void {
    this.backend.getDescripciones('Sabiduria').subscribe(response =>  {
      this.defensa = response.find(it => it.caracteristica === "Ajuste defensa magica")?.description;
      this.bonificacionConjuros = response.find(it => it.caracteristica === "Bonificacion de Conjuros")?.description;
      this.fracaso = response.find(it => it.caracteristica === "Probabilidad de fracaso de conjuros")?.description;
      this.inmunidad = response.find(it => it.caracteristica === "Inmunidad a conjuros")?.description;
    });
    this.personajeService.setSabiduria(this.data);
  }

}
