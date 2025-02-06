import { Component, OnInit } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import { BackendService } from '../../../../../services/backend.service';

@Component({
  selector: 'app-raza',
  standalone: true,
  imports: [],
  templateUrl: './raza.component.html',
  styleUrl: './raza.component.css'
})
export class RazaComponent implements OnInit{

  public arrayRazasDisponibles : string[] = [];

  constructor(private personajeService : PersonajeService,
    private readonly backend : BackendService
  ) {}

  ngOnInit(): void {
    this.backend.getRazas(this.personajeService.personaje.fuerza.puntuacionBase,
      this.personajeService.personaje.destreza.puntuacionBase,
      this.personajeService.personaje.carisma.puntuacionBase,
      this.personajeService.personaje.constitucion.puntuacionBase,
      this.personajeService.personaje.inteligencia.puntuacionBase,
      this.personajeService.personaje.sabiduria.puntuacionBase
    ).subscribe(response => {
      this.arrayRazasDisponibles = response;
    });
  }

}
