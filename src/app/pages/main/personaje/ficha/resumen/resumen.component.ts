import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PersonajeService } from '../../service/personaje.service';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent implements OnInit, OnChanges {

  private readonly serviceFicha = inject(PersonajeService);

  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    console.log(this.serviceFicha.datosCargados);
  }

}
