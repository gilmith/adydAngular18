import {Component, inject} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {PersonajeService} from "../../service/personaje.service";

@Component({
  selector: 'app-datosjugador',

  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './datos-jugador.component.html',
  styleUrl: './datos-jugador.component.css'
})
export class DatosJugadorComponent {

  private personajeService = inject(PersonajeService);
  public datosJugador: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.datosJugador = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern("^[^0-9]+$")]],
      sexo: ['', Validators.required],
      edad: ['', [Validators.required, Validators.pattern("!/^\d+$/")]],
      altura: ['', [Validators.required, Validators.pattern("!/^\d+$/")]],
      colorPelo: ['', [Validators.required, Validators.pattern("^[^0-9]+$")]]
    });
  }


  guardar() {
    this.personajeService.personaje.nombre = this.datosJugador.controls['nombre'].value;
    this.personajeService.personaje.sexo = this.datosJugador.controls['sexo'].value;
    this.personajeService.personaje.edad = this.datosJugador.controls['edad'].value;
    this.personajeService.personaje.altura = this.datosJugador.controls['altura'].value;
    this.personajeService.personaje.colorPelo = this.datosJugador.controls['colorPelo'].value;
  }
}

