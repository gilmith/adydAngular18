import { AfterViewInit, Component, ElementRef, inject, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';
import {CategoriaService, TiradasDeSalvacionService} from "@gilmith/adyd-api-client";
import {BASE_PATH, Category} from "@gilmith/adyd-api-client";
import {MatTooltip} from "@angular/material/tooltip";
import {TitleCasePipe} from "@angular/common";
import {environment} from "../../../../../../../enviorments/enviorment";

@Component({
    selector: 'app-categorias',
  imports: [
    MatTooltip,
    TitleCasePipe
  ],
    templateUrl: './categorias.component.html',
    styleUrl: './categorias.component.css',
    standalone: true,
   providers : [
     CategoriaService,
     {provide: BASE_PATH, useValue: environment.BASE_PATH},
     TiradasDeSalvacionService,
     {provide: BASE_PATH, useValue: environment.BASE_PATH},
   ]
})
export class CategoriasComponent implements OnInit, AfterViewInit{

    public isBorderActive: boolean = false;
    @ViewChild('#carouselCategorias') carouselCategoria?: ElementRef;
    private personajeService = inject(PersonajeService);
    private readonly categoriaService = inject(CategoriaService);
    public arrayCategoriasDisponibles?: Array<Category>;
    private tiradasSalvacionService = inject(TiradasDeSalvacionService);
    public paralizacionVenenoMuerteMagica? : number;
    public cetroVaraVarita? : number;
    public armaAliento? : number;
    public conjuro? : number;
    public petrificacionPolimorfismo? : number;

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
            this.findTiradaSalvacion(response[0].id);
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


  public findTiradaSalvacion(idCategoria : number) {
    this.tiradasSalvacionService.tiradassalvacionSearchFindByCategoriaNivelGet(1, 1)
      .subscribe(response => {
        this.armaAliento = response.armaAliento;
        this.petrificacionPolimorfismo = response.petrificacionPolimorfismo;
        this.cetroVaraVarita = response.cetroVaraVarita;
        this.paralizacionVenenoMuerteMagica = response.petrificacionPolimorfismo;
        this.conjuro = response.conjuro;
        });
  }
}
