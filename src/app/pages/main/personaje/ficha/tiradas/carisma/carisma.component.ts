import { Component, Input, OnInit } from '@angular/core';
import { Carisma } from '../../../../../../models/HabilidadesModels';
import { BackendService } from '../../../../../../services/backend.service';
import { PersonajeService } from '../../../service/personaje.service';

@Component({
    selector: 'app-carisma',
    imports: [],
    templateUrl: './carisma.component.html',
    styleUrl: './carisma.component.css'
})
export class CarismaComponent implements OnInit{

  @Input() data?: Carisma;

  constructor(private readonly backend : BackendService,
    private personajeService : PersonajeService
  ) {}
  public seguidores? : string;
  public lealtad? : string;
  public reaccion? : string;

  ngOnInit(): void {
    this.backend.getDescripciones('Carisma').subscribe(response => {
      this.seguidores = response.find(it => it.caracteristica ==="Seguidores")?.description;
      this.lealtad = response.find(it => it.caracteristica === "lealtad")?.description;
      this.reaccion = response.find(it => it.caracteristica === "reaccion")?.description;
    });
    this.personajeService.setCarisma(this.data);
  }



}
