import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import { BackendService } from '../../../../../services/backend.service';
import { Raza } from '../../../../../models/RazasModel';

@Component({
    selector: 'app-raza',
    imports: [],
    templateUrl: './raza.component.html',
    styleUrl: './raza.component.css',
    providers: [PersonajeService, BackendService]
})
export class RazaComponent implements OnInit, AfterViewInit{


  public arrayRazasDisponibles? : Raza[];
  public isBorderActive: boolean = false;
  public raza? : Raza;
  @ViewChild('#carouselRazas') carousel?: ElementRef;

  constructor(private readonly personajeService: PersonajeService,
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

  toogleBorder() {
    this.isBorderActive = !this.isBorderActive;
    if(!this.personajeService.personaje.raza && this.arrayRazasDisponibles){
      this.personajeService.personaje.raza = this.arrayRazasDisponibles?.[0];
    }
  }

  ngAfterViewInit() {
    const carousel = document.getElementById('carouselRazas');

    if (carousel) {
      carousel.addEventListener('slid.bs.carousel', (event :any) => {
        const to = event.to;
        if(this.arrayRazasDisponibles){
          this.personajeService.personaje.raza = this.arrayRazasDisponibles?.[to];
        }
      });
    }
  }

}
