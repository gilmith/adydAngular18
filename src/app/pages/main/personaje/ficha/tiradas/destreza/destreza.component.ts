import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BackendService } from '../../../../../../services/backend.service';
import { Destreza } from '../../../../../../models/HabilidadesModels';
import { PersonajeService } from '../../../service/personaje.service';

@Component({
    selector: 'app-destreza',
    imports: [],
    templateUrl: './destreza.component.html',
    styleUrl: './destreza.component.css',
    standalone: true
})
export class DestrezaComponent implements OnInit{
  public reaccion?: string;
  public ajusteProyectiles?: string;
  public ajusteDefensivo?: string;
  
  @Input() public data? :Destreza;

  constructor(private readonly backend : BackendService,
    private personajeService: PersonajeService
  ) {}



  ngOnInit(): void {
    this.backend.getDescripciones('Destreza').subscribe(response => {
      this.reaccion = response.find(it => it.caracteristica === 'Ajuste Reaccion')?.description;
      this.ajusteProyectiles = response.find(it => it.caracteristica === 'Ajuste Ataque Proyectiles')?.description;
      this.ajusteDefensivo = response.find(it => it.caracteristica ==="Ajuste Defensivo")?.description;
    })  
    this.personajeService.setDestreza(this.data);
  }





}
