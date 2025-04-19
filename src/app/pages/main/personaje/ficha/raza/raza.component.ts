import {AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import {Raza, RazaService} from 'adyd-api-client';

@Component({
    selector: 'app-raza',
    imports: [],
    templateUrl: './raza.component.html',
    styleUrl: './raza.component.css',
    standalone: true
})
export class RazaComponent implements OnInit, AfterViewInit{


  public arrayRazasDisponibles? : Raza[];
  public isBorderActive: boolean = false;
  public raza? : Raza;
  @ViewChild('#carouselRazas') carousel?: ElementRef;
  private readonly razasService = inject(RazaService);
  constructor(private personajeService: PersonajeService,
  ) {}

  ngOnInit(): void {
    this.razasService.findRazaMinimo(this.personajeService.personaje.fuerza.id,
      this.personajeService.personaje.destreza.id,
      this.personajeService.personaje.carisma.id,
      this.personajeService.personaje.constitucion.id,
      this.personajeService.personaje.inteligencia.id,
      this.personajeService.personaje.sabiduria.id
    ).subscribe(response => {
      this.arrayRazasDisponibles = response;
    });
  }

  toogleBorder() {
    this.isBorderActive = !this.isBorderActive;
    if(!this.personajeService.personaje.raza && this.arrayRazasDisponibles){
    //  this.personajeService.personaje.raza = this.arrayRazasDisponibles?.[0];
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
