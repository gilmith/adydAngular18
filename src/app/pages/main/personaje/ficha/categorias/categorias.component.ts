import { AfterViewInit, Component, ElementRef, inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import {CategoriaService} from "@gilmith/adyd-api-client";
import {BASE_PATH, Category} from "@gilmith/adyd-api-client";

@Component({
    selector: 'app-categorias',
    imports: [],
    templateUrl: './categorias.component.html',
    styleUrl: './categorias.component.css',
    standalone: true,
   providers : [
     CategoriaService,
     {provide: BASE_PATH, useValue: 'https://localhost:10004/api/bbdd'},
   ]
})
export class CategoriasComponent implements OnInit, AfterViewInit{

    public isBorderActive: boolean = false;
    @ViewChild('#carouselCategorias') carouselCategoria?: ElementRef;
    private personajeService = inject(PersonajeService);
    private readonly categoriaService = inject(CategoriaService);
    public arrayCategoriasDisponibles?: Array<Category>;

    constructor(){}

    ngOnInit(): void {
        this.categoriaService.findMinimo(this.personajeService.personaje.fuerza.id,
          this.personajeService.personaje.inteligencia.id,
          this.personajeService.personaje.destreza.id,
          this.personajeService.personaje.constitucion.id,
          this.personajeService.personaje.sabiduria.id,
          this.personajeService.personaje.carisma.id
          ).subscribe(response => {
            this.arrayCategoriasDisponibles = response
          });
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
