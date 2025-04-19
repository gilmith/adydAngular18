import {Injectable, signal} from '@angular/core';
import {Personaje, Sexo} from '../../../../models/personaje';
import {Carisma, Constitucion, Destreza, Fuerza, Inteligencia, Sabiduria} from "adyd-api-client";


@Injectable()
export class PersonajeService {

  public datosCargados = signal(false);

  public personaje : Personaje = {
    alineamiento: "",
    altura: 0,
    carisma: {
      id: 0,
      maxseguidores: 0,
      lealtad: 0,
      reaccion: 0
    },
    categoria: {
      id: 0,
      nombre: '',
      dadoGolpe: 0,
      puntosPericias: 0,
      descripcion: ''
    },
    colorPelo: "",
    constitucion: {
      id: 0,
      ajusteGolpe: 0,
      colapso: 0,
      resurreccion: 0,
      resistenciaVeneno: 0,
      regeneracion: ''
    },
    destreza: {
      id: 0,
      reaccion: 0,
      proyectil: 0,
      defensa: 0
    },
    edad: 0,
    fuerza: {
      id: 0,
      probimpacto: 0,
      ajusteDano: 0,
      pesoTranspor: 0,
      abrirPuertas: '',
      doblarBarras: 0
    },
    inteligencia: {
      id: 0,
      idiomas: 0,
      ilusiones: 0,
      maxConjuros: 0
    },
    nombre: "",
    raza: {
      id: 0,
      description: '',
      nombre : ''
    },
    sabiduria: {
      id: 0,
      defensa: 0,
      bonusConjuros: 0,
      fracasoConjuro: 0
    },
    sexo: Sexo.TBC,
    usuario: ""

  }


  setSabiduria(data: Sabiduria| undefined) {
    if(data){
      this.personaje.sabiduria = data;
    }
    this.cargados()
  }

  setInteligencia(data: Inteligencia| undefined) {
    if(data){
      this.personaje.inteligencia = data;
    }
    this.cargados()
  }
  setConstitucion(data: Constitucion | undefined) {
    if(data){
      this.personaje.constitucion = data;
    }
    this.cargados()
  }
  setCarisma(data: Carisma | undefined) {
    if(data){
      this.personaje.carisma = data;
    }
    this.cargados()
  }
  setDestreza(data: Destreza | undefined) {
    if(data){
      this.personaje.destreza = data;
    }
    this.cargados()
  }
  setFuerza(data: Fuerza | undefined) {
    if(data){
      this.personaje.fuerza = data;
    }
    this.cargados()
  }

  cargados() {
    this.datosCargados.update(() => (this.personaje.carisma.id !== 0
      && this.personaje.constitucion.id !== 0
      && this.personaje.destreza.id !== 0
      && this.personaje.fuerza.id !== 0
      && this.personaje.inteligencia.id !== 0
      && this.personaje.sabiduria.id !== 0)
    );
  }



  constructor() {
    console.log('MiServicio creado con ID:', Math.random().toString(36).substring(2, 15));
  }



}
