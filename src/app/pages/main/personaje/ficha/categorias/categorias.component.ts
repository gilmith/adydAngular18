import { AfterViewInit, Component, ElementRef, inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import { Categoria, CategoriaSimpleElement } from '../../../../../models/CategoriaModel';
import { BackendService } from '../../../../../services/backend.service';

@Component({
    selector: 'app-categorias',
    imports: [],
    templateUrl: './categorias.component.html',
    styleUrl: './categorias.component.css',
    standalone: true
})
export class CategoriasComponent implements OnInit, AfterViewInit{

    public arrayCategoriasDisponibles? : CategoriaSimpleElement[];
    public isBorderActive: boolean = false;
    public categoria? : CategoriaSimpleElement;
    @ViewChild('#carouselCategorias') carouselCategoria?: ElementRef;
    private personajeService = inject(PersonajeService);
    private readonly backendService = inject(BackendService);

    constructor(){}

    ngOnInit(): void {
        /*this.backendService.getCategorias(this.personajeService.personaje.fuerza.id,
            this.personajeService.personaje.destreza.puntuacionBase,
            this.personajeService.personaje.carisma.puntuacionBase,
            this.personajeService.personaje.constitucion.puntuacionBase,
            this.personajeService.personaje.inteligencia.puntuacionBase,
            this.personajeService.personaje.sabiduria.puntuacionBase
          ).subscribe(response => {
            this.arrayCategoriasDisponibles = response;
          });*/
    }

    toogleBorder() {
        this.isBorderActive = !this.isBorderActive;
        if(!this.personajeService.personaje.categoria.nombre && this.arrayCategoriasDisponibles){
          this.personajeService.personaje.categoria = this.arrayCategoriasDisponibles?.[0];
        }
      }

      ngAfterViewInit() {
        const carouselc = document.getElementById('carouselCategorias');

        if (carouselc) {
          carouselc.addEventListener('slid.bs.carousel', (event :any) => {
            const to = event.to;
            if(this.arrayCategoriasDisponibles){
              this.personajeService.personaje.categoria = this.arrayCategoriasDisponibles?.[to];
            }
          });
        }
      }




}
