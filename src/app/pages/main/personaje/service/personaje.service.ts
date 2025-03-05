import { Injectable, signal } from '@angular/core';
import { Personaje } from '../../../../models/personaje';

@Injectable({
  providedIn: 'root'
})

export class PersonajeService {

  public datosCargados = signal(false);

  public personaje : Personaje = {
    fuerza: {
      puntuacionBase: 0,
      probimpacto: 0,
      ajusteDano: 0,
      pesoTranspor: 0,
      pesoMaximo: 0,
      abrirPuertas: '',
      doblarBarras: 0,
    },
    destreza: {
      puntuacionBase: 0,
      reaccion: 0,
      proyectil: 0,
      defensa: 0,
    },
    carisma: {
      puntuacionBase: 0,
      maxseguidores: 0,
      lealtad: 0,
      reaccion: 0,
    },
    constitucion: {
      puntuacionBase: 0,
      ajusteGolpe: 0,
      colapso: 0,
      resurreccion: 0,
      resistenciaVeneno: 0,
      regeneracion: ''
    },
    sabiduria: {
      puntuacionBase: 0,
      defensa: 0,
      bonusConjuros: null,
      fracasoConjuro: 0,
    },
    inteligencia: {
      puntuacionBase: 0,
      idiomas: 0,
      nivelConjuro: 0,
      nuevosConjuros: 0,
      maxConjuros: 0,
      ilusiones: null,
    },
    usuario: '',
    nombre: '',
    raza: {
      nombre: '',
      minimoFuerza: 0,
      minimoDestreza: 0,
      minimoConstitucion: 0,
      minimoInteligencia: 0,
      minimoSabiduria: 0,
      minimoCarisma: 0,
      id: 0,
      modifConstitucion: null,
      modifCarisma: null,
      modifFuerza: null,
      modifDestreza: null,
      modifSabiduria: null,
      modifInteligencia: null,
      descripcion: '',
      habilidadesEspeciales: null,
    }
  }


  setSabiduria(data: import("../../../../models/HabilidadesModels").Sabiduria | undefined) {
    if(data){
      this.personaje.sabiduria = data;
    }
    this.cargados()
  }

  setInteligencia(data: import("../../../../models/HabilidadesModels").Inteligencia | undefined) {
    if(data){
      this.personaje.inteligencia = data;
    }
    this.cargados()
  }
  setConstitucion(data: import("../../../../models/DescripcionesModel").Constitucion | undefined) {
    if(data){
      this.personaje.constitucion = data;
    }
    this.cargados()
  }
  setCarisma(data: import("../../../../models/HabilidadesModels").Carisma | undefined) {
    if(data){
      this.personaje.carisma = data;
    }
    this.cargados()
  }
  setDestreza(data: import("../../../../models/HabilidadesModels").Destreza | undefined) {
    if(data){
      this.personaje.destreza = data;
    }
    this.cargados()
  }
  setFuerza(data: import("../../../../models/HabilidadesModels").Fuerza | undefined) {
    if(data){
      this.personaje.fuerza = data;
    }
    this.cargados()
  }

  cargados() {
    this.datosCargados.update(() => (this.personaje.carisma.puntuacionBase !== 0
      && this.personaje.constitucion.puntuacionBase !== 0 
      && this.personaje.destreza.puntuacionBase !== 0
      && this.personaje.fuerza.puntuacionBase !== 0
      && this.personaje.inteligencia.puntuacionBase !== 0
      && this.personaje.sabiduria.puntuacionBase !== 0)
    );
  }

  

  constructor() { }



}
