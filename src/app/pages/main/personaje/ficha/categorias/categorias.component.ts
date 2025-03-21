import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';

@Component({
    selector: 'app-categorias',
    imports: [],
    templateUrl: './categorias.component.html',
    styleUrl: './categorias.component.css',
    standalone: true
})
export class CategoriasComponent {

    //public arrayCategoriasDisponibles? : Categoria[];
    public isBorderActive: boolean = false;
    //public categoria? : Categoria;
    @ViewChild('#carouselCategorias') carousel?: ElementRef;
    private readonly personajeService = inject(PersonajeService);

    

    

}
