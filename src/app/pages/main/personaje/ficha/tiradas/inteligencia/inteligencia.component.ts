import { Component, Input, OnInit } from '@angular/core';
import { Inteligencia } from '../../../../../../models/HabilidadesModels';
import { BackendService } from '../../../../../../services/backend.service';
import { PersonajeService } from '../../../service/personaje.service';

@Component({
  selector: 'app-inteligencia',
  standalone: true,
  imports: [],
  templateUrl: './inteligencia.component.html',
  styleUrl: './inteligencia.component.css'
})
export class InteligenciaComponent implements OnInit{

  @Input() public data? : Inteligencia;
  public idiomas? :string;
  public nivelConjuros? : string;
  public aprender? : string;
  public maxConjuros? : string;
  public inmunidad? : string;

  constructor(private readonly backend :BackendService,
    private personajeService : PersonajeService
  ) {}


  ngOnInit(): void {
    this.backend.getDescripciones('Inteligencia').subscribe(response => {
      this.idiomas = response.find(it => it.caracteristica === "Numero de lenguajes")?.description;
      this.nivelConjuros = response.find(it => it.caracteristica === "Nivel de conjuros")?.description;
      this.aprender = response.find(it => it.caracteristica === "Oportunidad de aprender conjuros")?.description;
      this.maxConjuros = response.find(it => it.caracteristica === "Numero maximo de conjuros")?.description;
      this.inmunidad = response.find(it => it.caracteristica === "Inmunidad de conjuros")?.description;
    });
    this.personajeService.setInteligencia(this.data);
    
  }

}
